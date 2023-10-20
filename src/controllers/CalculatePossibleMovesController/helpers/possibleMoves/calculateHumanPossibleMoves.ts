import {
  OneTimeOnlyMoveFlags,
  Piece,
  PossibleMovesAssignedToPieces,
} from "../../../../types";
import PieceLocations from "../../../../types/PieceLocations";
import calculateHumanBishopPossibleMoves from "./bishop/calculateHumanBishopPossibleMoves";
import calculateHumanKingPossibleMoves from "./king/calculateHumanKingPossibleMoves";
import calculateHumanKnightPossibleMoves from "./knight/calculateHumanKnightPossibleMoves";
import calculateHumanPawnPossibleMoves from "./pawn/calculateHumanPawnPossibleMoves";
import calculateHumanQueenPossibleMoves from "./queen/calculateHumanQueenPossibleMoves";
import calculateHumanRookPossibleMoves from "./rook/calculateHumanRookPossibleMoves";

const calculateHumanPossibleMoves = (
  pieceLocations: PieceLocations,
  oneTimeOnlyMoveFlags: OneTimeOnlyMoveFlags
) => {
  const humanPossibleMoves: PossibleMovesAssignedToPieces = {};

  if (pieceLocations.humanPawnA.captured === false) {
    humanPossibleMoves.pawnA = calculateHumanPawnPossibleMoves(
      pieceLocations.humanPawnA.row,
      pieceLocations.humanPawnA.column,
      pieceLocations,
      Piece.HumanPawnA,
      oneTimeOnlyMoveFlags.humanPawnAInitialMoveEligible,
      oneTimeOnlyMoveFlags,
      false
    );
  }

  if (pieceLocations.humanPawnB.captured === false) {
    humanPossibleMoves.pawnB = calculateHumanPawnPossibleMoves(
      pieceLocations.humanPawnB.row,
      pieceLocations.humanPawnB.column,
      pieceLocations,
      Piece.HumanPawnB,
      oneTimeOnlyMoveFlags.humanPawnBInitialMoveEligible,
      oneTimeOnlyMoveFlags,
      false
    );
  }

  if (pieceLocations.humanPawnC.captured === false) {
    humanPossibleMoves.pawnC = calculateHumanPawnPossibleMoves(
      pieceLocations.humanPawnC.row,
      pieceLocations.humanPawnC.column,
      pieceLocations,
      Piece.HumanPawnC,
      oneTimeOnlyMoveFlags.humanPawnCInitialMoveEligible,
      oneTimeOnlyMoveFlags,
      false
    );
  }

  if (pieceLocations.humanPawnD.captured === false) {
    humanPossibleMoves.pawnD = calculateHumanPawnPossibleMoves(
      pieceLocations.humanPawnD.row,
      pieceLocations.humanPawnD.column,
      pieceLocations,
      Piece.HumanPawnD,
      oneTimeOnlyMoveFlags.humanPawnDInitialMoveEligible,
      oneTimeOnlyMoveFlags,
      false
    );
  }

  if (pieceLocations.humanPawnE.captured === false) {
    humanPossibleMoves.pawnE = calculateHumanPawnPossibleMoves(
      pieceLocations.humanPawnE.row,
      pieceLocations.humanPawnE.column,
      pieceLocations,
      Piece.HumanPawnE,
      oneTimeOnlyMoveFlags.humanPawnEInitialMoveEligible,
      oneTimeOnlyMoveFlags,
      false
    );
  }

  if (pieceLocations.humanPawnF.captured === false) {
    humanPossibleMoves.pawnF = calculateHumanPawnPossibleMoves(
      pieceLocations.humanPawnF.row,
      pieceLocations.humanPawnF.column,
      pieceLocations,
      Piece.HumanPawnF,
      oneTimeOnlyMoveFlags.humanPawnFInitialMoveEligible,
      oneTimeOnlyMoveFlags,
      false
    );
  }

  if (pieceLocations.humanPawnG.captured === false) {
    humanPossibleMoves.pawnG = calculateHumanPawnPossibleMoves(
      pieceLocations.humanPawnG.row,
      pieceLocations.humanPawnG.column,
      pieceLocations,
      Piece.HumanPawnG,
      oneTimeOnlyMoveFlags.humanPawnGInitialMoveEligible,
      oneTimeOnlyMoveFlags,
      false
    );
  }

  if (pieceLocations.humanPawnH.captured === false) {
    humanPossibleMoves.pawnH = calculateHumanPawnPossibleMoves(
      pieceLocations.humanPawnH.row,
      pieceLocations.humanPawnH.column,
      pieceLocations,
      Piece.HumanPawnH,
      oneTimeOnlyMoveFlags.humanPawnHInitialMoveEligible,
      oneTimeOnlyMoveFlags,
      false
    );
  }

  if (pieceLocations.humanRookA.captured === false) {
    humanPossibleMoves.rookA = calculateHumanRookPossibleMoves(
      pieceLocations.humanRookA.row,
      pieceLocations.humanRookA.column,
      pieceLocations,
      Piece.HumanRookA,
      oneTimeOnlyMoveFlags,
      false
    );
  }

  if (pieceLocations.humanRookB.captured === false) {
    humanPossibleMoves.rookB = calculateHumanRookPossibleMoves(
      pieceLocations.humanRookB.row,
      pieceLocations.humanRookB.column,
      pieceLocations,
      Piece.HumanRookB,
      oneTimeOnlyMoveFlags,
      false
    );
  }

  if (pieceLocations.humanKnightA.captured === false) {
    humanPossibleMoves.knightA = calculateHumanKnightPossibleMoves(
      pieceLocations.humanKnightA.row,
      pieceLocations.humanKnightA.column,
      pieceLocations,
      Piece.HumanKnightA,
      oneTimeOnlyMoveFlags,
      false
    );
  }

  if (pieceLocations.humanKnightB.captured === false) {
    humanPossibleMoves.knightB = calculateHumanKnightPossibleMoves(
      pieceLocations.humanKnightB.row,
      pieceLocations.humanKnightB.column,
      pieceLocations,
      Piece.HumanKnightB,
      oneTimeOnlyMoveFlags,
      false
    );
  }

  if (pieceLocations.humanBishopA.captured === false) {
    humanPossibleMoves.bishopA = calculateHumanBishopPossibleMoves(
      pieceLocations.humanBishopA.row,
      pieceLocations.humanBishopA.column,
      pieceLocations,
      Piece.HumanBishopA,
      oneTimeOnlyMoveFlags,
      false
    );
  }

  if (pieceLocations.humanBishopB.captured === false) {
    humanPossibleMoves.bishopB = calculateHumanBishopPossibleMoves(
      pieceLocations.humanBishopB.row,
      pieceLocations.humanBishopB.column,
      pieceLocations,
      Piece.HumanBishopB,
      oneTimeOnlyMoveFlags,
      false
    );
  }

  if (pieceLocations.humanQueen.captured === false) {
    humanPossibleMoves.queen = calculateHumanQueenPossibleMoves(
      pieceLocations.humanQueen.row,
      pieceLocations.humanQueen.column,
      pieceLocations,
      oneTimeOnlyMoveFlags,
      false
    );
  }

  humanPossibleMoves.king = calculateHumanKingPossibleMoves(
    pieceLocations.humanKing.row,
    pieceLocations.humanKing.column,
    pieceLocations,
    oneTimeOnlyMoveFlags,
    false
  );

  return humanPossibleMoves;
};

export default calculateHumanPossibleMoves;
