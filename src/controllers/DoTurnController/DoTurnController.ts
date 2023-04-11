import first from "lodash/first";

import {
  OneTimeOnlyMoveFlags,
  Piece,
  PieceLocations,
  PossibleMove,
  PossibleMovesAssignedToPieces,
} from "../../types";
import db from "../../db/postgresConnection";
import MakeMoveController from "../MakeMoveController";
import calculateAiPossibleMoves from "../CalculatePossibleMovesController/utils/possibleMoves/calculateAiPossibleMoves";
import chooseAiMove from "./helpers/chooseAiMove";
import calculateHumanPossibleMoves from "../CalculatePossibleMovesController/utils/possibleMoves/calculateHumanPossibleMoves";

type DoTurnControllerParams = {
  humanMove: PossibleMove;
  piece: Piece;
  gameId: string;
};

const DoTurnController = async (params: DoTurnControllerParams) => {
  const { humanMove, piece, gameId } = params;

  var pieceLocations: PieceLocations | undefined = first(
    await db
      .where({ game_id: gameId })
      .select()
      .from<PieceLocations>("piece_locations")
  );

  if (pieceLocations) { // TODO fix
  try {
    await MakeMoveController({
      pieceLocations,
      gameId,
      piece,
      move: humanMove,
    });
  } catch (error) {
    return;
  }

  var oneTimeOnlyMoveFlags: OneTimeOnlyMoveFlags = first(
    await db
      .where({ game_id: gameId })
      .select()
      .from<OneTimeOnlyMoveFlags>("one_time_only_move_flags")
  );

  var possibleAiMovesAssignedToPieces: PossibleMovesAssignedToPieces =
    calculateAiPossibleMoves(pieceLocations, oneTimeOnlyMoveFlags);

  var chosenAiMove: { piece: string; move: PossibleMove } = chooseAiMove(
    pieceLocations,
    oneTimeOnlyMoveFlags,
    possibleAiMovesAssignedToPieces
  );

  try {
    await MakeMoveController({
      pieceLocations,
      gameId,
      piece: Piece[chosenAiMove.piece],
      move: chosenAiMove.move,
    });
  } catch (error) {
    return;
  }

  var possibleHumanMovesAssignedToPieces: PossibleMovesAssignedToPieces =
    calculateHumanPossibleMoves(pieceLocations, oneTimeOnlyMoveFlags);

  return possibleHumanMovesAssignedToPieces;
};
