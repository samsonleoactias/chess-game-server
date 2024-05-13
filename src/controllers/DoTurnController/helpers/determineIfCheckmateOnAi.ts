import {
  OneTimeOnlyMoveFlags,
  Piece,
  PieceLocations,
  PossibleMovesAssignedToPieces,
} from "../../../types/index.js";
import determineIfAnyPossibleMovesCaptureAiKing from "../../CalculatePossibleMovesController/helpers/possibleMoves/determineIfAnyPossibleMovesCaptureAiKing.js";

const determineIfCheckmateOnAi = (
  pieceLocations: PieceLocations,
  possibleMoves: PossibleMovesAssignedToPieces,
  oneTimeOnlyMoveFlags: OneTimeOnlyMoveFlags
) => {
  let checkmate = true;

  possibleMoves.aiPawnA?.forEach((possibleMove) => {
    if (
      !determineIfAnyPossibleMovesCaptureAiKing(
        pieceLocations,
        oneTimeOnlyMoveFlags,
        Piece.AiPawnA,
        possibleMove
      )
    ) {
      checkmate = false;
    }
  });

  if (!checkmate) return false;

  possibleMoves.aiPawnB?.forEach((possibleMove) => {
    if (
      !determineIfAnyPossibleMovesCaptureAiKing(
        pieceLocations,
        oneTimeOnlyMoveFlags,
        Piece.AiPawnB,
        possibleMove
      )
    ) {
      checkmate = false;
    }
  });

  if (!checkmate) return false;

  possibleMoves.aiPawnC?.forEach((possibleMove) => {
    if (
      !determineIfAnyPossibleMovesCaptureAiKing(
        pieceLocations,
        oneTimeOnlyMoveFlags,
        Piece.AiPawnC,
        possibleMove
      )
    ) {
      checkmate = false;
    }
  });

  if (!checkmate) return false;

  possibleMoves.aiPawnD?.forEach((possibleMove) => {
    if (
      !determineIfAnyPossibleMovesCaptureAiKing(
        pieceLocations,
        oneTimeOnlyMoveFlags,
        Piece.AiPawnD,
        possibleMove
      )
    ) {
      checkmate = false;
    }
  });

  if (!checkmate) return false;

  possibleMoves.aiPawnE?.forEach((possibleMove) => {
    if (
      !determineIfAnyPossibleMovesCaptureAiKing(
        pieceLocations,
        oneTimeOnlyMoveFlags,
        Piece.AiPawnE,
        possibleMove
      )
    ) {
      checkmate = false;
    }
  });

  if (!checkmate) return false;

  possibleMoves.aiPawnF?.forEach((possibleMove) => {
    if (
      !determineIfAnyPossibleMovesCaptureAiKing(
        pieceLocations,
        oneTimeOnlyMoveFlags,
        Piece.AiPawnF,
        possibleMove
      )
    ) {
      checkmate = false;
    }
  });

  if (!checkmate) return false;

  possibleMoves.aiPawnG?.forEach((possibleMove) => {
    if (
      !determineIfAnyPossibleMovesCaptureAiKing(
        pieceLocations,
        oneTimeOnlyMoveFlags,
        Piece.AiPawnG,
        possibleMove
      )
    ) {
      checkmate = false;
    }
  });

  if (!checkmate) return false;

  possibleMoves.aiPawnH?.forEach((possibleMove) => {
    if (
      !determineIfAnyPossibleMovesCaptureAiKing(
        pieceLocations,
        oneTimeOnlyMoveFlags,
        Piece.AiPawnH,
        possibleMove
      )
    ) {
      checkmate = false;
    }
  });

  if (!checkmate) return false;

  possibleMoves.aiRookA?.forEach((possibleMove) => {
    if (
      !determineIfAnyPossibleMovesCaptureAiKing(
        pieceLocations,
        oneTimeOnlyMoveFlags,
        Piece.AiRookA,
        possibleMove
      )
    ) {
      checkmate = false;
    }
  });

  if (!checkmate) return false;

  possibleMoves.aiRookB?.forEach((possibleMove) => {
    if (
      !determineIfAnyPossibleMovesCaptureAiKing(
        pieceLocations,
        oneTimeOnlyMoveFlags,
        Piece.AiRookB,
        possibleMove
      )
    ) {
      checkmate = false;
    }
  });

  if (!checkmate) return false;

  possibleMoves.aiKnightA?.forEach((possibleMove) => {
    if (
      !determineIfAnyPossibleMovesCaptureAiKing(
        pieceLocations,
        oneTimeOnlyMoveFlags,
        Piece.AiKnightA,
        possibleMove
      )
    ) {
      checkmate = false;
    }
  });

  if (!checkmate) return false;

  possibleMoves.aiKnightB?.forEach((possibleMove) => {
    if (
      !determineIfAnyPossibleMovesCaptureAiKing(
        pieceLocations,
        oneTimeOnlyMoveFlags,
        Piece.AiKnightB,
        possibleMove
      )
    ) {
      checkmate = false;
    }
  });

  if (!checkmate) return false;

  possibleMoves.aiBishopA?.forEach((possibleMove) => {
    if (
      !determineIfAnyPossibleMovesCaptureAiKing(
        pieceLocations,
        oneTimeOnlyMoveFlags,
        Piece.AiBishopA,
        possibleMove
      )
    ) {
      checkmate = false;
    }
  });

  if (!checkmate) return false;

  possibleMoves.aiBishopB?.forEach((possibleMove) => {
    if (
      !determineIfAnyPossibleMovesCaptureAiKing(
        pieceLocations,
        oneTimeOnlyMoveFlags,
        Piece.AiBishopB,
        possibleMove
      )
    ) {
      checkmate = false;
    }
  });

  if (!checkmate) return false;

  possibleMoves.aiQueen?.forEach((possibleMove) => {
    if (
      !determineIfAnyPossibleMovesCaptureAiKing(
        pieceLocations,
        oneTimeOnlyMoveFlags,
        Piece.AiQueen,
        possibleMove
      )
    ) {
      checkmate = false;
    }
  });

  if (!checkmate) return false;

  possibleMoves.aiKing?.forEach((possibleMove) => {
    if (
      !determineIfAnyPossibleMovesCaptureAiKing(
        pieceLocations,
        oneTimeOnlyMoveFlags,
        Piece.AiKing,
        possibleMove
      )
    ) {
      checkmate = false;
    }
  });

  return checkmate;
};

export default determineIfCheckmateOnAi;
