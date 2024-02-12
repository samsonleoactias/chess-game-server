import {
  OneTimeOnlyMoveFlags,
  Piece,
  PieceLocations,
  PossibleMove,
} from "../../../../../types/index.js";
import checkIfSquareIsOccupiedByHumanPiece from "../checkIfSquareIsOccupiedByHumanPiece.js";
import determineIfAnyPossibleMovesCreateCheckOnHuman from "../determineIfAnyPossibleMovesCreateCheckOnHuman.js";

const calculateHumanQueenPossibleMoves = (
  row: number,
  column: number,
  pieceLocations: PieceLocations,
  oneTimeOnlyMoveFlags: OneTimeOnlyMoveFlags,
  checkForCheck: boolean
): PossibleMove[] => {
  const possibleMoves: PossibleMove[] = [];

  // check up-left direction
  for (let i = 1; i < Math.min(row, column); i++) {
    if (
      !checkIfSquareIsOccupiedByHumanPiece(pieceLocations, row - i, column - i)
    )
      possibleMoves.push({ location: { row: row - i, column: column - i } });

    // check if space is occupied, if so space is a valid move, but break the for loop
    if (pieceLocations.matrix[row - i][column - i] === true) {
      break;
    }
  }

  // check up-right direction
  for (let i = 1; i < Math.min(row, 8 - column); i++) {
    if (
      !checkIfSquareIsOccupiedByHumanPiece(pieceLocations, row - i, column + i)
    )
      possibleMoves.push({ location: { row: row - i, column: column + i } });

    // check if space is occupied, if so space is a valid move, but break the for loop
    if (pieceLocations.matrix[row - i][column + i] === true) {
      break;
    }
  }

  // check down-right direction
  for (let i = 1; i < Math.min(8 - row, 8 - column); i++) {
    if (
      !checkIfSquareIsOccupiedByHumanPiece(pieceLocations, row + 1, column + i)
    )
      possibleMoves.push({ location: { row: row + i, column: column + i } });

    // check if space is occupied, if so space is a valid move, but break the for loop
    if (pieceLocations.matrix[row + i][column + i] === true) {
      break;
    }
  }

  // check down-left direction
  for (let i = 1; i < Math.min(8 - row, column); i++) {
    if (
      !checkIfSquareIsOccupiedByHumanPiece(pieceLocations, row + i, column - i)
    )
      possibleMoves.push({ location: { row: row + i, column: column - i } });

    // check if space is occupied, if so space is a valid move, but break the for loop
    if (pieceLocations.matrix[row + i][column - i] === true) {
      break;
    }
  }

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
          Piece.HumanQueen,
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

export default calculateHumanQueenPossibleMoves;
