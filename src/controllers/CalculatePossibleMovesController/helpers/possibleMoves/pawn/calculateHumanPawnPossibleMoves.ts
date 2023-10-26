import {
  OneTimeOnlyMoveFlags,
  Piece,
  PieceLocations,
  PossibleMove,
} from "../../../../../types";
import checkIfSquareIsOccupiedByHumanPiece from "../checkIfSquareIsOccupiedByHumanPiece";
import determineIfAnyPossibleMovesCreateCheckOnHuman from "../determineIfAnyPossibleMovesCreateCheckOnHuman";

const calculateHumanPawnPossibleMoves = (
  row: number,
  column: number,
  pieceLocations: PieceLocations,
  piece: Piece,
  pawnInitialMoveEligible: boolean,
  oneTimeOnlyMoveFlags: OneTimeOnlyMoveFlags,
  checkForCheck: boolean
): PossibleMove[] => {
  const possibleMoves: PossibleMove[] = [];

  // check if space one row down is not occupied
  if (
    row > 0 &&
    pieceLocations.matrix[row - 1][column] === false &&
    !checkIfSquareIsOccupiedByHumanPiece(pieceLocations, row - 1, column)
  ) {
    possibleMoves.push({ location: { row: row - 1, column: column } });
  }

  // check if pawn is eligible for initial move and spaces one row and two rows down are not occupied
  if (
    row === 6 &&
    pawnInitialMoveEligible &&
    pieceLocations.matrix[row - 1][column] === false &&
    pieceLocations.matrix[row - 2][column] === false
  ) {
    possibleMoves.push({ location: { row: row - 2, column: column } });
  }

  // check if can capture to the left
  if (
    row > 0 &&
    column > 0 &&
    pieceLocations.matrix[row - 1][column - 1] === true &&
    !checkIfSquareIsOccupiedByHumanPiece(pieceLocations, row - 1, column - 1)
  ) {
    possibleMoves.push({ location: { row: row - 1, column: column - 1 } });
  }

  // check if can capture to the right
  if (
    row > 0 &&
    column < 7 &&
    pieceLocations.matrix[row - 1][column + 1] === true &&
    !checkIfSquareIsOccupiedByHumanPiece(pieceLocations, row - 1, column + 1)
  ) {
    possibleMoves.push({ location: { row: row - 1, column: column + 1 } });
  }

  if (checkForCheck) {
    let possibleMovesCheckedForCheckOnHuman: PossibleMove[] = [];

    possibleMoves.forEach((possibleMove): void => {
      if (
        !determineIfAnyPossibleMovesCreateCheckOnHuman(
          pieceLocations,
          piece,
          possibleMove,
          oneTimeOnlyMoveFlags
        )
      ) {
        possibleMovesCheckedForCheckOnHuman.push(possibleMove);
      }
    });

    return possibleMovesCheckedForCheckOnHuman;
  }

  return possibleMoves;
};

export default calculateHumanPawnPossibleMoves;
