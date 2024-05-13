import { PieceLocations } from "../../../../types/index.js";
import findWhatPieceIsOnASquare from "../../../utils/findWhatPieceIsOnASquare.js";
import isHumanPiece from "./isHumanPiece.js";

const checkIfSquareIsOccupiedByHumanPiece = (
  pieceLocations: PieceLocations,
  row: number,
  column: number
): boolean => {
  return isHumanPiece(findWhatPieceIsOnASquare(pieceLocations, row, column));
};

export default checkIfSquareIsOccupiedByHumanPiece;
