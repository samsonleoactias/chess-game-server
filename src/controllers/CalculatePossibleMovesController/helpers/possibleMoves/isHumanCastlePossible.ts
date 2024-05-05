import OneTimeOnlyMoveFlags from "../../../../types/OneTimeOnlyMoveFlags.js";
import Piece from "../../../../types/Piece.js";
import PieceLocations from "../../../../types/PieceLocations.js";
import determineIfAnyPossibleMovesCaptureHumanKing from "./determineIfAnyPossibleMovesCaptureHumanKing.js";

const isHumanCastlePossible = (
  column: number,
  pieceLocations: PieceLocations,
  rook: Piece.HumanRookA | Piece.HumanRookB,
  oneTimeOnlyMoveFlags: OneTimeOnlyMoveFlags
): boolean => {
  if (rook === Piece.HumanRookA) {
    console.log(JSON.stringify(pieceLocations));
    console.log(JSON.stringify(oneTimeOnlyMoveFlags));
  }
  if (
    determineIfAnyPossibleMovesCaptureHumanKing(
      pieceLocations,
      oneTimeOnlyMoveFlags,
      undefined,
      undefined,
      true
    )
  )
    return false;

  let castlePossible = true;

  if (rook === Piece.HumanRookB) {
    for (let i = column + 1; i < 7; i++) {
      if (pieceLocations.matrix[7][i] === true) {
        castlePossible = false;
        break;
      }

      if (
        i <= column + 2 &&
        determineIfAnyPossibleMovesCaptureHumanKing(
          pieceLocations,
          oneTimeOnlyMoveFlags,
          Piece.HumanKing,
          { location: { row: 7, column: i } },
          true
        )
      ) {
        castlePossible = false;
        break;
      }
    }
  } else if (rook === Piece.HumanRookA) {
    for (let i = column - 1; i > 0; i--) {
      if (pieceLocations.matrix[7][i] === true) {
        castlePossible = false;
        break;
      }

      if (
        i >= column - 2 &&
        determineIfAnyPossibleMovesCaptureHumanKing(
          pieceLocations,
          oneTimeOnlyMoveFlags,
          Piece.HumanKing,
          { location: { row: 7, column: i } },
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

export default isHumanCastlePossible;
