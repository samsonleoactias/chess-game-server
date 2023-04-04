import {
  OneTimeOnlyMoveFlags,
  Piece,
  PieceLocations,
  PossibleMove,
} from "../../../../../types";
import checkIfSquareIsOccupiedByHumanPiece from "../helpers/checkIfSquareIsOccupiedByHumanPiece";
import determineIfAnyPossibleMovesCreateCheckOnHuman from "../helpers/determineIfAnyPossibleMovesCreateCheckOnHuman";

const calculateHumanKnightPossibleMoves = (
  row: number,
  column: number,
  pieceLocations: PieceLocations,
  piece: Piece,
  oneTimeOnlyMoveFlags: OneTimeOnlyMoveFlags,
  checkForCheck: boolean
) => {
  const possibleMoves: PossibleMove[] = [];

  if (row + 2 <= 7 && column + 1 <= 7)
    if (
      !checkIfSquareIsOccupiedByHumanPiece(pieceLocations, row + 2, column + 1)
    )
      possibleMoves.push({ location: { row: row + 2, column: column + 1 } });

  if (row + 2 <= 7 && column - 1 >= 0)
    if (
      !checkIfSquareIsOccupiedByHumanPiece(pieceLocations, row + 2, column - 1)
    )
      possibleMoves.push({ location: { row: row + 2, column: column - 1 } });

  if (row - 2 >= 0 && column + 1 <= 7)
    if (
      !checkIfSquareIsOccupiedByHumanPiece(pieceLocations, row - 2, column + 1)
    )
      possibleMoves.push({ location: { row: row - 2, column: column + 1 } });

  if (row - 2 >= 0 && column - 1 >= 0)
    if (
      !checkIfSquareIsOccupiedByHumanPiece(pieceLocations, row - 2, column - 1)
    )
      possibleMoves.push({ location: { row: row - 2, column: column - 1 } });

  if (row + 1 <= 7 && column + 2 <= 7)
    if (
      !checkIfSquareIsOccupiedByHumanPiece(pieceLocations, row + 1, column + 2)
    )
      possibleMoves.push({ location: { row: row + 1, column: column + 2 } });

  if (row + 1 <= 7 && column - 2 >= 0)
    if (
      !checkIfSquareIsOccupiedByHumanPiece(pieceLocations, row + 1, column - 2)
    )
      possibleMoves.push({ location: { row: row + 1, column: column - 2 } });

  if (row - 1 >= 0 && column + 2 <= 7)
    if (
      !checkIfSquareIsOccupiedByHumanPiece(pieceLocations, row - 1, column + 2)
    )
      possibleMoves.push({ location: { row: row - 1, column: column + 2 } });

  if (row - 1 >= 0 && column - 2 >= 0)
    if (
      !checkIfSquareIsOccupiedByHumanPiece(pieceLocations, row - 1, column - 2)
    )
      possibleMoves.push({ location: { row: row - 1, column: column - 2 } });

  if (checkForCheck) {
    let possibleMovesCheckedForCheckOnHuman: PossibleMove[] = [];

    possibleMoves.forEach((possibleMove) => {
      if (
        !determineIfAnyPossibleMovesCreateCheckOnHuman(
          pieceLocations,
          piece,
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

export default calculateHumanKnightPossibleMoves;
