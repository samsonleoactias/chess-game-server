import {
  OneTimeOnlyMoveFlags,
  Piece,
  PossibleMovesAssignedToPieces,
  PieceLocations,
} from "../../../../types/index.js";
import calculateAiBishopPossibleMoves from "./bishop/calculateAiBishopPossibleMoves.js";
import calculateAiKingPossibleMoves from "./king/calculateAiKingPossibleMoves.js";
import calculateAiKnightPossibleMoves from "./knight/calculateAiKnightPossibleMoves.js";
import calculateAiPawnPossibleMoves from "./pawn/calculateAiPawnPossibleMoves.js";
import calculateAiQueenPossibleMoves from "./queen/calculateAiQueenPossibleMoves.js";
import calculateAiRookPossibleMoves from "./rook/calculateAiRookPossibleMoves.js";

const calculateAiPossibleMoves = (
  pieceLocations: PieceLocations,
  oneTimeOnlyMoveFlags: OneTimeOnlyMoveFlags
): PossibleMovesAssignedToPieces => {
  const aiPossibleMoves: PossibleMovesAssignedToPieces = {};

  if (pieceLocations.aiPawnA.captured === false) {
    aiPossibleMoves.aiPawnA = calculateAiPawnPossibleMoves(
      pieceLocations.aiPawnA.row,
      pieceLocations.aiPawnA.column,
      oneTimeOnlyMoveFlags.aiPawnAInitialMoveEligible,
      pieceLocations,
      Piece.AiPawnA,
      oneTimeOnlyMoveFlags,
      true
    );
  }

  if (pieceLocations.aiPawnB.captured === false) {
    aiPossibleMoves.aiPawnB = calculateAiPawnPossibleMoves(
      pieceLocations.aiPawnB.row,
      pieceLocations.aiPawnB.column,
      oneTimeOnlyMoveFlags.aiPawnBInitialMoveEligible,
      pieceLocations,
      Piece.AiPawnB,
      oneTimeOnlyMoveFlags,
      true
    );
  }

  if (pieceLocations.aiPawnC.captured === false) {
    aiPossibleMoves.aiPawnC = calculateAiPawnPossibleMoves(
      pieceLocations.aiPawnC.row,
      pieceLocations.aiPawnC.column,
      oneTimeOnlyMoveFlags.aiPawnCInitialMoveEligible,
      pieceLocations,
      Piece.AiPawnC,
      oneTimeOnlyMoveFlags,
      true
    );
  }

  if (pieceLocations.aiPawnD.captured === false) {
    aiPossibleMoves.aiPawnD = calculateAiPawnPossibleMoves(
      pieceLocations.aiPawnD.row,
      pieceLocations.aiPawnD.column,
      oneTimeOnlyMoveFlags.aiPawnDInitialMoveEligible,
      pieceLocations,
      Piece.AiPawnD,
      oneTimeOnlyMoveFlags,
      true
    );
  }

  if (pieceLocations.aiPawnE.captured === false) {
    aiPossibleMoves.aiPawnE = calculateAiPawnPossibleMoves(
      pieceLocations.aiPawnE.row,
      pieceLocations.aiPawnE.column,
      oneTimeOnlyMoveFlags.aiPawnEInitialMoveEligible,
      pieceLocations,
      Piece.AiPawnE,
      oneTimeOnlyMoveFlags,
      true
    );
  }

  if (pieceLocations.aiPawnF.captured === false) {
    aiPossibleMoves.aiPawnF = calculateAiPawnPossibleMoves(
      pieceLocations.aiPawnF.row,
      pieceLocations.aiPawnF.column,
      oneTimeOnlyMoveFlags.aiPawnFInitialMoveEligible,
      pieceLocations,
      Piece.AiPawnF,
      oneTimeOnlyMoveFlags,
      true
    );
  }

  if (pieceLocations.aiPawnG.captured === false) {
    aiPossibleMoves.aiPawnG = calculateAiPawnPossibleMoves(
      pieceLocations.aiPawnG.row,
      pieceLocations.aiPawnG.column,
      oneTimeOnlyMoveFlags.aiPawnGInitialMoveEligible,
      pieceLocations,
      Piece.AiPawnG,
      oneTimeOnlyMoveFlags,
      true
    );
  }

  if (pieceLocations.aiPawnH.captured === false) {
    aiPossibleMoves.aiPawnH = calculateAiPawnPossibleMoves(
      pieceLocations.aiPawnH.row,
      pieceLocations.aiPawnH.column,
      oneTimeOnlyMoveFlags.aiPawnHInitialMoveEligible,
      pieceLocations,
      Piece.AiPawnH,
      oneTimeOnlyMoveFlags,
      true
    );
  }

  if (pieceLocations.aiRookA.captured === false) {
    aiPossibleMoves.aiRookA = calculateAiRookPossibleMoves(
      pieceLocations.aiRookA.row,
      pieceLocations.aiRookA.column,
      pieceLocations,
      Piece.AiRookA,
      oneTimeOnlyMoveFlags,
      true
    );
  }

  if (pieceLocations.aiRookB.captured === false) {
    aiPossibleMoves.aiRookB = calculateAiRookPossibleMoves(
      pieceLocations.aiRookB.row,
      pieceLocations.aiRookB.column,
      pieceLocations,
      Piece.AiRookB,
      oneTimeOnlyMoveFlags,
      true
    );
  }

  if (pieceLocations.aiKnightA.captured === false) {
    aiPossibleMoves.aiKnightA = calculateAiKnightPossibleMoves(
      pieceLocations.aiKnightA.row,
      pieceLocations.aiKnightA.column,
      pieceLocations,
      Piece.AiKnightA,
      oneTimeOnlyMoveFlags,
      true
    );
  }

  if (pieceLocations.aiKnightB.captured === false) {
    aiPossibleMoves.aiKnightB = calculateAiKnightPossibleMoves(
      pieceLocations.aiKnightB.row,
      pieceLocations.aiKnightB.column,
      pieceLocations,
      Piece.AiKnightB,
      oneTimeOnlyMoveFlags,
      true
    );
  }

  if (pieceLocations.aiBishopA.captured === false) {
    aiPossibleMoves.aiBishopA = calculateAiBishopPossibleMoves(
      pieceLocations.aiBishopA.row,
      pieceLocations.aiBishopA.column,
      pieceLocations,
      Piece.AiBishopA,
      oneTimeOnlyMoveFlags,
      true
    );
  }

  if (pieceLocations.aiBishopB.captured === false) {
    aiPossibleMoves.aiBishopB = calculateAiBishopPossibleMoves(
      pieceLocations.aiBishopB.row,
      pieceLocations.aiBishopB.column,
      pieceLocations,
      Piece.AiBishopB,
      oneTimeOnlyMoveFlags,
      true
    );
  }

  if (pieceLocations.aiQueen.captured === false) {
    aiPossibleMoves.aiQueen = calculateAiQueenPossibleMoves(
      pieceLocations.aiQueen.row,
      pieceLocations.aiQueen.column,
      pieceLocations,
      oneTimeOnlyMoveFlags,
      true
    );
  }

  aiPossibleMoves.aiKing = calculateAiKingPossibleMoves(
    pieceLocations.aiKing.row,
    pieceLocations.aiKing.column,
    pieceLocations,
    oneTimeOnlyMoveFlags,
    true
  );

  return aiPossibleMoves;
};

export default calculateAiPossibleMoves;
