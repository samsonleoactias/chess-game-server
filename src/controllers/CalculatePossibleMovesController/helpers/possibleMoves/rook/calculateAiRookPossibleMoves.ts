import {
  OneTimeOnlyMoveFlags,
  Piece,
  PieceLocations,
  PossibleMove,
} from "../../../../../types";
import checkIfSquareIsOccupiedByAiPiece from "../checkIfSquareIsOccupiedByAiPiece";
import determineIfAnyPossibleMovesCreateCheckOnAi from "../determineIfAnyPossibleMovesCreateCheckOnAi";

const calculateAiRookPossibleMoves = (
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
    if (!checkIfSquareIsOccupiedByAiPiece(pieceLocations, i, column))
      possibleMoves.push({ location: { row: i, column: column } });

    // check if space is occupied, if so space is a valid move, but break the for loop
    if (pieceLocations.matrix[i][column] === true) {
      break;
    }
  }

  // check rows below
  for (let i = row - 1; i >= 0; i--) {
    if (!checkIfSquareIsOccupiedByAiPiece(pieceLocations, i, column))
      possibleMoves.push({ location: { row: i, column: column } });

    // check if space is occupied, if so space is a valid move, but break the for loop
    if (pieceLocations.matrix[i][column] === true) {
      break;
    }
  }

  // check columns to the right
  for (let i = column + 1; i <= 7; i++) {
    if (!checkIfSquareIsOccupiedByAiPiece(pieceLocations, row, i))
      possibleMoves.push({ location: { row: row, column: i } });

    // check if space is occupied, if so space is a valid move, but break the for loop
    if (pieceLocations.matrix[row][i] === true) {
      break;
    }
  }

  // check columns to the left
  for (let i = column - 1; i >= 0; i--) {
    if (!checkIfSquareIsOccupiedByAiPiece(pieceLocations, row, i))
      possibleMoves.push({ location: { row: row, column: i } });

    // check if space is occupied, if so space is a valid move, but break the for loop
    if (pieceLocations.matrix[row][i] === true) {
      break;
    }
  }

  if (checkForCheck) {
    let possibleMovesCheckedForCheckOnAi: PossibleMove[] = [];

    possibleMoves.forEach((possibleMove): void => {
      if (
        !determineIfAnyPossibleMovesCreateCheckOnAi(
          pieceLocations,
          piece,
          possibleMove,
          oneTimeOnlyMoveFlags
        )
      ) {
        possibleMovesCheckedForCheckOnAi.push(possibleMove);
      }
    });

    return possibleMovesCheckedForCheckOnAi;
  }

  return possibleMoves;
};

export default calculateAiRookPossibleMoves;
