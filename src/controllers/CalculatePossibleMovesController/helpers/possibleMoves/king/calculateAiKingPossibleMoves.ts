import {
  PossibleMove,
  Piece,
  PieceLocations,
  OneTimeOnlyMoveFlags,
} from "../../../../../types";
import checkIfSquareIsOccupiedByAiPiece from "../checkIfSquareIsOccupiedByAiPiece";
import determineIfAnyPossibleMovesCreateCheckOnAi from "../determineIfAnyPossibleMovesCreateCheckOnAi";

const calculateAiKingPossibleMoves = (
  row: number,
  column: number,
  pieceLocations: PieceLocations,
  oneTimeOnlyMoveFlags: OneTimeOnlyMoveFlags,
  checkForCheck: boolean
) => {
  const possibleMoves: PossibleMove[] = [];

  possibleMoves.push({ location: { row: row + 1, column: column } });
  possibleMoves.push({ location: { row: row - 1, column: column } });
  possibleMoves.push({ location: { row: row, column: column + 1 } });
  possibleMoves.push({ location: { row: row, column: column - 1 } });
  possibleMoves.push({ location: { row: row + 1, column: column + 1 } });
  possibleMoves.push({ location: { row: row + 1, column: column - 1 } });
  possibleMoves.push({ location: { row: row - 1, column: column + 1 } });
  possibleMoves.push({ location: { row: row - 1, column: column + 1 } });

  // TODO add additional rules for castles
  if (oneTimeOnlyMoveFlags.aiCastleRookAEligible) {
    let castlePossible = true;

    for (let i = column; i > 0; i--) {
      if (pieceLocations.matrix[7][i] === true) {
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

    for (let i = column; i < 8; i++) {
      if (pieceLocations.matrix[7][i] === true) {
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

    possibleMoves.forEach((possibleMove) => {
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
