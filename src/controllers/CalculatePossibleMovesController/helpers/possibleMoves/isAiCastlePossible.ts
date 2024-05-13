import OneTimeOnlyMoveFlags from "../../../../types/OneTimeOnlyMoveFlags.js";
import Piece from "../../../../types/Piece.js";
import PieceLocations from "../../../../types/PieceLocations.js";
import determineIfAnyPossibleMovesCaptureAiKing from "./determineIfAnyPossibleMovesCaptureAiKing.js";

const isAiCastlePossible = (
  column: number,
  pieceLocations: PieceLocations,
  rook: Piece.AiRookA | Piece.AiRookB,
  oneTimeOnlyMoveFlags: OneTimeOnlyMoveFlags
): boolean => {
  if (
    determineIfAnyPossibleMovesCaptureAiKing(
      pieceLocations,
      oneTimeOnlyMoveFlags,
      undefined,
      undefined,
      true
    )
  )
    return false;

  let castlePossible = true;

  if (rook === Piece.AiRookB) {
    for (let i = column + 1; i < 7; i++) {
      if (pieceLocations.matrix[0][i] === true) {
        castlePossible = false;
        break;
      }

      if (
        i <= column + 2 &&
        determineIfAnyPossibleMovesCaptureAiKing(
          pieceLocations,
          oneTimeOnlyMoveFlags,
          Piece.AiKing,
          { location: { row: 0, column: i } },
          true
        )
      ) {
        castlePossible = false;
        break;
      }
    }
  } else if (rook === Piece.AiRookA) {
    for (let i = column - 1; i > 0; i--) {
      if (pieceLocations.matrix[0][i] === true) {
        castlePossible = false;
        break;
      }

      if (
        i >= column - 2 &&
        determineIfAnyPossibleMovesCaptureAiKing(
          pieceLocations,
          oneTimeOnlyMoveFlags,
          Piece.AiKing,
          { location: { row: 0, column: i } },
          true
        )
      ) {
        castlePossible = false;
        break;
      }
    }
  }

  return castlePossible;
};

export default isAiCastlePossible;
