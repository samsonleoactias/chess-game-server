import {
  OneTimeOnlyMoveFlags,
  Piece,
  PieceLocations,
  PossibleMove,
} from "../../../../../types";
import checkIfSquareIsOccupiedByHumanPiece from "../checkIfSquareIsOccupiedByHumanPiece";
import determineIfAnyPossibleMovesCreateCheckOnHuman from "../determineIfAnyPossibleMovesCreateCheckOnHuman";

const calculateHumanRookPossibleMoves = (
  row: number,
  column: number,
  pieceLocations: PieceLocations,
  piece: Piece,
  oneTimeOnlyMoveFlags: OneTimeOnlyMoveFlags,
  checkForCheck: boolean
): PossibleMove[] => {
  const possibleMoves: PossibleMove[] = [];

  // check rows above
  for (let i = row + 1; i <= 7; i++) {
    if (!checkIfSquareIsOccupiedByHumanPiece(pieceLocations, i, column))
      possibleMoves.push({ location: { row: i, column: column } });

    // check if space is occupied, if so space is a valid move, but break the for loop
    if (pieceLocations.matrix[i][column] === true) {
      break;
    }
  }

  // check rows below
  for (let i = row - 1; i >= 0; i--) {
    if (!checkIfSquareIsOccupiedByHumanPiece(pieceLocations, i, column))
      possibleMoves.push({ location: { row: i, column: column } });

    // check if space is occupied, if so space is a valid move, but break the for loop
    if (pieceLocations.matrix[i][column] === true) {
      break;
    }
  }

  // check columns to the right
  for (let i = column + 1; i <= 7; i++) {
    if (!checkIfSquareIsOccupiedByHumanPiece(pieceLocations, row, i))
      possibleMoves.push({ location: { row: row, column: i } });

    // check if space is occupied, if so space is a valid move, but break the for loop
    if (pieceLocations.matrix[row][i] === true) {
      break;
    }
  }

  // check columns to the left
  for (let i = column - 1; i >= 0; i--) {
    if (!checkIfSquareIsOccupiedByHumanPiece(pieceLocations, row, i))
      possibleMoves.push({ location: { row: row, column: i } });

    // check if space is occupied, if so space is a valid move, but break the for loop
    if (pieceLocations.matrix[row][i] === true) {
      break;
    }
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

export default calculateHumanRookPossibleMoves;
