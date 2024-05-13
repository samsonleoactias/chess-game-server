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
  checkForStalemate,
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
  humanMove?: PossibleMove;
  piece?: Piece;
  humanPlayerId: string;
  aiFirstMove?: boolean;
};

const DoTurnController = async (
  params: DoTurnControllerParams
): Promise<
  [Color, PieceLocations, PossibleMovesAssignedToPieces, boolean, boolean]
> => {
  const { db, humanMove, piece, humanPlayerId, aiFirstMove } = params;

  const game = lodash.first(
    await db
      .where({ human_player_id: humanPlayerId })
      .select("game_id", "human_player_color")
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
    throw new Error("DB error");
  }

  const finalPieceLocations: PieceLocations =
    dbResultToPieceLocations(pieceLocations);

  const finalOneTimeOnlyMoveFlags: OneTimeOnlyMoveFlags = <
    OneTimeOnlyMoveFlags
  >objectSnakeToCamel(oneTimeOnlyMoveFlags);

  let pieceLocationsAfterHumanMove: PieceLocations;

  if (!aiFirstMove && piece && humanMove) {
    pieceLocationsAfterHumanMove = await makeMove({
      db,
      pieceLocations: finalPieceLocations,
      piece,
      oneTimeOnlyMoveFlags: finalOneTimeOnlyMoveFlags,
      gameId: game.game_id,
      move: humanMove,
      humanColor: <Color>game.human_player_color,
    });
  } else if (aiFirstMove && !piece && !humanMove) {
    pieceLocationsAfterHumanMove = finalPieceLocations;
  } else {
    throw new Error(
      "Do Turn can only happen if there is a human piece and move or if AI is going first."
    );
  }

  const possibleAiMovesAssignedToPieces: PossibleMovesAssignedToPieces =
    calculateAiPossibleMoves(
      pieceLocationsAfterHumanMove,
      finalOneTimeOnlyMoveFlags
    );

  if (checkForStalemate(possibleAiMovesAssignedToPieces)) {
    return [game.humanColor, pieceLocationsAfterHumanMove, {}, true, true];
  }

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
    possibleAiMovesAssignedToPieces
  );

  let pieceLocationsAfterAiMove: PieceLocations = await makeMove({
    db,
    pieceLocations: pieceLocationsAfterHumanMove,
    gameId: game.game_id,
    humanColor: <Color>game.human_player_color,
    piece: <Piece>chosenAiMove.piece,
    oneTimeOnlyMoveFlags: finalOneTimeOnlyMoveFlags,
    move: chosenAiMove.move,
  });

  const oneTimeOnlyMoveFlagsPart2: OneTimeOnlyMoveFlags = lodash.first(
    await db
      .where({ game_id: game.game_id })
      .select()
      .from<OneTimeOnlyMoveFlags>("one_time_only_move_flags")
  );

  const finalOneTimeOnlyMoveFlagsPart2: OneTimeOnlyMoveFlags = <
    OneTimeOnlyMoveFlags
  >objectSnakeToCamel(oneTimeOnlyMoveFlagsPart2);

  const possibleHumanMovesAssignedToPieces: PossibleMovesAssignedToPieces =
    calculateHumanPossibleMoves(
      pieceLocationsAfterAiMove,
      finalOneTimeOnlyMoveFlagsPart2
    );

  if (checkForStalemate(possibleHumanMovesAssignedToPieces)) {
    return [game.humanColor, pieceLocationsAfterHumanMove, {}, true, true];
  }

  if (
    determineIfCheckmateOnHuman(
      pieceLocationsAfterAiMove,
      possibleHumanMovesAssignedToPieces,
      finalOneTimeOnlyMoveFlagsPart2
    )
  ) {
    return [game.humanColor, pieceLocationsAfterAiMove, {}, true, false];
  }
  console.log(
    "possible moves: " + JSON.stringify(possibleHumanMovesAssignedToPieces)
  );
  return [
    game.humanColor,
    pieceLocationsAfterAiMove,
    possibleHumanMovesAssignedToPieces,
    false,
    false,
  ];
};

export default DoTurnController;
