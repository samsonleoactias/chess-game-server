import { Piece } from "../../../../types/index.js";

const isHumanPiece = (piece: Piece): boolean => {
  if (
    piece === Piece.HumanBishopA ||
    piece === Piece.HumanBishopB ||
    piece === Piece.HumanKing ||
    piece === Piece.HumanKnightA ||
    piece === Piece.HumanKnightB ||
    piece === Piece.HumanPawnA ||
    piece === Piece.HumanPawnB ||
    piece === Piece.HumanPawnC ||
    piece === Piece.HumanPawnD ||
    piece === Piece.HumanPawnE ||
    piece === Piece.HumanPawnF ||
    piece === Piece.HumanPawnG ||
    piece === Piece.HumanPawnH ||
    piece === Piece.HumanQueen ||
    piece === Piece.HumanRookA ||
    piece === Piece.HumanRookB
  ) {
    return true;
  }
  return false;
};

export default isHumanPiece;
