import PlayerType from "../../../types/PlayerType";

const calculateHumanPawnPossibleMoves = (
  row: number,
  column: number,
  pawnInitialMoveEligible: boolean,
  matrix: boolean[][]
) => {
  const possibleMoves: PossibleMove[] = [];

  // check if space one row up is not occupied
  if (row < 8 && matrix[row + 1][column] === false) {
    possibleMoves.push({ location: { row: row + 1, column: column } });
  }

  // check if pawn is eligible for initial move and spaces one row and two rows up are not occupied
  if (
    row === 2 &&
    pawnInitialMoveEligible &&
    matrix[row + 1][column] === false &&
    matrix[row + 2][column] === false
  ) {
    possibleMoves.push({ location: { row: row + 2, column: column } });
  }

  // check if can capture to the left
  if (row < 8 && column > 1 && matrix[row + 1][column - 1] === true) {
    possibleMoves.push({ location: { row: row + 1, column: column - 1 } });
  }

  // check if can capture to the right
  if (row < 8 && column < 8 && matrix[row + 1][column + 1] === true) {
    possibleMoves.push({ location: { row: row + 1, column: column + 1 } });
  }

  return possibleMoves;
};

export default calculateHumanPawnPossibleMoves;
