import {
  OneTimeOnlyMoveFlags,
  Piece,
  PossibleMovesAssignedToPieces,
  PieceLocations,
} from "../../../../types/index.js";
import calculateHumanBishopPossibleMoves from "./bishop/calculateHumanBishopPossibleMoves.js";
import calculateHumanKingPossibleMoves from "./king/calculateHumanKingPossibleMoves.js";
import calculateHumanKnightPossibleMoves from "./knight/calculateHumanKnightPossibleMoves.js";
import calculateHumanPawnPossibleMoves from "./pawn/calculateHumanPawnPossibleMoves.js";
import calculateHumanQueenPossibleMoves from "./queen/calculateHumanQueenPossibleMoves.js";
import calculateHumanRookPossibleMoves from "./rook/calculateHumanRookPossibleMoves.js";

const calculateHumanPossibleMoves = (
  pieceLocations: PieceLocations,
  oneTimeOnlyMoveFlags: OneTimeOnlyMoveFlags
): PossibleMovesAssignedToPieces => {
  const humanPossibleMoves: PossibleMovesAssignedToPieces = {};
  if (pieceLocations.humanPawnA.captured === false) {
    humanPossibleMoves.humanPawnA = calculateHumanPawnPossibleMoves(
      pieceLocations.humanPawnA.row,
      pieceLocations.humanPawnA.column,
      pieceLocations,
      Piece.HumanPawnA,
      oneTimeOnlyMoveFlags.humanPawnAInitialMoveEligible,
      oneTimeOnlyMoveFlags,
      true
    );
  }

  if (pieceLocations.humanPawnB.captured === false) {
    humanPossibleMoves.humanPawnB = calculateHumanPawnPossibleMoves(
      pieceLocations.humanPawnB.row,
      pieceLocations.humanPawnB.column,
      pieceLocations,
      Piece.HumanPawnB,
      oneTimeOnlyMoveFlags.humanPawnBInitialMoveEligible,
      oneTimeOnlyMoveFlags,
      true
    );
  }

  if (pieceLocations.humanPawnC.captured === false) {
    humanPossibleMoves.humanPawnC = calculateHumanPawnPossibleMoves(
      pieceLocations.humanPawnC.row,
      pieceLocations.humanPawnC.column,
      pieceLocations,
      Piece.HumanPawnC,
      oneTimeOnlyMoveFlags.humanPawnCInitialMoveEligible,
      oneTimeOnlyMoveFlags,
      true
    );
  }

  if (pieceLocations.humanPawnD.captured === false) {
    humanPossibleMoves.humanPawnD = calculateHumanPawnPossibleMoves(
      pieceLocations.humanPawnD.row,
      pieceLocations.humanPawnD.column,
      pieceLocations,
      Piece.HumanPawnD,
      oneTimeOnlyMoveFlags.humanPawnDInitialMoveEligible,
      oneTimeOnlyMoveFlags,
      true
    );
  }

  if (pieceLocations.humanPawnE.captured === false) {
    humanPossibleMoves.humanPawnE = calculateHumanPawnPossibleMoves(
      pieceLocations.humanPawnE.row,
      pieceLocations.humanPawnE.column,
      pieceLocations,
      Piece.HumanPawnE,
      oneTimeOnlyMoveFlags.humanPawnEInitialMoveEligible,
      oneTimeOnlyMoveFlags,
      true
    );
  }

  if (pieceLocations.humanPawnF.captured === false) {
    humanPossibleMoves.humanPawnF = calculateHumanPawnPossibleMoves(
      pieceLocations.humanPawnF.row,
      pieceLocations.humanPawnF.column,
      pieceLocations,
      Piece.HumanPawnF,
      oneTimeOnlyMoveFlags.humanPawnFInitialMoveEligible,
      oneTimeOnlyMoveFlags,
      true
    );
  }

  if (pieceLocations.humanPawnG.captured === false) {
    humanPossibleMoves.humanPawnG = calculateHumanPawnPossibleMoves(
      pieceLocations.humanPawnG.row,
      pieceLocations.humanPawnG.column,
      pieceLocations,
      Piece.HumanPawnG,
      oneTimeOnlyMoveFlags.humanPawnGInitialMoveEligible,
      oneTimeOnlyMoveFlags,
      true
    );
  }

  if (pieceLocations.humanPawnH.captured === false) {
    humanPossibleMoves.humanPawnH = calculateHumanPawnPossibleMoves(
      pieceLocations.humanPawnH.row,
      pieceLocations.humanPawnH.column,
      pieceLocations,
      Piece.HumanPawnH,
      oneTimeOnlyMoveFlags.humanPawnHInitialMoveEligible,
      oneTimeOnlyMoveFlags,
      true
    );
  }

  if (pieceLocations.humanRookA.captured === false) {
    humanPossibleMoves.humanRookA = calculateHumanRookPossibleMoves(
      pieceLocations.humanRookA.row,
      pieceLocations.humanRookA.column,
      pieceLocations,
      Piece.HumanRookA,
      oneTimeOnlyMoveFlags,
      true
    );
  }

  if (pieceLocations.humanRookB.captured === false) {
    humanPossibleMoves.humanRookB = calculateHumanRookPossibleMoves(
      pieceLocations.humanRookB.row,
      pieceLocations.humanRookB.column,
      pieceLocations,
      Piece.HumanRookB,
      oneTimeOnlyMoveFlags,
      true
    );
  }

  if (pieceLocations.humanKnightA.captured === false) {
    humanPossibleMoves.humanKnightA = calculateHumanKnightPossibleMoves(
      pieceLocations.humanKnightA.row,
      pieceLocations.humanKnightA.column,
      pieceLocations,
      Piece.HumanKnightA,
      oneTimeOnlyMoveFlags,
      true
    );
  }

  if (pieceLocations.humanKnightB.captured === false) {
    humanPossibleMoves.humanKnightB = calculateHumanKnightPossibleMoves(
      pieceLocations.humanKnightB.row,
      pieceLocations.humanKnightB.column,
      pieceLocations,
      Piece.HumanKnightB,
      oneTimeOnlyMoveFlags,
      true
    );
  }

  if (pieceLocations.humanBishopA.captured === false) {
    humanPossibleMoves.humanBishopA = calculateHumanBishopPossibleMoves(
      pieceLocations.humanBishopA.row,
      pieceLocations.humanBishopA.column,
      pieceLocations,
      Piece.HumanBishopA,
      oneTimeOnlyMoveFlags,
      true
    );
  }

  if (pieceLocations.humanBishopB.captured === false) {
    humanPossibleMoves.humanBishopB = calculateHumanBishopPossibleMoves(
      pieceLocations.humanBishopB.row,
      pieceLocations.humanBishopB.column,
      pieceLocations,
      Piece.HumanBishopB,
      oneTimeOnlyMoveFlags,
      true
    );
  }

  if (pieceLocations.humanQueen.captured === false) {
    humanPossibleMoves.humanQueen = calculateHumanQueenPossibleMoves(
      pieceLocations.humanQueen.row,
      pieceLocations.humanQueen.column,
      pieceLocations,
      oneTimeOnlyMoveFlags,
      true
    );
  }

  humanPossibleMoves.humanKing = calculateHumanKingPossibleMoves(
    pieceLocations.humanKing.row,
    pieceLocations.humanKing.column,
    pieceLocations,
    oneTimeOnlyMoveFlags,
    true
  );

  return humanPossibleMoves;
};

export default calculateHumanPossibleMoves;
