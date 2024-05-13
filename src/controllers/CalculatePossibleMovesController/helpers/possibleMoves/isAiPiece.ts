import { Piece } from "../../../../types/index.js";

const isAiPiece = (piece: Piece): boolean => {
  if (
    piece === Piece.AiBishopA ||
    piece === Piece.AiBishopB ||
    piece === Piece.AiKing ||
    piece === Piece.AiKnightA ||
    piece === Piece.AiKnightB ||
    piece === Piece.AiPawnA ||
    piece === Piece.AiPawnB ||
    piece === Piece.AiPawnC ||
    piece === Piece.AiPawnD ||
    piece === Piece.AiPawnE ||
    piece === Piece.AiPawnF ||
    piece === Piece.AiPawnG ||
    piece === Piece.AiPawnH ||
    piece === Piece.AiQueen ||
    piece === Piece.AiRookA ||
    piece === Piece.AiRookB
  ) {
    return true;
  }

  return false;
};

export default isAiPiece;
