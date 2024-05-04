import {
  PossibleMove,
  Piece,
  PieceLocations,
  OneTimeOnlyMoveFlags,
} from "../../../../../types/index.js";
import checkIfSquareIsOccupiedByAiPiece from "../checkIfSquareIsOccupiedByAiPiece.js";
import determineIfAnyPossibleMovesCreateCheckOnAi from "../determineIfAnyPossibleMovesCreateCheckOnAi.js";

const calculateAiKingPossibleMoves = (
  row: number,
  column: number,
  pieceLocations: PieceLocations,
  oneTimeOnlyMoveFlags: OneTimeOnlyMoveFlags,
  checkForCheck: boolean
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

  // TODO add additional rules for castles
  if (oneTimeOnlyMoveFlags.aiCastleRookAEligible) {
    let castlePossible = true;

    for (let i = column - 1; i > 0; i--) {
      if (pieceLocations.matrix[0][i] === true) {
        castlePossible = false;
        break;
      }
    }

    if (
      castlePossible &&
      !checkIfSquareIsOccupiedByAiPiece(pieceLocations, row, column - 2)
    ) {
      possibleMoves.push({
        location: { row: row, column: column - 2 },
        sideEffects: [{ piece: Piece.AiRookA, row: row, column: column - 1 }],
      });
    }
  }

  if (oneTimeOnlyMoveFlags.aiCastleRookBEligible) {
    let castlePossible = true;

    for (let i = column + 1; i < 8; i++) {
      if (pieceLocations.matrix[0][i] === true) {
        castlePossible = false;
        break;
      }
    }

    if (
      castlePossible &&
      !checkIfSquareIsOccupiedByAiPiece(pieceLocations, row, column + 2)
    ) {
      possibleMoves.push({
        location: { row: row, column: column + 2 },
        sideEffects: [{ piece: Piece.AiRookB, row: row, column: column + 1 }],
      });
    }
  }

  if (checkForCheck) {
    let possibleMovesCheckedForCheckOnAi: PossibleMove[] = [];

    possibleMoves.forEach((possibleMove): void => {
      if (
        !determineIfAnyPossibleMovesCreateCheckOnAi(
          pieceLocations,
          Piece.AiKing,
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

export default calculateAiKingPossibleMoves;
