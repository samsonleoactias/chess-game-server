import { PieceLocations, PossibleMove } from "../../../../../types";
import checkIfSquareIsOccupiedByAiPiece from "../helpers/checkIfSquareIsOccupiedByAiPiece";

const calculateAiPawnPossibleMoves = (
  row: number,
  column: number,
  pawnInitialMoveEligible: boolean,
  pieceLocations: PieceLocations
) => {
  const possibleMoves: PossibleMove[] = [];

  // check if space one row down is not occupied
  if (
    row > 0 &&
    pieceLocations.matrix[row - 1][column] === false &&
    !checkIfSquareIsOccupiedByAiPiece(pieceLocations, row - 1, column)
  ) {
    possibleMoves.push({ location: { row: row - 1, column: column } });
  }

  // check if pawn is eligible for initial move and spaces one row and two rows down are not occupied
  if (
    row === 6 &&
    pawnInitialMoveEligible &&
    pieceLocations.matrix[row - 1][column] === false &&
    pieceLocations.matrix[row - 2][column] === false &&
    !checkIfSquareIsOccupiedByAiPiece(pieceLocations, row - 2, column)
  ) {
    possibleMoves.push({ location: { row: row - 2, column: column } });
  }

  // check if can capture to the left
  if (
    row > 0 &&
    column > 0 &&
    pieceLocations.matrix[row - 1][column - 1] === true &&
    !checkIfSquareIsOccupiedByAiPiece(pieceLocations, row - 1, column - 1)
  ) {
    possibleMoves.push({ location: { row: row - 1, column: column - 1 } });
  }

  // check if can capture to the right
  if (
    row > 0 &&
    column < 7 &&
    pieceLocations.matrix[row - 1][column + 1] === true &&
    !checkIfSquareIsOccupiedByAiPiece(pieceLocations, row - 1, column + 1)
  ) {
    possibleMoves.push({ location: { row: row - 1, column: column + 1 } });
  }

  return possibleMoves;
};

export default calculateAiPawnPossibleMoves;
