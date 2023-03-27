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
      oneTimeOnlyMoveFlags.humanPawnAInitialMoveEligible,
      pieceLocations,
      Piece.HumanPawnA,
      oneTimeOnlyMoveFlags
    );
  }

  if (pieceLocations.humanPawnB.captured === false) {
    humanPossibleMoves.pawnB = calculateHumanPawnPossibleMoves(
      pieceLocations.humanPawnB.row,
      pieceLocations.humanPawnB.column,
      oneTimeOnlyMoveFlags.humanPawnBInitialMoveEligible,
      pieceLocations,
      Piece.HumanPawnB,
      oneTimeOnlyMoveFlags
    );
  }

  if (pieceLocations.humanPawnC.captured === false) {
    humanPossibleMoves.pawnC = calculateHumanPawnPossibleMoves(
      pieceLocations.humanPawnC.row,
      pieceLocations.humanPawnC.column,
      oneTimeOnlyMoveFlags.humanPawnCInitialMoveEligible,
      pieceLocations,
      Piece.HumanPawnC,
      oneTimeOnlyMoveFlags
    );
  }

  if (pieceLocations.humanPawnD.captured === false) {
    humanPossibleMoves.pawnD = calculateHumanPawnPossibleMoves(
      pieceLocations.humanPawnD.row,
      pieceLocations.humanPawnD.column,
      oneTimeOnlyMoveFlags.humanPawnDInitialMoveEligible,
      pieceLocations,
      Piece.HumanPawnD,
      oneTimeOnlyMoveFlags
    );
  }

  if (pieceLocations.humanPawnE.captured === false) {
    humanPossibleMoves.pawnE = calculateHumanPawnPossibleMoves(
      pieceLocations.humanPawnE.row,
      pieceLocations.humanPawnE.column,
      oneTimeOnlyMoveFlags.humanPawnEInitialMoveEligible,
      pieceLocations,
      Piece.HumanPawnE,
      oneTimeOnlyMoveFlags
    );
  }

  if (pieceLocations.humanPawnF.captured === false) {
    humanPossibleMoves.pawnF = calculateHumanPawnPossibleMoves(
      pieceLocations.humanPawnF.row,
      pieceLocations.humanPawnF.column,
      oneTimeOnlyMoveFlags.humanPawnFInitialMoveEligible,
      pieceLocations,
      Piece.HumanPawnF,
      oneTimeOnlyMoveFlags
    );
  }

  if (pieceLocations.humanPawnG.captured === false) {
    humanPossibleMoves.pawnG = calculateHumanPawnPossibleMoves(
      pieceLocations.humanPawnG.row,
      pieceLocations.humanPawnG.column,
      oneTimeOnlyMoveFlags.humanPawnGInitialMoveEligible,
      pieceLocations,
      Piece.HumanPawnG,
      oneTimeOnlyMoveFlags
    );
  }

  if (pieceLocations.humanPawnH.captured === false) {
    humanPossibleMoves.pawnH = calculateHumanPawnPossibleMoves(
      pieceLocations.humanPawnH.row,
      pieceLocations.humanPawnH.column,
      oneTimeOnlyMoveFlags.humanPawnHInitialMoveEligible,
      pieceLocations,
      Piece.HumanPawnH,
      oneTimeOnlyMoveFlags
    );
  }

  if (pieceLocations.humanRookA.captured === false) {
    humanPossibleMoves.rookA = calculateHumanRookPossibleMoves(
      pieceLocations.humanRookA.row,
      pieceLocations.humanRookA.column,
      pieceLocations,
      Piece.HumanRookA,
      oneTimeOnlyMoveFlags
    );
  }

  if (pieceLocations.humanRookB.captured === false) {
    humanPossibleMoves.rookB = calculateHumanRookPossibleMoves(
      pieceLocations.humanRookB.row,
      pieceLocations.humanRookB.column,
      pieceLocations,
      Piece.HumanRookB,
      oneTimeOnlyMoveFlags
    );
  }

  if (pieceLocations.humanKnightA.captured === false) {
    humanPossibleMoves.knightA = calculateHumanKnightPossibleMoves(
      pieceLocations.humanKnightA.row,
      pieceLocations.humanKnightA.column,
      pieceLocations,
      Piece.HumanKnightA,
      oneTimeOnlyMoveFlags
    );
  }

  if (pieceLocations.humanKnightB.captured === false) {
    humanPossibleMoves.knightB = calculateHumanKnightPossibleMoves(
      pieceLocations.humanKnightB.row,
      pieceLocations.humanKnightB.column,
      pieceLocations,
      Piece.HumanKnightB,
      oneTimeOnlyMoveFlags
    );
  }

  if (pieceLocations.humanBishopA.captured === false) {
    humanPossibleMoves.bishopA = calculateHumanBishopPossibleMoves(
      pieceLocations.humanBishopA.row,
      pieceLocations.humanBishopA.column,
      pieceLocations,
      Piece.HumanBishopA,
      oneTimeOnlyMoveFlags
    );
  }

  if (pieceLocations.humanBishopB.captured === false) {
    humanPossibleMoves.bishopB = calculateHumanBishopPossibleMoves(
      pieceLocations.humanBishopB.row,
      pieceLocations.humanBishopB.column,
      pieceLocations,
      Piece.HumanBishopB,
      oneTimeOnlyMoveFlags
    );
  }

  if (pieceLocations.humanQueen.captured === false) {
    humanPossibleMoves.queen = calculateHumanQueenPossibleMoves(
      pieceLocations.humanQueen.row,
      pieceLocations.humanQueen.column,
      pieceLocations,
      oneTimeOnlyMoveFlags
    );
  }

  humanPossibleMoves.king = calculateHumanKingPossibleMoves(
    pieceLocations.humanKing.row,
    pieceLocations.humanKing.column,
    pieceLocations,
    oneTimeOnlyMoveFlags
  );

  return humanPossibleMoves;
};

export default calculateHumanPossibleMoves;
