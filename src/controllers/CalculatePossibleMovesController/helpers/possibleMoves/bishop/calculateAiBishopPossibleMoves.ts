import {
  OneTimeOnlyMoveFlags,
  Piece,
  PieceLocations,
  PossibleMove,
} from "../../../../../types/index.js";
import checkIfSquareIsOccupiedByAiPiece from "../checkIfSquareIsOccupiedByAiPiece.js";
import determineIfAnyPossibleMovesCaptureAiKing from "../determineIfAnyPossibleMovesCaptureAiKing.js";

const calculateAiBishopPossibleMoves = (
  row: number,
  column: number,
  pieceLocations: PieceLocations,
  piece: Piece,
  oneTimeOnlyMoveFlags: OneTimeOnlyMoveFlags,
  checkForCheck: boolean
): PossibleMove[] => {
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
  for (let i = 1; i < Math.min(row, 7 - column); i++) {
    if (!checkIfSquareIsOccupiedByAiPiece(pieceLocations, row - i, column + i))
      possibleMoves.push({ location: { row: row - i, column: column + i } });

    // check if space is occupied, if so space is a valid move, but break the for loop
    if (pieceLocations.matrix[row - i][column + i] === true) {
      break;
    }
  }

  // check down-right direction
  for (let i = 1; i < Math.min(7 - row, 7 - column); i++) {
    if (!checkIfSquareIsOccupiedByAiPiece(pieceLocations, row + i, column + i))
      possibleMoves.push({ location: { row: row + i, column: column + i } });

    // check if space is occupied, if so space is a valid move, but break the for loop
    if (pieceLocations.matrix[row + i][column + i] === true) {
      break;
    }
  }

  // check down-left direction
  for (let i = 1; i < Math.min(7 - row, column); i++) {
    if (!checkIfSquareIsOccupiedByAiPiece(pieceLocations, row + i, column - i))
      possibleMoves.push({ location: { row: row + i, column: column - i } });

    // check if space is occupied, if so space is a valid move, but break the for loop
    if (pieceLocations.matrix[row + i][column - i] === true) {
      break;
    }
  }

  if (checkForCheck) {
    let possibleMovesCheckedForCheckOnAi: PossibleMove[] = [];

    possibleMoves.forEach((possibleMove): void => {
      if (
        !determineIfAnyPossibleMovesCaptureAiKing(
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

export default calculateAiBishopPossibleMoves;
