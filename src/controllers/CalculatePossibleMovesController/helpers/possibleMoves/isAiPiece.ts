import { Piece } from "../../../../types";

const isAiPiece = (piece: Piece) => {
  // TODO more rigid check
  if (piece.split("")[0] === "a") {
    return true;
  }

  return false;
};

export default isAiPiece;
