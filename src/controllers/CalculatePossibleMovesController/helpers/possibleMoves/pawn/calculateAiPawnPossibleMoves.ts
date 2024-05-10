import {
  OneTimeOnlyMoveFlags,
  Piece,
  PieceLocations,
  PossibleMove,
} from "../../../../../types/index.js";
import checkIfSquareIsOccupiedByAiPiece from "../checkIfSquareIsOccupiedByAiPiece.js";
import determineIfAnyPossibleMovesCaptureAiKing from "../determineIfAnyPossibleMovesCaptureAiKing.js";
import calculateAiPawnEnPassant from "./helpers/calculateAiPawnEnPassant.js";

const calculateAiPawnPossibleMoves = (
  row: number,
  column: number,
  pawnInitialMoveEligible: boolean,
  pieceLocations: PieceLocations,
  piece: Piece,
  oneTimeOnlyMoveFlags: OneTimeOnlyMoveFlags,
  checkForCheck: boolean
): PossibleMove[] => {
  const possibleMoves: PossibleMove[] = [];

  // check if space one row up is not occupied
  if (
    row < 7 &&
    pieceLocations.matrix[row + 1][column] === false &&
    !checkIfSquareIsOccupiedByAiPiece(pieceLocations, row + 1, column)
  ) {
    possibleMoves.push({ location: { row: row + 1, column: column } });
  }

  // check if pawn is eligible for initial move and spaces one row and two rows up are not occupied
  if (
    row === 1 &&
    pawnInitialMoveEligible &&
    pieceLocations.matrix[row + 1][column] === false &&
    pieceLocations.matrix[row + 2][column] === false &&
    !checkIfSquareIsOccupiedByAiPiece(pieceLocations, row + 2, column)
  ) {
    possibleMoves.push({ location: { row: row + 2, column: column } });
  }

  // check if can capture to the left
  if (
    row < 7 &&
    column > 0 &&
    pieceLocations.matrix[row + 1][column - 1] === true &&
    !checkIfSquareIsOccupiedByAiPiece(pieceLocations, row + 1, column - 1)
  ) {
    possibleMoves.push({ location: { row: row + 1, column: column - 1 } });
  }

  // check if can capture to the right
  if (
    row < 7 &&
    column < 7 &&
    pieceLocations.matrix[row + 1][column + 1] === true &&
    !checkIfSquareIsOccupiedByAiPiece(pieceLocations, row + 1, column + 1)
  ) {
    possibleMoves.push({ location: { row: row + 1, column: column + 1 } });
  }

  let enPassantMoves = calculateAiPawnEnPassant(
    piece,
    oneTimeOnlyMoveFlags,
    pieceLocations
  );

  if (enPassantMoves.length > 0) {
    possibleMoves.push(...enPassantMoves);
  }

  if (checkForCheck) {
    let possibleMovesCheckedForCheckOnAi: PossibleMove[] = [];

    possibleMoves.forEach((possibleMove): void => {
      if (
        !determineIfAnyPossibleMovesCaptureAiKing(
          pieceLocations,
          oneTimeOnlyMoveFlags,
          piece,
          possibleMove
        )
      ) {
        possibleMovesCheckedForCheckOnAi.push(possibleMove);
      }
    });

    return possibleMovesCheckedForCheckOnAi;
  }

  return possibleMoves;
};

export default calculateAiPawnPossibleMoves;
