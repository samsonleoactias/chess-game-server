import { PossibleMovesAssignedToPieces } from "../../../types";
import PieceLocations from "../../../types/PieceLocations";
import calculateHumanPawnPossibleMoves from "./calculateHumanPawnPossibleMoves";

const calculateHumanPossibleMoves = (
  pieceLocations: PieceLocations,
  oneTimeOnlyMoveFlags: any
) => {
  const humanPossibleMoves: PossibleMovesAssignedToPieces = {};

  if (pieceLocations.humanPawnACaptured === false) {
    humanPossibleMoves.pawnA = calculateHumanPawnPossibleMoves(
      pieceLocations.humanPawnARow,
      pieceLocations.humanPawnAColumn,
      oneTimeOnlyMoveFlags.humanPawnAInitialMoveEligible,
      pieceLocations.matrix
    );
  }

  if (pieceLocations.humanPawnBCaptured === false) {
    humanPossibleMoves.pawnB = calculateHumanPawnPossibleMoves(
      pieceLocations.humanPawnBRow,
      pieceLocations.humanPawnBColumn,
      oneTimeOnlyMoveFlags.humanPawnBInitialMoveEligible,
      pieceLocations.matrix
    );
  }

  if (pieceLocations.humanPawnCCaptured === false) {
    humanPossibleMoves.pawnC = calculateHumanPawnPossibleMoves(
      pieceLocations.humanPawnCRow,
      pieceLocations.humanPawnCColumn,
      oneTimeOnlyMoveFlags.humanPawnCInitialMoveEligible,
      pieceLocations.matrix
    );
  }

  if (pieceLocations.humanPawnDCaptured === false) {
    humanPossibleMoves.pawnD = calculateHumanPawnPossibleMoves(
      pieceLocations.humanPawnDRow,
      pieceLocations.humanPawnDColumn,
      oneTimeOnlyMoveFlags.humanPawnDInitialMoveEligible,
      pieceLocations.matrix
    );
  }

  if (pieceLocations.humanPawnECaptured === false) {
    humanPossibleMoves.pawnE = calculateHumanPawnPossibleMoves(
      pieceLocations.humanPawnERow,
      pieceLocations.humanPawnEColumn,
      oneTimeOnlyMoveFlags.humanPawnEInitialMoveEligible,
      pieceLocations.matrix
    );
  }

  if (pieceLocations.humanPawnFCaptured === false) {
    humanPossibleMoves.pawnF = calculateHumanPawnPossibleMoves(
      pieceLocations.humanPawnFRow,
      pieceLocations.humanPawnFColumn,
      oneTimeOnlyMoveFlags.humanPawnFInitialMoveEligible,
      pieceLocations.matrix
    );
  }

  if (pieceLocations.humanPawnGCaptured === false) {
    humanPossibleMoves.pawnG = calculateHumanPawnPossibleMoves(
      pieceLocations.humanPawnGRow,
      pieceLocations.humanPawnGColumn,
      oneTimeOnlyMoveFlags.humanPawnGInitialMoveEligible,
      pieceLocations.matrix
    );
  }

  if (pieceLocations.humanPawnHCaptured === false) {
    humanPossibleMoves.pawnH = calculateHumanPawnPossibleMoves(
      pieceLocations.humanPawnHRow,
      pieceLocations.humanPawnHColumn,
      oneTimeOnlyMoveFlags.humanPawnHInitialMoveEligible,
      pieceLocations.matrix
    );
  }

  return humanPossibleMoves;
};

export default calculateHumanPossibleMoves;
