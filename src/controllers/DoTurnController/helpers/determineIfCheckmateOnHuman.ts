import {
  OneTimeOnlyMoveFlags,
  Piece,
  PieceLocations,
  PossibleMovesAssignedToPieces,
} from "../../../types/index.js";
import determineIfAnyPossibleMovesCaptureHumanKing from "../../CalculatePossibleMovesController/helpers/possibleMoves/determineIfAnyPossibleMovesCaptureHumanKing.js";

const determineIfCheckmateOnHuman = (
  pieceLocations: PieceLocations,
  possibleMoves: PossibleMovesAssignedToPieces,
  oneTimeOnlyMoveFlags: OneTimeOnlyMoveFlags
) => {
  let checkmate = true;

  possibleMoves.humanPawnA?.forEach((possibleMove) => {
    if (
      !determineIfAnyPossibleMovesCaptureHumanKing(
        pieceLocations,
        oneTimeOnlyMoveFlags,
        Piece.HumanPawnA,
        possibleMove
      )
    ) {
      checkmate = false;
    }
  });

  if (!checkmate) return false;

  possibleMoves.humanPawnB?.forEach((possibleMove) => {
    if (
      !determineIfAnyPossibleMovesCaptureHumanKing(
        pieceLocations,
        oneTimeOnlyMoveFlags,
        Piece.HumanPawnB,
        possibleMove
      )
    ) {
      checkmate = false;
    }
  });

  if (!checkmate) return false;

  possibleMoves.humanPawnC?.forEach((possibleMove) => {
    if (
      !determineIfAnyPossibleMovesCaptureHumanKing(
        pieceLocations,
        oneTimeOnlyMoveFlags,
        Piece.HumanPawnC,
        possibleMove
      )
    ) {
      checkmate = false;
    }
  });

  if (!checkmate) return false;

  possibleMoves.humanPawnD?.forEach((possibleMove) => {
    if (
      !determineIfAnyPossibleMovesCaptureHumanKing(
        pieceLocations,
        oneTimeOnlyMoveFlags,
        Piece.HumanPawnD,
        possibleMove
      )
    ) {
      checkmate = false;
    }
  });

  if (!checkmate) return false;

  possibleMoves.humanPawnE?.forEach((possibleMove) => {
    if (
      !determineIfAnyPossibleMovesCaptureHumanKing(
        pieceLocations,
        oneTimeOnlyMoveFlags,
        Piece.HumanPawnE,
        possibleMove
      )
    ) {
      checkmate = false;
    }
  });

  if (!checkmate) return false;

  possibleMoves.humanPawnF?.forEach((possibleMove) => {
    if (
      !determineIfAnyPossibleMovesCaptureHumanKing(
        pieceLocations,
        oneTimeOnlyMoveFlags,
        Piece.HumanPawnF,
        possibleMove
      )
    ) {
      checkmate = false;
    }
  });

  if (!checkmate) return false;

  possibleMoves.humanPawnG?.forEach((possibleMove) => {
    if (
      !determineIfAnyPossibleMovesCaptureHumanKing(
        pieceLocations,
        oneTimeOnlyMoveFlags,
        Piece.HumanPawnG,
        possibleMove
      )
    ) {
      checkmate = false;
    }
  });

  if (!checkmate) return false;

  possibleMoves.humanPawnH?.forEach((possibleMove) => {
    if (
      !determineIfAnyPossibleMovesCaptureHumanKing(
        pieceLocations,
        oneTimeOnlyMoveFlags,
        Piece.HumanPawnH,
        possibleMove
      )
    ) {
      checkmate = false;
    }
  });

  if (!checkmate) return false;

  possibleMoves.humanRookA?.forEach((possibleMove) => {
    if (
      !determineIfAnyPossibleMovesCaptureHumanKing(
        pieceLocations,
        oneTimeOnlyMoveFlags,
        Piece.HumanRookA,
        possibleMove
      )
    ) {
      checkmate = false;
    }
  });

  if (!checkmate) return false;

  possibleMoves.humanRookB?.forEach((possibleMove) => {
    if (
      !determineIfAnyPossibleMovesCaptureHumanKing(
        pieceLocations,
        oneTimeOnlyMoveFlags,
        Piece.HumanRookB,
        possibleMove
      )
    ) {
      checkmate = false;
    }
  });

  if (!checkmate) return false;

  possibleMoves.humanKnightA?.forEach((possibleMove) => {
    if (
      !determineIfAnyPossibleMovesCaptureHumanKing(
        pieceLocations,
        oneTimeOnlyMoveFlags,
        Piece.HumanKnightA,
        possibleMove
      )
    ) {
      checkmate = false;
    }
  });

  if (!checkmate) return false;

  possibleMoves.humanKnightB?.forEach((possibleMove) => {
    if (
      !determineIfAnyPossibleMovesCaptureHumanKing(
        pieceLocations,
        oneTimeOnlyMoveFlags,
        Piece.HumanKnightB,
        possibleMove
      )
    ) {
      checkmate = false;
    }
  });

  if (!checkmate) return false;

  possibleMoves.humanBishopA?.forEach((possibleMove) => {
    if (
      !determineIfAnyPossibleMovesCaptureHumanKing(
        pieceLocations,
        oneTimeOnlyMoveFlags,
        Piece.HumanBishopA,
        possibleMove
      )
    ) {
      checkmate = false;
    }
  });

  if (!checkmate) return false;

  possibleMoves.humanBishopB?.forEach((possibleMove) => {
    if (
      !determineIfAnyPossibleMovesCaptureHumanKing(
        pieceLocations,
        oneTimeOnlyMoveFlags,
        Piece.HumanBishopB,
        possibleMove
      )
    ) {
      checkmate = false;
    }
  });

  if (!checkmate) return false;

  possibleMoves.humanQueen?.forEach((possibleMove) => {
    if (
      !determineIfAnyPossibleMovesCaptureHumanKing(
        pieceLocations,
        oneTimeOnlyMoveFlags,
        Piece.HumanQueen,
        possibleMove
      )
    ) {
      checkmate = false;
    }
  });

  if (!checkmate) return false;

  possibleMoves.humanKing?.forEach((possibleMove) => {
    if (
      !determineIfAnyPossibleMovesCaptureHumanKing(
        pieceLocations,
        oneTimeOnlyMoveFlags,
        Piece.HumanKing,
        possibleMove
      )
    ) {
      checkmate = false;
    }
  });

  return checkmate;
};

export default determineIfCheckmateOnHuman;
