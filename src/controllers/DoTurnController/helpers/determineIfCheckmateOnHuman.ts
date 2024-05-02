import {
  OneTimeOnlyMoveFlags,
  Piece,
  PieceLocations,
  PossibleMovesAssignedToPieces,
} from "../../../types/index.js";
import determineIfAnyPossibleMovesCreateCheckOnHuman from "../../CalculatePossibleMovesController/helpers/possibleMoves/determineIfAnyPossibleMovesCreateCheckOnHuman.js";

const determineIfCheckmateOnHuman = (
  pieceLocations: PieceLocations,
  possibleMoves: PossibleMovesAssignedToPieces,
  oneTimeOnlyMoveFlags: OneTimeOnlyMoveFlags
) => {
  let checkmate = true;

  possibleMoves.humanPawnA?.forEach((possibleMove) => {
    if (
      !determineIfAnyPossibleMovesCreateCheckOnHuman(
        pieceLocations,
        Piece.HumanPawnA,
        possibleMove,
        oneTimeOnlyMoveFlags
      )
    ) {
      checkmate = false;
    }
  });

  if (!checkmate) return false;

  possibleMoves.humanPawnB?.forEach((possibleMove) => {
    if (
      !determineIfAnyPossibleMovesCreateCheckOnHuman(
        pieceLocations,
        Piece.HumanPawnB,
        possibleMove,
        oneTimeOnlyMoveFlags
      )
    ) {
      checkmate = false;
    }
  });

  if (!checkmate) return false;

  possibleMoves.humanPawnC?.forEach((possibleMove) => {
    if (
      !determineIfAnyPossibleMovesCreateCheckOnHuman(
        pieceLocations,
        Piece.HumanPawnC,
        possibleMove,
        oneTimeOnlyMoveFlags
      )
    ) {
      checkmate = false;
    }
  });

  if (!checkmate) return false;

  possibleMoves.humanPawnD?.forEach((possibleMove) => {
    if (
      !determineIfAnyPossibleMovesCreateCheckOnHuman(
        pieceLocations,
        Piece.HumanPawnD,
        possibleMove,
        oneTimeOnlyMoveFlags
      )
    ) {
      checkmate = false;
    }
  });

  if (!checkmate) return false;

  possibleMoves.humanPawnE?.forEach((possibleMove) => {
    if (
      !determineIfAnyPossibleMovesCreateCheckOnHuman(
        pieceLocations,
        Piece.HumanPawnE,
        possibleMove,
        oneTimeOnlyMoveFlags
      )
    ) {
      checkmate = false;
    }
  });

  if (!checkmate) return false;

  possibleMoves.humanPawnF?.forEach((possibleMove) => {
    if (
      !determineIfAnyPossibleMovesCreateCheckOnHuman(
        pieceLocations,
        Piece.HumanPawnF,
        possibleMove,
        oneTimeOnlyMoveFlags
      )
    ) {
      checkmate = false;
    }
  });

  if (!checkmate) return false;

  possibleMoves.humanPawnG?.forEach((possibleMove) => {
    if (
      !determineIfAnyPossibleMovesCreateCheckOnHuman(
        pieceLocations,
        Piece.HumanPawnG,
        possibleMove,
        oneTimeOnlyMoveFlags
      )
    ) {
      checkmate = false;
    }
  });

  if (!checkmate) return false;

  possibleMoves.humanPawnH?.forEach((possibleMove) => {
    if (
      !determineIfAnyPossibleMovesCreateCheckOnHuman(
        pieceLocations,
        Piece.HumanPawnH,
        possibleMove,
        oneTimeOnlyMoveFlags
      )
    ) {
      checkmate = false;
    }
  });

  if (!checkmate) return false;

  possibleMoves.humanRookA?.forEach((possibleMove) => {
    if (
      !determineIfAnyPossibleMovesCreateCheckOnHuman(
        pieceLocations,
        Piece.HumanRookA,
        possibleMove,
        oneTimeOnlyMoveFlags
      )
    ) {
      checkmate = false;
    }
  });

  if (!checkmate) return false;

  possibleMoves.humanRookB?.forEach((possibleMove) => {
    if (
      !determineIfAnyPossibleMovesCreateCheckOnHuman(
        pieceLocations,
        Piece.HumanRookB,
        possibleMove,
        oneTimeOnlyMoveFlags
      )
    ) {
      checkmate = false;
    }
  });

  if (!checkmate) return false;

  possibleMoves.humanKnightA?.forEach((possibleMove) => {
    if (
      !determineIfAnyPossibleMovesCreateCheckOnHuman(
        pieceLocations,
        Piece.HumanKnightA,
        possibleMove,
        oneTimeOnlyMoveFlags
      )
    ) {
      checkmate = false;
    }
  });

  if (!checkmate) return false;

  possibleMoves.humanKnightB?.forEach((possibleMove) => {
    if (
      !determineIfAnyPossibleMovesCreateCheckOnHuman(
        pieceLocations,
        Piece.HumanKnightB,
        possibleMove,
        oneTimeOnlyMoveFlags
      )
    ) {
      checkmate = false;
    }
  });

  if (!checkmate) return false;

  possibleMoves.humanBishopA?.forEach((possibleMove) => {
    if (
      !determineIfAnyPossibleMovesCreateCheckOnHuman(
        pieceLocations,
        Piece.HumanBishopA,
        possibleMove,
        oneTimeOnlyMoveFlags
      )
    ) {
      checkmate = false;
    }
  });

  if (!checkmate) return false;

  possibleMoves.humanBishopB?.forEach((possibleMove) => {
    if (
      !determineIfAnyPossibleMovesCreateCheckOnHuman(
        pieceLocations,
        Piece.HumanBishopB,
        possibleMove,
        oneTimeOnlyMoveFlags
      )
    ) {
      checkmate = false;
    }
  });

  if (!checkmate) return false;

  possibleMoves.humanQueen?.forEach((possibleMove) => {
    if (
      !determineIfAnyPossibleMovesCreateCheckOnHuman(
        pieceLocations,
        Piece.HumanQueen,
        possibleMove,
        oneTimeOnlyMoveFlags
      )
    ) {
      checkmate = false;
    }
  });

  if (!checkmate) return false;

  possibleMoves.humanKing?.forEach((possibleMove) => {
    if (
      !determineIfAnyPossibleMovesCreateCheckOnHuman(
        pieceLocations,
        Piece.HumanKing,
        possibleMove,
        oneTimeOnlyMoveFlags
      )
    ) {
      checkmate = false;
    }
  });

  return checkmate;
};

export default determineIfCheckmateOnHuman;
