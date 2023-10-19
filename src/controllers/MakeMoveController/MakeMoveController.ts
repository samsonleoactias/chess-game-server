import { Piece, PieceLocations, PlayerType, PossibleMove } from "../../types";
import findWhatPieceIsOnASquare from "../helpers/findWhatPieceIsOnASquare";
import db from "../../db/postgresConnection";
import objectCamelToSnake from "../helpers/objectCamelToSnake";
import { Knex } from "knex";

type MakeMoveControllerParams = {
  db: Knex;
  pieceLocations: PieceLocations;
  gameId: string;
  piece: Piece;
  move: PossibleMove;
};

const MakeMoveController = async (params: MakeMoveControllerParams) => {
  const { pieceLocations, gameId, piece, move } = params;

  var pieceCurrentlyOnSquare: Piece = findWhatPieceIsOnASquare(
    pieceLocations,
    move.location.row,
    move.location.column
  );

  if (piece === Piece.None) {
    throw new Error("Cannot move 'None' piece"); // TODO better error
  }

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

  try {
    await db("piece_locations")
      .where({ game_id: gameId })
      .update({
        ...objectCamelToSnake(pieceLocations),
      });
  } catch (error) {
    console.log("Database error: " + JSON.stringify(error));
    throw error;
  }
};

export default MakeMoveController;
