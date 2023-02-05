import { Piece, PossibleMovesAssignedToPieces } from "../../../../types";
import PieceLocations from "../../../../types/PieceLocations";
import calculateHumanPawnPossibleMoves from "./pawn/calculateHumanPawnPossibleMoves";

const calculateHumanPossibleMoves = (
  pieceLocations: PieceLocations,
  oneTimeOnlyMoveFlags: any
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

  // TODO other pieces

  return humanPossibleMoves;
};

export default calculateHumanPossibleMoves;
