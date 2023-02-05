import {
  OneTimeOnlyMoveFlags,
  Piece,
  PieceLocations,
  PossibleMove,
} from "../../../../../types";
import checkIfSquareIsOccupiedByHumanPiece from "../helpers/checkIfSquareIsOccupiedByHumanPiece";
import determineIfAnyPossibleMovesCreateCheckOnHuman from "../helpers/determineIfAnyPossibleMovesCreateCheckOnHuman";

const calculateHumanPawnPossibleMoves = (
  row: number,
  column: number,
  pawnInitialMoveEligible: boolean,
  pieceLocations: PieceLocations,
  piece: Piece,
  oneTimeOnlyMoveFlags: OneTimeOnlyMoveFlags
) => {
  const possibleMoves: PossibleMove[] = [];

  // check if space one row up is not occupied
  if (
    row < 7 &&
    pieceLocations.matrix[row + 1][column] === false &&
    !checkIfSquareIsOccupiedByHumanPiece(pieceLocations, row + 1, column)
  ) {
    possibleMoves.push({ location: { row: row + 1, column: column } });
  }

  // check if pawn is eligible for initial move and spaces one row and two rows up are not occupied
  if (
    row === 1 &&
    pawnInitialMoveEligible &&
    pieceLocations.matrix[row + 1][column] === false &&
    pieceLocations.matrix[row + 2][column] === false &&
    !checkIfSquareIsOccupiedByHumanPiece(pieceLocations, row + 2, column)
  ) {
    possibleMoves.push({ location: { row: row + 2, column: column } });
  }

  // check if can capture to the left
  if (
    row < 7 &&
    column > 0 &&
    pieceLocations.matrix[row + 1][column - 1] === true &&
    !checkIfSquareIsOccupiedByHumanPiece(pieceLocations, row + 1, column - 1)
  ) {
    possibleMoves.push({ location: { row: row + 1, column: column - 1 } });
  }

  // check if can capture to the right
  if (
    row < 7 &&
    column < 7 &&
    pieceLocations.matrix[row + 1][column + 1] === true &&
    !checkIfSquareIsOccupiedByHumanPiece(pieceLocations, row + 1, column + 1)
  ) {
    possibleMoves.push({ location: { row: row + 1, column: column + 1 } });
  }

  let possibleMovesCheckedForCheckOnHuman: PossibleMove[] = [];

  possibleMoves.forEach((possibleMove) => {
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
};

export default calculateHumanPawnPossibleMoves;
