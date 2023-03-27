import { PieceLocations } from "../../../../../types";
import findWhatPieceIsOnASquare from "../../../../helpers/findWhatPieceIsOnASquare";
import isHumanPiece from "./isHumanPiece";

const checkIfSquareIsOccupiedByHumanPiece = (
  pieceLocations: PieceLocations,
  row: number,
  column: number
) => {
  return isHumanPiece(findWhatPieceIsOnASquare(pieceLocations, row, column));
};

export default checkIfSquareIsOccupiedByHumanPiece;
