import {
  PossibleMove,
  Piece,
  PieceLocations,
  OneTimeOnlyMoveFlags,
} from "../../../../../types/index.js";
import checkIfSquareIsOccupiedByAiPiece from "../checkIfSquareIsOccupiedByAiPiece.js";
import determineIfAnyPossibleMovesCaptureAiKing from "../determineIfAnyPossibleMovesCaptureAiKing.js";
import isAiCastlePossible from "../isAiCastlePossible.js";

const calculateAiKingPossibleMoves = (
  row: number,
  column: number,
  pieceLocations: PieceLocations,
  oneTimeOnlyMoveFlags: OneTimeOnlyMoveFlags,
  checkForCheck: boolean,
  humanCastleCheck?: boolean
): PossibleMove[] => {
  const possibleMoves: PossibleMove[] = [];

  if (
    row !== 7 &&
    !checkIfSquareIsOccupiedByAiPiece(pieceLocations, row + 1, column)
  ) {
    possibleMoves.push({ location: { row: row + 1, column: column } });
  }

  if (
    row !== 0 &&
    !checkIfSquareIsOccupiedByAiPiece(pieceLocations, row - 1, column)
  ) {
    possibleMoves.push({ location: { row: row - 1, column: column } });
  }

  if (
    column !== 7 &&
    !checkIfSquareIsOccupiedByAiPiece(pieceLocations, row, column + 1)
  ) {
    possibleMoves.push({ location: { row: row, column: column + 1 } });
  }

  if (
    column !== 0 &&
    !checkIfSquareIsOccupiedByAiPiece(pieceLocations, row, column - 1)
  ) {
    possibleMoves.push({ location: { row: row, column: column - 1 } });
  }

  if (
    row !== 7 &&
    column !== 7 &&
    !checkIfSquareIsOccupiedByAiPiece(pieceLocations, row + 1, column + 1)
  ) {
    possibleMoves.push({ location: { row: row + 1, column: column + 1 } });
  }

  if (
    row !== 7 &&
    column !== 0 &&
    !checkIfSquareIsOccupiedByAiPiece(pieceLocations, row + 1, column - 1)
  ) {
    possibleMoves.push({ location: { row: row + 1, column: column - 1 } });
  }

  if (
    row !== 0 &&
    column !== 7 &&
    !checkIfSquareIsOccupiedByAiPiece(pieceLocations, row - 1, column + 1)
  ) {
    possibleMoves.push({ location: { row: row - 1, column: column + 1 } });
  }

  if (
    row !== 0 &&
    column !== 0 &&
    !checkIfSquareIsOccupiedByAiPiece(pieceLocations, row - 1, column - 1)
  ) {
    possibleMoves.push({ location: { row: row - 1, column: column - 1 } });
  }

  if (
    !humanCastleCheck &&
    oneTimeOnlyMoveFlags.aiCastleRookBEligible &&
    isAiCastlePossible(
      column,
      pieceLocations,
      Piece.AiRookB,
      oneTimeOnlyMoveFlags
    )
  ) {
    possibleMoves.push({
      location: { row: row, column: column - 2 },
      sideEffects: [{ piece: Piece.AiRookB, row: row, column: column - 1 }],
    });
  }

  if (
    !humanCastleCheck &&
    oneTimeOnlyMoveFlags.aiCastleRookAEligible &&
    isAiCastlePossible(
      column,
      pieceLocations,
      Piece.AiRookA,
      oneTimeOnlyMoveFlags
    )
  ) {
    possibleMoves.push({
      location: { row: row, column: column + 2 },
      sideEffects: [{ piece: Piece.AiRookA, row: row, column: column + 1 }],
    });
  }

  if (checkForCheck) {
    let possibleMovesCheckedForCheckOnAi: PossibleMove[] = [];

    possibleMoves.forEach((possibleMove): void => {
      if (
        !determineIfAnyPossibleMovesCaptureAiKing(
          pieceLocations,
          oneTimeOnlyMoveFlags,
          Piece.AiKing,
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

export default calculateAiKingPossibleMoves;
