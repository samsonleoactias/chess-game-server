import {
  OneTimeOnlyMoveFlags,
  Piece,
  PieceLocations,
  PossibleMovesAssignedToPieces,
} from "../../../types/index.js";
import determineIfAnyPossibleMovesCreateCheckOnAi from "../../CalculatePossibleMovesController/helpers/possibleMoves/determineIfAnyPossibleMovesCreateCheckOnAi.js";

const determineIfCheckmateOnAi = (
  pieceLocations: PieceLocations,
  possibleMoves: PossibleMovesAssignedToPieces,
  oneTimeOnlyMoveFlags: OneTimeOnlyMoveFlags
) => {
  let checkmate = true;

  possibleMoves.aiPawnA?.forEach((possibleMove) => {
    if (
      !determineIfAnyPossibleMovesCreateCheckOnAi(
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
      !determineIfAnyPossibleMovesCreateCheckOnAi(
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
      !determineIfAnyPossibleMovesCreateCheckOnAi(
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
      !determineIfAnyPossibleMovesCreateCheckOnAi(
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
      !determineIfAnyPossibleMovesCreateCheckOnAi(
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
      !determineIfAnyPossibleMovesCreateCheckOnAi(
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
      !determineIfAnyPossibleMovesCreateCheckOnAi(
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
      !determineIfAnyPossibleMovesCreateCheckOnAi(
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
      !determineIfAnyPossibleMovesCreateCheckOnAi(
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
      !determineIfAnyPossibleMovesCreateCheckOnAi(
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
      !determineIfAnyPossibleMovesCreateCheckOnAi(
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
      !determineIfAnyPossibleMovesCreateCheckOnAi(
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
      !determineIfAnyPossibleMovesCreateCheckOnAi(
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
      !determineIfAnyPossibleMovesCreateCheckOnAi(
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
      !determineIfAnyPossibleMovesCreateCheckOnAi(
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
      !determineIfAnyPossibleMovesCreateCheckOnAi(
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
