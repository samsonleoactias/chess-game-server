import {
  OneTimeOnlyMoveFlags,
  Piece,
  PossibleMovesAssignedToPieces,
} from "../../../../types";
import PieceLocations from "../../../../types/PieceLocations";
import calculateAiBishopPossibleMoves from "./bishop/calculateAiBishopPossibleMoves";
import calculateAiKingPossibleMoves from "./king/calculateAiKingPossibleMoves";
import calculateAiKnightPossibleMoves from "./knight/calculateAiKnightPossibleMoves";
import calculateAiPawnPossibleMoves from "./pawn/calculateHumanPawnPossibleMoves";
import calculateAiQueenPossibleMoves from "./queen/calculateAiQueenPossibleMoves";
import calculateAiRookPossibleMoves from "./rook/calculateAiRookPossibleMoves";

const calculateAiPossibleMoves = (
  pieceLocations: PieceLocations,
  oneTimeOnlyMoveFlags: OneTimeOnlyMoveFlags
) => {
  const aiPossibleMoves: PossibleMovesAssignedToPieces = {};

  if (pieceLocations.aiPawnA.captured === false) {
    aiPossibleMoves.pawnA = calculateAiPawnPossibleMoves(
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
    aiPossibleMoves.pawnB = calculateAiPawnPossibleMoves(
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
    aiPossibleMoves.pawnC = calculateAiPawnPossibleMoves(
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
    aiPossibleMoves.pawnD = calculateAiPawnPossibleMoves(
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
    aiPossibleMoves.pawnE = calculateAiPawnPossibleMoves(
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
    aiPossibleMoves.pawnF = calculateAiPawnPossibleMoves(
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
    aiPossibleMoves.pawnG = calculateAiPawnPossibleMoves(
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
    aiPossibleMoves.pawnH = calculateAiPawnPossibleMoves(
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
    aiPossibleMoves.rookA = calculateAiRookPossibleMoves(
      pieceLocations.aiRookA.row,
      pieceLocations.aiRookA.column,
      pieceLocations,
      Piece.AiRookA,
      oneTimeOnlyMoveFlags,
      true
    );
  }

  if (pieceLocations.aiRookB.captured === false) {
    aiPossibleMoves.rookB = calculateAiRookPossibleMoves(
      pieceLocations.aiRookB.row,
      pieceLocations.aiRookB.column,
      pieceLocations,
      Piece.AiRookB,
      oneTimeOnlyMoveFlags,
      true
    );
  }

  if (pieceLocations.aiKnightA.captured === false) {
    aiPossibleMoves.knightA = calculateAiKnightPossibleMoves(
      pieceLocations.aiKnightA.row,
      pieceLocations.aiKnightA.column,
      pieceLocations,
      Piece.AiKnightA,
      oneTimeOnlyMoveFlags,
      true
    );
  }

  if (pieceLocations.aiKnightB.captured === false) {
    aiPossibleMoves.knightB = calculateAiKnightPossibleMoves(
      pieceLocations.aiKnightB.row,
      pieceLocations.aiKnightB.column,
      pieceLocations,
      Piece.AiKnightB,
      oneTimeOnlyMoveFlags,
      true
    );
  }

  if (pieceLocations.aiBishopA.captured === false) {
    aiPossibleMoves.bishopA = calculateAiBishopPossibleMoves(
      pieceLocations.aiBishopA.row,
      pieceLocations.aiBishopA.column,
      pieceLocations,
      Piece.AiBishopA,
      oneTimeOnlyMoveFlags,
      true
    );
  }

  if (pieceLocations.aiBishopB.captured === false) {
    aiPossibleMoves.bishopB = calculateAiBishopPossibleMoves(
      pieceLocations.aiBishopB.row,
      pieceLocations.aiBishopB.column,
      pieceLocations,
      Piece.AiBishopB,
      oneTimeOnlyMoveFlags,
      true
    );
  }

  if (pieceLocations.aiQueen.captured === false) {
    aiPossibleMoves.queen = calculateAiQueenPossibleMoves(
      pieceLocations.aiQueen.row,
      pieceLocations.aiQueen.column,
      pieceLocations,
      oneTimeOnlyMoveFlags,
      true
    );
  }

  aiPossibleMoves.king = calculateAiKingPossibleMoves(
    pieceLocations.aiKing.row,
    pieceLocations.aiKing.column,
    pieceLocations,
    oneTimeOnlyMoveFlags,
    true
  );

  return aiPossibleMoves;
};

export default calculateAiPossibleMoves;
