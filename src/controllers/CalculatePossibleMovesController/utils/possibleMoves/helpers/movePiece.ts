import { Piece, PieceLocations, PossibleMove } from "../../../../../types";
import findWhatPieceIsOnASquare from "./findWhatPieceIsOnASquare";

const movePiece = (
  piece: Piece,
  move: PossibleMove,
  pieceLocations: PieceLocations
) => {
  pieceLocations.matrix[pieceLocations[piece].row][
    pieceLocations[piece].column
  ] = false;
  pieceLocations[piece].row = move.location.row;
  pieceLocations[piece].column = move.location.row;

  let pieceOnSquare: Piece = Piece.None;

  if (
    pieceLocations.matrix[pieceLocations[piece].row][
      pieceLocations[piece].column
    ] === true
  ) {
    pieceOnSquare = findWhatPieceIsOnASquare(
      pieceLocations,
      pieceLocations[piece].row,
      pieceLocations[piece].column
    );
  }

  if (pieceOnSquare !== Piece.None) {
    pieceLocations[piece].captured = true;
  }

  pieceLocations.matrix[pieceLocations[piece].row][
    pieceLocations[piece].column
  ] = true;
};
