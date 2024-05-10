import OneTimeOnlyMoveFlags from "../../../../../../types/OneTimeOnlyMoveFlags.js";
import Piece from "../../../../../../types/Piece.js";
import PieceLocations from "../../../../../../types/PieceLocations.js";
import { PossibleMove } from "../../../../../../types/index.js";

const calculateHumanPawnEnPassant = (
  piece: Piece,
  oneTimeOnlyMoveFlags: OneTimeOnlyMoveFlags,
  pieceLocations: PieceLocations
) => {
  const possibleMoves: PossibleMove[] = [];

  if (
    piece === Piece.HumanPawnA &&
    pieceLocations.humanPawnA.row === 3 &&
    oneTimeOnlyMoveFlags.aiPawnBEnPassantEligible
  ) {
    possibleMoves.push({
      location: { row: 2, column: 1 },
      enPassantCapture: Piece.AiPawnB,
    });
  }

  if (
    piece === Piece.HumanPawnB &&
    pieceLocations.humanPawnB.row === 3 &&
    oneTimeOnlyMoveFlags.aiPawnAEnPassantEligible
  ) {
    possibleMoves.push({
      location: { row: 2, column: 0 },
      enPassantCapture: Piece.AiPawnA,
    });
  }

  if (
    piece === Piece.HumanPawnB &&
    pieceLocations.humanPawnB.row === 3 &&
    oneTimeOnlyMoveFlags.aiPawnCEnPassantEligible
  ) {
    possibleMoves.push({
      location: { row: 2, column: 2 },
      enPassantCapture: Piece.AiPawnC,
    });
  }

  if (
    piece === Piece.HumanPawnC &&
    pieceLocations.humanPawnC.row === 3 &&
    oneTimeOnlyMoveFlags.aiPawnBEnPassantEligible
  ) {
    possibleMoves.push({
      location: { row: 2, column: 1 },
      enPassantCapture: Piece.AiPawnB,
    });
  }

  if (
    piece === Piece.HumanPawnC &&
    pieceLocations.humanPawnC.row === 3 &&
    oneTimeOnlyMoveFlags.aiPawnDEnPassantEligible
  ) {
    possibleMoves.push({
      location: { row: 2, column: 3 },
      enPassantCapture: Piece.AiPawnD,
    });
  }

  if (
    piece === Piece.HumanPawnD &&
    pieceLocations.humanPawnD.row === 3 &&
    oneTimeOnlyMoveFlags.aiPawnCEnPassantEligible
  ) {
    possibleMoves.push({
      location: { row: 2, column: 2 },
      enPassantCapture: Piece.AiPawnC,
    });
  }

  if (
    piece === Piece.HumanPawnD &&
    pieceLocations.humanPawnD.row === 3 &&
    oneTimeOnlyMoveFlags.aiPawnEEnPassantEligible
  ) {
    possibleMoves.push({
      location: { row: 2, column: 4 },
      enPassantCapture: Piece.AiPawnE,
    });
  }

  if (
    piece === Piece.HumanPawnE &&
    pieceLocations.humanPawnE.row === 3 &&
    oneTimeOnlyMoveFlags.aiPawnDEnPassantEligible
  ) {
    possibleMoves.push({
      location: { row: 2, column: 3 },
      enPassantCapture: Piece.AiPawnD,
    });
  }

  if (
    piece === Piece.HumanPawnE &&
    pieceLocations.humanPawnE.row === 3 &&
    oneTimeOnlyMoveFlags.aiPawnFEnPassantEligible
  ) {
    possibleMoves.push({
      location: { row: 2, column: 5 },
      enPassantCapture: Piece.AiPawnF,
    });
  }

  if (
    piece === Piece.HumanPawnF &&
    pieceLocations.humanPawnF.row === 3 &&
    oneTimeOnlyMoveFlags.aiPawnEEnPassantEligible
  ) {
    possibleMoves.push({
      location: { row: 2, column: 4 },
      enPassantCapture: Piece.AiPawnE,
    });
  }

  if (
    piece === Piece.HumanPawnF &&
    pieceLocations.humanPawnF.row === 3 &&
    oneTimeOnlyMoveFlags.aiPawnGEnPassantEligible
  ) {
    possibleMoves.push({
      location: { row: 2, column: 6 },
      enPassantCapture: Piece.AiPawnG,
    });
  }

  if (
    piece === Piece.HumanPawnG &&
    pieceLocations.humanPawnG.row === 3 &&
    oneTimeOnlyMoveFlags.aiPawnFEnPassantEligible
  ) {
    possibleMoves.push({
      location: { row: 2, column: 5 },
      enPassantCapture: Piece.AiPawnF,
    });
  }

  if (
    piece === Piece.HumanPawnG &&
    pieceLocations.humanPawnG.row === 3 &&
    oneTimeOnlyMoveFlags.aiPawnHEnPassantEligible
  ) {
    possibleMoves.push({
      location: { row: 2, column: 7 },
      enPassantCapture: Piece.AiPawnH,
    });
  }

  if (
    piece === Piece.HumanPawnH &&
    pieceLocations.humanPawnH.row === 3 &&
    oneTimeOnlyMoveFlags.aiPawnGEnPassantEligible
  ) {
    possibleMoves.push({
      location: { row: 2, column: 6 },
      enPassantCapture: Piece.AiPawnG,
    });
  }

  return possibleMoves;
};

export default calculateHumanPawnEnPassant;
