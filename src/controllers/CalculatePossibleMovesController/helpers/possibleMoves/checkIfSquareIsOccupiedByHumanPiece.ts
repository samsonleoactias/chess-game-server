import { PieceLocations } from "../../../../types";
import findWhatPieceIsOnASquare from "../../../utils/findWhatPieceIsOnASquare";
import isHumanPiece from "./isHumanPiece";

const checkIfSquareIsOccupiedByHumanPiece = (
  pieceLocations: PieceLocations,
  row: number,
  column: number
) => {
  return isHumanPiece(findWhatPieceIsOnASquare(pieceLocations, row, column));
};

export default checkIfSquareIsOccupiedByHumanPiece;
