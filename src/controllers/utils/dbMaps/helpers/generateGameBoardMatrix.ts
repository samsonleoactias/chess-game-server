import { PieceLocations } from "../../../../types";

const generateGameBoardMatrix = (pieceLocations: PieceLocations) => {
  const matrix: boolean[][] = [
    [false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false],
  ];

  if (pieceLocations.humanPawnA.captured === false) {
    matrix[pieceLocations.humanPawnA.row][pieceLocations.humanPawnA.column] =
      true;
  }

  if (pieceLocations.humanPawnB.captured === false) {
    matrix[pieceLocations.humanPawnB.row][pieceLocations.humanPawnB.column] =
      true;
  }

  if (pieceLocations.humanPawnC.captured === false) {
    matrix[pieceLocations.humanPawnC.row][pieceLocations.humanPawnC.column] =
      true;
  }

  if (pieceLocations.humanPawnD.captured === false) {
    matrix[pieceLocations.humanPawnD.row][pieceLocations.humanPawnD.column] =
      true;
  }

  if (pieceLocations.humanPawnE.captured === false) {
    matrix[pieceLocations.humanPawnE.row][pieceLocations.humanPawnE.column] =
      true;
  }

  if (pieceLocations.humanPawnF.captured === false) {
    matrix[pieceLocations.humanPawnF.row][pieceLocations.humanPawnF.column] =
      true;
  }

  if (pieceLocations.humanPawnG.captured === false) {
    matrix[pieceLocations.humanPawnG.row][pieceLocations.humanPawnG.column] =
      true;
  }

  if (pieceLocations.humanPawnH.captured === false) {
    matrix[pieceLocations.humanPawnH.row][pieceLocations.humanPawnH.column] =
      true;
  }

  if (pieceLocations.humanRookA.captured === false) {
    matrix[pieceLocations.humanRookA.row][pieceLocations.humanRookA.column] =
      true;
  }

  if (pieceLocations.humanRookB.captured === false) {
    matrix[pieceLocations.humanRookB.row][pieceLocations.humanRookB.column] =
      true;
  }

  if (pieceLocations.humanKnightA.captured === false) {
    matrix[pieceLocations.humanKnightA.row][
      pieceLocations.humanKnightA.column
    ] = true;
  }

  if (pieceLocations.humanKnightB.captured === false) {
    matrix[pieceLocations.humanKnightB.row][
      pieceLocations.humanKnightB.column
    ] = true;
  }

  if (pieceLocations.humanBishopA.captured === false) {
    matrix[pieceLocations.humanBishopA.row][
      pieceLocations.humanBishopA.column
    ] = true;
  }

  if (pieceLocations.humanBishopB.captured === false) {
    matrix[pieceLocations.humanBishopB.row][
      pieceLocations.humanBishopB.column
    ] = true;
  }

  if (pieceLocations.humanQueen.captured === false) {
    matrix[pieceLocations.humanQueen.row][pieceLocations.humanQueen.column] =
      true;
  }

  if (pieceLocations.humanKing.captured === false) {
    matrix[pieceLocations.humanKing.row][pieceLocations.humanKing.column] =
      true;
  }

  if (pieceLocations.aiPawnA.captured === false) {
    matrix[pieceLocations.aiPawnA.row][pieceLocations.aiPawnA.column] = true;
  }

  if (pieceLocations.aiPawnB.captured === false) {
    matrix[pieceLocations.aiPawnB.row][pieceLocations.aiPawnB.column] = true;
  }

  if (pieceLocations.aiPawnC.captured === false) {
    matrix[pieceLocations.aiPawnC.row][pieceLocations.aiPawnC.column] = true;
  }

  if (pieceLocations.aiPawnD.captured === false) {
    matrix[pieceLocations.aiPawnD.row][pieceLocations.aiPawnD.column] = true;
  }

  if (pieceLocations.aiPawnE.captured === false) {
    matrix[pieceLocations.aiPawnE.row][pieceLocations.aiPawnE.column] = true;
  }

  if (pieceLocations.aiPawnF.captured === false) {
    matrix[pieceLocations.aiPawnF.row][pieceLocations.aiPawnF.column] = true;
  }

  if (pieceLocations.aiPawnG.captured === false) {
    matrix[pieceLocations.aiPawnG.row][pieceLocations.aiPawnG.column] = true;
  }

  if (pieceLocations.aiPawnH.captured === false) {
    matrix[pieceLocations.aiPawnH.row][pieceLocations.aiPawnH.column] = true;
  }

  if (pieceLocations.aiRookA.captured === false) {
    matrix[pieceLocations.aiRookA.row][pieceLocations.aiRookA.column] = true;
  }

  if (pieceLocations.aiRookB.captured === false) {
    matrix[pieceLocations.aiRookB.row][pieceLocations.aiRookB.column] = true;
  }

  if (pieceLocations.aiKnightA.captured === false) {
    matrix[pieceLocations.aiKnightA.row][pieceLocations.aiKnightA.column] =
      true;
  }

  if (pieceLocations.aiKnightB.captured === false) {
    matrix[pieceLocations.aiKnightB.row][pieceLocations.aiKnightB.column] =
      true;
  }

  if (pieceLocations.aiBishopA.captured === false) {
    matrix[pieceLocations.aiBishopA.row][pieceLocations.aiBishopA.column] =
      true;
  }

  if (pieceLocations.aiBishopB.captured === false) {
    matrix[pieceLocations.aiBishopB.row][pieceLocations.aiBishopB.column] =
      true;
  }

  if (pieceLocations.aiQueen.captured === false) {
    matrix[pieceLocations.aiQueen.row][pieceLocations.aiQueen.column] = true;
  }

  if (pieceLocations.aiKing.captured === false) {
    matrix[pieceLocations.aiKing.row][pieceLocations.aiKing.column] = true;
  }

  return matrix;
};

export default generateGameBoardMatrix;
