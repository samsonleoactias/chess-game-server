import {
  OneTimeOnlyMoveFlags,
  Piece,
  PieceLocations,
  PossibleMove,
} from "../../../../../types/index.js";
import checkIfSquareIsOccupiedByHumanPiece from "../checkIfSquareIsOccupiedByHumanPiece.js";
import determineIfAnyPossibleMovesCaptureHumanKing from "../determineIfAnyPossibleMovesCaptureHumanKing.js";
import calculateHumanPawnEnPassant from "./helpers/calculateHumanPawnEnPassant.js";

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

  let enPassantMoves: PossibleMove[] = calculateHumanPawnEnPassant(
    piece,
    oneTimeOnlyMoveFlags,
    pieceLocations
  );

  if (enPassantMoves.length > 0) {
    possibleMoves.push(...enPassantMoves);
  }

  if (checkForCheck) {
    let possibleMovesCheckedForCheckOnHuman: PossibleMove[] = [];

    possibleMoves.forEach((possibleMove): void => {
      if (
        !determineIfAnyPossibleMovesCaptureHumanKing(
          pieceLocations,
          oneTimeOnlyMoveFlags,
          piece,
          possibleMove
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
