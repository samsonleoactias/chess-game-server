import {
  PossibleMove,
  Piece,
  PieceLocations,
  OneTimeOnlyMoveFlags,
} from "../../../../../types/index.js";
import checkIfSquareIsOccupiedByHumanPiece from "../checkIfSquareIsOccupiedByHumanPiece.js";
import determineIfAnyPossibleMovesCaptureHumanKing from "../determineIfAnyPossibleMovesCaptureHumanKing.js";
import isHumanCastlePossible from "../isHumanCastlePossible.js";

const calculateHumanKingPossibleMoves = (
  row: number,
  column: number,
  pieceLocations: PieceLocations,
  oneTimeOnlyMoveFlags: OneTimeOnlyMoveFlags,
  checkForCheck: boolean
): PossibleMove[] => {
  const possibleMoves: PossibleMove[] = [];

  if (
    row !== 7 &&
    !checkIfSquareIsOccupiedByHumanPiece(pieceLocations, row + 1, column)
  ) {
    possibleMoves.push({ location: { row: row + 1, column: column } });
  }

  if (
    row !== 0 &&
    !checkIfSquareIsOccupiedByHumanPiece(pieceLocations, row - 1, column)
  ) {
    possibleMoves.push({ location: { row: row - 1, column: column } });
  }

  if (
    column !== 7 &&
    !checkIfSquareIsOccupiedByHumanPiece(pieceLocations, row, column + 1)
  ) {
    possibleMoves.push({ location: { row: row, column: column + 1 } });
  }

  if (
    column !== 0 &&
    !checkIfSquareIsOccupiedByHumanPiece(pieceLocations, row, column - 1)
  ) {
    possibleMoves.push({ location: { row: row, column: column - 1 } });
  }

  if (
    row !== 7 &&
    column !== 7 &&
    !checkIfSquareIsOccupiedByHumanPiece(pieceLocations, row + 1, column + 1)
  ) {
    possibleMoves.push({ location: { row: row + 1, column: column + 1 } });
  }

  if (
    row !== 7 &&
    column !== 0 &&
    !checkIfSquareIsOccupiedByHumanPiece(pieceLocations, row + 1, column - 1)
  ) {
    possibleMoves.push({ location: { row: row + 1, column: column - 1 } });
  }

  if (
    row !== 0 &&
    column !== 7 &&
    !checkIfSquareIsOccupiedByHumanPiece(pieceLocations, row - 1, column + 1)
  ) {
    possibleMoves.push({ location: { row: row - 1, column: column + 1 } });
  }

  if (
    row !== 0 &&
    column !== 0 &&
    !checkIfSquareIsOccupiedByHumanPiece(pieceLocations, row - 1, column - 1)
  ) {
    possibleMoves.push({ location: { row: row - 1, column: column - 1 } });
  }

  if (
    oneTimeOnlyMoveFlags.humanCastleRookAEligible &&
    isHumanCastlePossible(
      column,
      pieceLocations,
      Piece.HumanRookA,
      oneTimeOnlyMoveFlags
    )
  ) {
    possibleMoves.push({
      location: { row: row, column: column - 2 },
      sideEffects: [{ piece: Piece.HumanRookA, row: row, column: column - 1 }],
    });
  }
  if (
    oneTimeOnlyMoveFlags.humanCastleRookBEligible &&
    isHumanCastlePossible(
      column,
      pieceLocations,
      Piece.HumanRookB,
      oneTimeOnlyMoveFlags
    )
  ) {
    possibleMoves.push({
      location: { row: row, column: column + 2 },
      sideEffects: [{ piece: Piece.HumanRookB, row: row, column: column + 1 }],
    });
  }

  if (checkForCheck) {
    let possibleMovesCheckedForCheckOnHuman: PossibleMove[] = [];

    possibleMoves.forEach((possibleMove): void => {
      if (
        !determineIfAnyPossibleMovesCaptureHumanKing(
          pieceLocations,
          oneTimeOnlyMoveFlags,
          Piece.HumanKing,
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

export default calculateHumanKingPossibleMoves;
