import OneTimeOnlyMoveFlags from "../../../../../../types/OneTimeOnlyMoveFlags.js";
import Piece from "../../../../../../types/Piece.js";
import PieceLocations from "../../../../../../types/PieceLocations.js";
import PossibleMove from "../../../../../../types/PossibleMove.js";

const calculateAiPawnEnPassant = (
  piece: Piece,
  oneTimeOnlyMoveFlags: OneTimeOnlyMoveFlags,
  pieceLocations: PieceLocations
) => {
  const possibleMoves: PossibleMove[] = [];

  if (
    piece === Piece.AiPawnA &&
    pieceLocations.aiPawnA.row === 4 &&
    oneTimeOnlyMoveFlags.humanPawnBEnPassantEligible
  ) {
    possibleMoves.push({
      location: { row: 5, column: 1 },
      enPassantCapture: Piece.HumanPawnB,
    });
  }

  if (
    piece === Piece.AiPawnB &&
    pieceLocations.aiPawnB.row === 4 &&
    oneTimeOnlyMoveFlags.humanPawnAEnPassantEligible
  ) {
    possibleMoves.push({
      location: { row: 5, column: 0 },
      enPassantCapture: Piece.HumanPawnA,
    });
  }

  if (
    piece === Piece.AiPawnB &&
    pieceLocations.aiPawnB.row === 4 &&
    oneTimeOnlyMoveFlags.humanPawnCEnPassantEligible
  ) {
    possibleMoves.push({
      location: { row: 5, column: 2 },
      enPassantCapture: Piece.HumanPawnC,
    });
  }

  if (
    piece === Piece.AiPawnC &&
    pieceLocations.aiPawnC.row === 4 &&
    oneTimeOnlyMoveFlags.humanPawnBEnPassantEligible
  ) {
    possibleMoves.push({
      location: { row: 5, column: 1 },
      enPassantCapture: Piece.HumanPawnB,
    });
  }

  if (
    piece === Piece.AiPawnC &&
    pieceLocations.aiPawnC.row === 4 &&
    oneTimeOnlyMoveFlags.humanPawnDEnPassantEligible
  ) {
    possibleMoves.push({
      location: { row: 5, column: 3 },
      enPassantCapture: Piece.HumanPawnD,
    });
  }

  if (
    piece === Piece.AiPawnD &&
    pieceLocations.aiPawnD.row === 4 &&
    oneTimeOnlyMoveFlags.humanPawnCEnPassantEligible
  ) {
    possibleMoves.push({
      location: { row: 5, column: 2 },
      enPassantCapture: Piece.HumanPawnC,
    });
  }

  if (
    piece === Piece.AiPawnD &&
    pieceLocations.aiPawnD.row === 4 &&
    oneTimeOnlyMoveFlags.humanPawnEEnPassantEligible
  ) {
    possibleMoves.push({
      location: { row: 5, column: 4 },
      enPassantCapture: Piece.HumanPawnE,
    });
  }

  if (
    piece === Piece.AiPawnE &&
    pieceLocations.aiPawnE.row === 4 &&
    oneTimeOnlyMoveFlags.humanPawnDEnPassantEligible
  ) {
    possibleMoves.push({
      location: { row: 5, column: 3 },
      enPassantCapture: Piece.HumanPawnD,
    });
  }

  if (
    piece === Piece.AiPawnE &&
    pieceLocations.aiPawnE.row === 4 &&
    oneTimeOnlyMoveFlags.humanPawnFEnPassantEligible
  ) {
    possibleMoves.push({
      location: { row: 5, column: 5 },
      enPassantCapture: Piece.HumanPawnF,
    });
  }

  if (
    piece === Piece.AiPawnF &&
    pieceLocations.aiPawnF.row === 4 &&
    oneTimeOnlyMoveFlags.humanPawnEEnPassantEligible
  ) {
    possibleMoves.push({
      location: { row: 5, column: 4 },
      enPassantCapture: Piece.HumanPawnE,
    });
  }

  if (
    piece === Piece.AiPawnF &&
    pieceLocations.aiPawnF.row === 4 &&
    oneTimeOnlyMoveFlags.humanPawnGEnPassantEligible
  ) {
    possibleMoves.push({
      location: { row: 5, column: 6 },
      enPassantCapture: Piece.HumanPawnG,
    });
  }

  if (
    piece === Piece.AiPawnG &&
    pieceLocations.aiPawnG.row === 4 &&
    oneTimeOnlyMoveFlags.humanPawnFEnPassantEligible
  ) {
    possibleMoves.push({
      location: { row: 5, column: 5 },
      enPassantCapture: Piece.HumanPawnF,
    });
  }

  if (
    piece === Piece.AiPawnG &&
    pieceLocations.aiPawnG.row === 4 &&
    oneTimeOnlyMoveFlags.humanPawnHEnPassantEligible
  ) {
    possibleMoves.push({
      location: { row: 5, column: 7 },
      enPassantCapture: Piece.HumanPawnH,
    });
  }

  if (
    piece === Piece.AiPawnH &&
    pieceLocations.aiPawnH.row === 4 &&
    oneTimeOnlyMoveFlags.humanPawnGEnPassantEligible
  ) {
    possibleMoves.push({
      location: { row: 5, column: 6 },
      enPassantCapture: Piece.HumanPawnG,
    });
  }

  return possibleMoves;
};

export default calculateAiPawnEnPassant;
