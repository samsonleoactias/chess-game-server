import { Piece } from "../../../../types";

const isHumanPiece = (piece: Piece): boolean => {
  // TODO more rigid check
  if (piece.split("")[0] === "h") {
    return true;
  }

  return false;
};

export default isHumanPiece;
