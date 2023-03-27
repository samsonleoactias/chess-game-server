import { Piece, PieceLocations, PlayerType, PossibleMove } from "../../types";
import findWhatPieceIsOnASquare from "../helpers/findWhatPieceIsOnASquare";

type MakeMoveControllerParams = {
  pieceLocations: PieceLocations;
  gameId: string;
  playerType: PlayerType;
  piece: Piece;
  move: PossibleMove;
};

const MakeMoveController = async (params: MakeMoveControllerParams) => {
  const { pieceLocations, gameId, playerType, piece, move } = params;

  var pieceCurrentlyOnSquare: Piece = findWhatPieceIsOnASquare(
    pieceLocations,
    move.location.row,
    move.location.column
  );

  if (pieceCurrentlyOnSquare !== Piece.None) {
    pieceLocations[pieceCurrentlyOnSquare].captured = true;
  } else {
    pieceLocations.matrix[move.location.row][move.location.column] = true;
  }

  pieceLocations.matrix[pieceLocations[piece].row][
    pieceLocations[piece].column
  ] = false;

  pieceLocations[piece].row = move.location.row;
  pieceLocations[piece].column = move.location.column;
};
