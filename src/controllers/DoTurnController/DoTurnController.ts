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
import chooseAiMove from "./helpers/index.js";
import calculateHumanPossibleMoves from "../CalculatePossibleMovesController/helpers/possibleMoves/calculateHumanPossibleMoves.js";
import { Knex } from "knex";

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
      .select("id")
      .from<Game>("games")
  );

  const pieceLocations: PieceLocations = lodash.first(
    await db
      .where({ game_id: game.gameId })
      .select()
      .from<PieceLocations>("piece_locations")
  );

  const oneTimeOnlyMoveFlags: OneTimeOnlyMoveFlags = lodash.first(
    await db
      .where({ game_id: game.gameId })
      .select()
      .from<OneTimeOnlyMoveFlags>("one_time_only_move_flags")
  );

  if (!pieceLocations || !oneTimeOnlyMoveFlags) {
    throw Error("DB error"); // TODO better error
  }

  const pieceLocationsAfterHumanMove: PieceLocations = await makeMove({
    db,
    pieceLocations,
    piece,
    oneTimeOnlyMoveFlags,
    gameId: game.gameId,
    move: humanMove,
    humanColor: game.humanColor,
  });

  const possibleAiMovesAssignedToPieces: PossibleMovesAssignedToPieces =
    calculateAiPossibleMoves(
      pieceLocationsAfterHumanMove,
      oneTimeOnlyMoveFlags
    );

  const chosenAiMove: { piece: string; move: PossibleMove } = chooseAiMove(
    pieceLocations,
    oneTimeOnlyMoveFlags,
    possibleAiMovesAssignedToPieces
  );

  let pieceLocationsAfterAiMove: PieceLocations;

  // TODO if winning move?
  pieceLocationsAfterAiMove = await makeMove({
    db,
    pieceLocations,
    gameId: game.gameId,
    humanColor: game.humanColor,
    piece: (<any>Piece)[chosenAiMove.piece],
    oneTimeOnlyMoveFlags,
    move: chosenAiMove.move,
  });

  if (pieceLocationsAfterAiMove.humanKing.captured === true) {
    // TODO insert losing logic
    return [game.humanColor, pieceLocationsAfterAiMove, {}, true, false];
  }

  const possibleHumanMovesAssignedToPieces: PossibleMovesAssignedToPieces =
    calculateHumanPossibleMoves(
      pieceLocationsAfterAiMove,
      oneTimeOnlyMoveFlags
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
