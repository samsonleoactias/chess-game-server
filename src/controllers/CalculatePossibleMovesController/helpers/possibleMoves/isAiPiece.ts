import { Piece } from "../../../../types/index.js";

const isAiPiece = (piece: Piece): boolean => {
  // TODO more rigid check
  if (piece.split("")[0] === "a") {
    return true;
  }

  return false;
};

export default isAiPiece;
