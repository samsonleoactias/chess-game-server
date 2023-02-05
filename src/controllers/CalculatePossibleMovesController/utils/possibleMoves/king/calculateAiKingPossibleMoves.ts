import { PossibleMove, Piece, PieceLocations } from "../../../../../types";
import checkIfSquareIsOccupiedByAiPiece from "../helpers/checkIfSquareIsOccupiedByAiPiece";

const calculateAiKingPossibleMoves = (
  row: number,
  column: number,
  rookACastleEligible: boolean,
  rookBCastleEligible: boolean,
  pieceLocations: PieceLocations
) => {
  const possibleMoves: PossibleMove[] = [];

  possibleMoves.push({ location: { row: row + 1, column: column } });
  possibleMoves.push({ location: { row: row - 1, column: column } });
  possibleMoves.push({ location: { row: row, column: column + 1 } });
  possibleMoves.push({ location: { row: row, column: column - 1 } });
  possibleMoves.push({ location: { row: row + 1, column: column + 1 } });
  possibleMoves.push({ location: { row: row + 1, column: column - 1 } });
  possibleMoves.push({ location: { row: row - 1, column: column + 1 } });
  possibleMoves.push({ location: { row: row - 1, column: column + 1 } });

  if (rookACastleEligible) {
    let castlePossible = true;

    for (let i = column; i > 0; i--) {
      if (pieceLocations.matrix[7][i] === true) {
        castlePossible = false;
        break;
      }
    }

    if (
      castlePossible &&
      !checkIfSquareIsOccupiedByAiPiece(pieceLocations, row, column - 2)
    ) {
      possibleMoves.push({
        location: { row: row, column: column - 2 },
        sideEffects: [{ piece: Piece.AiRookA, row: row, column: column - 1 }],
      });
    }
  }

  if (rookBCastleEligible) {
    let castlePossible = true;

    for (let i = column; i < 8; i++) {
      if (pieceLocations.matrix[7][i] === true) {
        castlePossible = false;
        break;
      }
    }

    if (
      castlePossible &&
      !checkIfSquareIsOccupiedByAiPiece(pieceLocations, row, column + 2)
    ) {
      possibleMoves.push({
        location: { row: row, column: column + 2 },
        sideEffects: [{ piece: Piece.AiRookB, row: row, column: column + 1 }],
      });
    }
  }

  return possibleMoves;
};

export default calculateAiKingPossibleMoves;
