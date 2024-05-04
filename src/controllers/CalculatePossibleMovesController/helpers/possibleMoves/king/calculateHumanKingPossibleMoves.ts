import {
  PossibleMove,
  Piece,
  PieceLocations,
  OneTimeOnlyMoveFlags,
} from "../../../../../types/index.js";
import checkIfSquareIsOccupiedByHumanPiece from "../checkIfSquareIsOccupiedByHumanPiece.js";
import determineIfAnyPossibleMovesCreateCheckOnHuman from "../determineIfAnyPossibleMovesCreateCheckOnHuman.js";

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

  // TODO add additional rules for castles
  if (oneTimeOnlyMoveFlags.humanCastleRookAEligible) {
    console.log(JSON.stringify(pieceLocations.matrix));
    let castlePossible = true;

    for (let i = column - 1; i > 0; i--) {
      if (pieceLocations.matrix[7][i] === true) {
        castlePossible = false;
        break;
      }
    }
    console.log("possible: " + castlePossible);
    if (
      castlePossible &&
      !checkIfSquareIsOccupiedByHumanPiece(pieceLocations, row, column - 2)
    ) {
      possibleMoves.push({
        location: { row: row, column: column - 2 },
        sideEffects: [
          { piece: Piece.HumanRookA, row: row, column: column - 1 },
        ],
      });
    }
  }

  if (oneTimeOnlyMoveFlags.humanCastleRookBEligible) {
    let castlePossible = true;

    for (let i = column + 1; i < 8; i++) {
      if (pieceLocations.matrix[7][i] === true) {
        castlePossible = false;
        break;
      }
    }

    if (
      castlePossible &&
      !checkIfSquareIsOccupiedByHumanPiece(pieceLocations, row, column + 2)
    ) {
      possibleMoves.push({
        location: { row: row, column: column + 2 },
        sideEffects: [
          { piece: Piece.HumanRookB, row: row, column: column + 1 },
        ],
      });
    }
  }

  if (checkForCheck) {
    let possibleMovesCheckedForCheckOnHuman: PossibleMove[] = [];

    possibleMoves.forEach((possibleMove): void => {
      if (
        !determineIfAnyPossibleMovesCreateCheckOnHuman(
          pieceLocations,
          Piece.HumanKing,
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

export default calculateHumanKingPossibleMoves;
