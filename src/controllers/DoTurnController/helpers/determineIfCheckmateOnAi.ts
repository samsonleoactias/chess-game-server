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
        Piece.AiPawnA,
        possibleMove,
        oneTimeOnlyMoveFlags
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
        Piece.AiPawnB,
        possibleMove,
        oneTimeOnlyMoveFlags
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
        Piece.AiPawnC,
        possibleMove,
        oneTimeOnlyMoveFlags
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
        Piece.AiPawnD,
        possibleMove,
        oneTimeOnlyMoveFlags
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
        Piece.AiPawnE,
        possibleMove,
        oneTimeOnlyMoveFlags
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
        Piece.AiPawnF,
        possibleMove,
        oneTimeOnlyMoveFlags
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
        Piece.AiPawnG,
        possibleMove,
        oneTimeOnlyMoveFlags
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
        Piece.AiPawnH,
        possibleMove,
        oneTimeOnlyMoveFlags
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
        Piece.AiRookA,
        possibleMove,
        oneTimeOnlyMoveFlags
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
        Piece.AiRookB,
        possibleMove,
        oneTimeOnlyMoveFlags
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
        Piece.AiKnightA,
        possibleMove,
        oneTimeOnlyMoveFlags
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
        Piece.AiKnightB,
        possibleMove,
        oneTimeOnlyMoveFlags
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
        Piece.AiBishopA,
        possibleMove,
        oneTimeOnlyMoveFlags
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
        Piece.AiBishopB,
        possibleMove,
        oneTimeOnlyMoveFlags
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
        Piece.AiQueen,
        possibleMove,
        oneTimeOnlyMoveFlags
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
        Piece.AiKing,
        possibleMove,
        oneTimeOnlyMoveFlags
      )
    ) {
      checkmate = false;
    }
  });

  return checkmate;
};

export default determineIfCheckmateOnAi;
