import { PieceLocations } from "../../../../types/index.js";
import findWhatPieceIsOnASquare from "../../../utils/findWhatPieceIsOnASquare.js";
import isAiPiece from "./isAiPiece.js";

const checkIfSquareIsOccupiedByAiPiece = (
  pieceLocations: PieceLocations,
  row: number,
  column: number
): boolean => {
  return isAiPiece(findWhatPieceIsOnASquare(pieceLocations, row, column));
};

export default checkIfSquareIsOccupiedByAiPiece;
