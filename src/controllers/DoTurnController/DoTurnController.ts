import lodash from "lodash";

import {
  Color,
  Game,
  OneTimeOnlyMoveFlags,
  Piece,
  PieceLocations,
  PossibleMove,
  PossibleMovesAssignedToPieces,
} from "../../types/index.js";
import makeMove from "./helpers/makeMove/index.js";
import calculateAiPossibleMoves from "../CalculatePossibleMovesController/helpers/possibleMoves/calculateAiPossibleMoves.js";
import {
  chooseAiMove,
  determineIfCheckmateOnAi,
  determineIfCheckmateOnHuman,
} from "./helpers/index.js";
import calculateHumanPossibleMoves from "../CalculatePossibleMovesController/helpers/possibleMoves/calculateHumanPossibleMoves.js";
import { Knex } from "knex";
import dbResultToPieceLocations from "../utils/dbMaps/dbResultToPieceLocations.js";
import objectSnakeToCamel from "../utils/objectSnakeToCamel.js";

type DoTurnControllerParams = {
  db: Knex;
  humanMove: PossibleMove;
  piece: Piece;
  humanPlayerId: string;
};

const DoTurnController = async (
  params: DoTurnControllerParams
): Promise<
  [Color, PieceLocations, PossibleMovesAssignedToPieces, boolean, boolean]
> => {
  const { db, humanMove, piece, humanPlayerId } = params;

  const game = lodash.first(
    await db
      .where({ human_player_id: humanPlayerId })
      .select("game_id")
      .from<Game>("game")
      .orderBy("created_at", "desc")
  );

  const pieceLocations: PieceLocations = lodash.first(
    await db
      .where({ game_id: game.game_id })
      .select()
      .from<PieceLocations>("piece_locations")
  );

  const oneTimeOnlyMoveFlags: OneTimeOnlyMoveFlags = lodash.first(
    await db
      .where({ game_id: game.game_id })
      .select()
      .from<OneTimeOnlyMoveFlags>("one_time_only_move_flags")
  );

  if (!pieceLocations || !oneTimeOnlyMoveFlags) {
    throw Error("DB error"); // TODO better error
  }

  const finalPieceLocations: PieceLocations =
    dbResultToPieceLocations(pieceLocations);

  const finalOneTimeOnlyMoveFlags: OneTimeOnlyMoveFlags = <
    OneTimeOnlyMoveFlags
  >objectSnakeToCamel(oneTimeOnlyMoveFlags);

  const pieceLocationsAfterHumanMove: PieceLocations = await makeMove({
    db,
    pieceLocations: finalPieceLocations,
    piece,
    oneTimeOnlyMoveFlags: finalOneTimeOnlyMoveFlags,
    gameId: game.game_id,
    move: humanMove,
    humanColor: game.humanColor,
  });

  const possibleAiMovesAssignedToPieces: PossibleMovesAssignedToPieces =
    calculateAiPossibleMoves(
      pieceLocationsAfterHumanMove,
      finalOneTimeOnlyMoveFlags
    );

  if (
    determineIfCheckmateOnAi(
      pieceLocationsAfterHumanMove,
      possibleAiMovesAssignedToPieces,
      finalOneTimeOnlyMoveFlags
    )
  ) {
    return [game.humanColor, pieceLocationsAfterHumanMove, {}, false, true];
  }

  const chosenAiMove: { piece: string; move: PossibleMove } = chooseAiMove(
    pieceLocationsAfterHumanMove,
    finalOneTimeOnlyMoveFlags,
    possibleAiMovesAssignedToPieces
  );

  let pieceLocationsAfterAiMove: PieceLocations = await makeMove({
    db,
    pieceLocations: pieceLocationsAfterHumanMove,
    gameId: game.game_id,
    humanColor: game.humanColor,
    piece: <Piece>chosenAiMove.piece,
    oneTimeOnlyMoveFlags: finalOneTimeOnlyMoveFlags,
    move: chosenAiMove.move,
  });

  const possibleHumanMovesAssignedToPieces: PossibleMovesAssignedToPieces =
    calculateHumanPossibleMoves(
      pieceLocationsAfterAiMove,
      finalOneTimeOnlyMoveFlags
    );

  if (
    determineIfCheckmateOnHuman(
      pieceLocationsAfterAiMove,
      possibleHumanMovesAssignedToPieces,
      finalOneTimeOnlyMoveFlags
    )
  ) {
    return [game.humanColor, pieceLocationsAfterAiMove, {}, true, false];
  }

  return [
    game.humanColor,
    pieceLocationsAfterAiMove,
    possibleHumanMovesAssignedToPieces,
    false,
    false,
  ];
};

export default DoTurnController;
