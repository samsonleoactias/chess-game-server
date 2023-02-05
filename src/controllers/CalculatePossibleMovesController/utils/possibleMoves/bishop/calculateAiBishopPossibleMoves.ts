import { PieceLocations, PossibleMove } from "../../../../../types";
import checkIfSquareIsOccupiedByAiPiece from "../helpers/checkIfSquareIsOccupiedByAiPiece";

const calculateAiBishopPossibleMoves = (
  row: number,
  column: number,
  pieceLocations: PieceLocations
) => {
  const possibleMoves: PossibleMove[] = [];

  // check up-left direction
  for (let i = 1; i < Math.min(row, column); i++) {
    if (!checkIfSquareIsOccupiedByAiPiece(pieceLocations, row - i, column - i))
      possibleMoves.push({ location: { row: row - i, column: column - i } });

    // check if space is occupied, if so space is a valid move, but break the for loop
    if (pieceLocations.matrix[row - i][column - i] === true) {
      break;
    }
  }

  // check up-right direction
  for (let i = 1; i < Math.min(row, 8 - column); i++) {
    if (!checkIfSquareIsOccupiedByAiPiece(pieceLocations, row - i, column + i))
      possibleMoves.push({ location: { row: row - i, column: column + i } });

    // check if space is occupied, if so space is a valid move, but break the for loop
    if (pieceLocations.matrix[row - i][column + i] === true) {
      break;
    }
  }

  // check down-right direction
  for (let i = 1; i < Math.min(8 - row, 8 - column); i++) {
    if (!checkIfSquareIsOccupiedByAiPiece(pieceLocations, row + i, column + i))
      possibleMoves.push({ location: { row: row + i, column: column + i } });

    // check if space is occupied, if so space is a valid move, but break the for loop
    if (pieceLocations.matrix[row + i][column + i] === true) {
      break;
    }
  }

  // check down-left direction
  for (let i = 1; i < Math.min(8 - row, column); i++) {
    if (!checkIfSquareIsOccupiedByAiPiece(pieceLocations, row + i, column - i))
      possibleMoves.push({ location: { row: row + i, column: column - i } });

    // check if space is occupied, if so space is a valid move, but break the for loop
    if (pieceLocations.matrix[row + i][column - i] === true) {
      break;
    }
  }

  return possibleMoves;
};

export default calculateAiBishopPossibleMoves;
