import first from "lodash/first";

import {
  OneTimeOnlyMoveFlags,
  Piece,
  PieceLocations,
  PossibleMove,
  PossibleMovesAssignedToPieces,
} from "../../types";
import MakeMoveController from "../MakeMoveController";
import calculateAiPossibleMoves from "../CalculatePossibleMovesController/utils/possibleMoves/calculateAiPossibleMoves";
import chooseAiMove from "./helpers/chooseAiMove";
import calculateHumanPossibleMoves from "../CalculatePossibleMovesController/utils/possibleMoves/calculateHumanPossibleMoves";
import { Knex } from "knex";

type DoTurnControllerParams = {
  db: Knex;
  humanMove: PossibleMove;
  piece: Piece;
  gameId: string;
};

const DoTurnController = async (params: DoTurnControllerParams) => {
  const { db, humanMove, piece, gameId } = params;

  var pieceLocations: PieceLocations | undefined = first(
    await db
      .where({ game_id: gameId })
      .select()
      .from<PieceLocations>("piece_locations")
  );

  if (pieceLocations) {
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

    var oneTimeOnlyMoveFlags: OneTimeOnlyMoveFlags | undefined = first(
      await db
        .where({ game_id: gameId })
        .select()
        .from<OneTimeOnlyMoveFlags>("one_time_only_move_flags")
    );

    if (oneTimeOnlyMoveFlags) {
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
          piece: (<any>Piece)[chosenAiMove.piece],
          move: chosenAiMove.move,
        });
      } catch (error) {
        return;
      }

      var possibleHumanMovesAssignedToPieces: PossibleMovesAssignedToPieces =
        calculateHumanPossibleMoves(pieceLocations, oneTimeOnlyMoveFlags);

      return possibleHumanMovesAssignedToPieces;
    }
  }
};
