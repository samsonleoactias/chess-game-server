import PossibleMovesAssignedToPieces from "../../../types/PossibleMovesAssignedToPieces.js";

const checkForStalemate = (
  possibleMovesAssignedToPieces: PossibleMovesAssignedToPieces
): boolean => {
  let stalemate = true;

  if (
    possibleMovesAssignedToPieces.humanPawnA &&
    possibleMovesAssignedToPieces.humanPawnA.length > 0
  ) {
    stalemate = false;
  }

  if (
    possibleMovesAssignedToPieces.humanPawnB &&
    possibleMovesAssignedToPieces.humanPawnB.length > 0
  ) {
    stalemate = false;
  }

  if (
    possibleMovesAssignedToPieces.humanPawnC &&
    possibleMovesAssignedToPieces.humanPawnC.length > 0
  ) {
    stalemate = false;
  }

  if (
    possibleMovesAssignedToPieces.humanPawnD &&
    possibleMovesAssignedToPieces.humanPawnD.length > 0
  ) {
    stalemate = false;
  }

  if (
    possibleMovesAssignedToPieces.humanPawnE &&
    possibleMovesAssignedToPieces.humanPawnE.length > 0
  ) {
    stalemate = false;
  }

  if (
    possibleMovesAssignedToPieces.humanPawnF &&
    possibleMovesAssignedToPieces.humanPawnF.length > 0
  ) {
    stalemate = false;
  }

  if (
    possibleMovesAssignedToPieces.humanPawnG &&
    possibleMovesAssignedToPieces.humanPawnG.length > 0
  ) {
    stalemate = false;
  }

  if (
    possibleMovesAssignedToPieces.humanPawnH &&
    possibleMovesAssignedToPieces.humanPawnH.length > 0
  ) {
    stalemate = false;
  }

  if (
    possibleMovesAssignedToPieces.humanRookA &&
    possibleMovesAssignedToPieces.humanRookA.length > 0
  ) {
    stalemate = false;
  }

  if (
    possibleMovesAssignedToPieces.humanRookB &&
    possibleMovesAssignedToPieces.humanRookB.length > 0
  ) {
    stalemate = false;
  }

  if (
    possibleMovesAssignedToPieces.humanKnightA &&
    possibleMovesAssignedToPieces.humanKnightA.length > 0
  ) {
    stalemate = false;
  }

  if (
    possibleMovesAssignedToPieces.humanKnightB &&
    possibleMovesAssignedToPieces.humanKnightB.length > 0
  ) {
    stalemate = false;
  }

  if (
    possibleMovesAssignedToPieces.humanBishopA &&
    possibleMovesAssignedToPieces.humanBishopA.length > 0
  ) {
    stalemate = false;
  }

  if (
    possibleMovesAssignedToPieces.humanBishopB &&
    possibleMovesAssignedToPieces.humanBishopB.length > 0
  ) {
    stalemate = false;
  }

  if (
    possibleMovesAssignedToPieces.humanQueen &&
    possibleMovesAssignedToPieces.humanQueen.length > 0
  ) {
    stalemate = false;
  }

  if (
    possibleMovesAssignedToPieces.humanKing &&
    possibleMovesAssignedToPieces.humanKing.length > 0
  ) {
    stalemate = false;
  }

  if (
    possibleMovesAssignedToPieces.aiPawnA &&
    possibleMovesAssignedToPieces.aiPawnA.length > 0
  ) {
    stalemate = false;
  }

  if (
    possibleMovesAssignedToPieces.aiPawnB &&
    possibleMovesAssignedToPieces.aiPawnB.length > 0
  ) {
    stalemate = false;
  }

  if (
    possibleMovesAssignedToPieces.aiPawnC &&
    possibleMovesAssignedToPieces.aiPawnC.length > 0
  ) {
    stalemate = false;
  }

  if (
    possibleMovesAssignedToPieces.aiPawnD &&
    possibleMovesAssignedToPieces.aiPawnD.length > 0
  ) {
    stalemate = false;
  }

  if (
    possibleMovesAssignedToPieces.aiPawnE &&
    possibleMovesAssignedToPieces.aiPawnE.length > 0
  ) {
    stalemate = false;
  }

  if (
    possibleMovesAssignedToPieces.aiPawnF &&
    possibleMovesAssignedToPieces.aiPawnF.length > 0
  ) {
    stalemate = false;
  }

  if (
    possibleMovesAssignedToPieces.aiPawnG &&
    possibleMovesAssignedToPieces.aiPawnG.length > 0
  ) {
    stalemate = false;
  }

  if (
    possibleMovesAssignedToPieces.aiPawnH &&
    possibleMovesAssignedToPieces.aiPawnH.length > 0
  ) {
    stalemate = false;
  }

  if (
    possibleMovesAssignedToPieces.aiRookA &&
    possibleMovesAssignedToPieces.aiRookA.length > 0
  ) {
    stalemate = false;
  }

  if (
    possibleMovesAssignedToPieces.aiRookB &&
    possibleMovesAssignedToPieces.aiRookB.length > 0
  ) {
    stalemate = false;
  }

  if (
    possibleMovesAssignedToPieces.aiKnightA &&
    possibleMovesAssignedToPieces.aiKnightA.length > 0
  ) {
    stalemate = false;
  }

  if (
    possibleMovesAssignedToPieces.aiKnightB &&
    possibleMovesAssignedToPieces.aiKnightB.length > 0
  ) {
    stalemate = false;
  }

  if (
    possibleMovesAssignedToPieces.aiBishopA &&
    possibleMovesAssignedToPieces.aiBishopA.length > 0
  ) {
    stalemate = false;
  }

  if (
    possibleMovesAssignedToPieces.aiBishopB &&
    possibleMovesAssignedToPieces.aiBishopB.length > 0
  ) {
    stalemate = false;
  }

  if (
    possibleMovesAssignedToPieces.aiQueen &&
    possibleMovesAssignedToPieces.aiQueen.length > 0
  ) {
    stalemate = false;
  }

  if (
    possibleMovesAssignedToPieces.aiKing &&
    possibleMovesAssignedToPieces.aiKing.length > 0
  ) {
    stalemate = false;
  }

  return stalemate;
};

export default checkForStalemate;
