import {
  Color,
  OneTimeOnlyMoveFlags,
  Piece,
  PieceLocations,
  PossibleMove,
} from "../../../../types/index.js";
import findWhatPieceIsOnASquare from "../../../utils/findWhatPieceIsOnASquare.js";
import objectCamelToSnake from "../../../utils/objectCamelToSnake.js";
import { Knex } from "knex";
import updateOneTimeOnlyMarkers from "./helpers/index.js";
import lodash from "lodash";
import pieceLocationsObjectToDb from "../../../utils/dbMaps/pieceLocationsObjectToDb.js";

type makeMoveParams = {
  db: Knex;
  pieceLocations: PieceLocations;
  gameId: string;
  piece: Piece;
  move: PossibleMove;
  oneTimeOnlyMoveFlags: OneTimeOnlyMoveFlags;
  humanColor: Color;
};

const makeMove = async (params: makeMoveParams): Promise<PieceLocations> => {
  const {
    db,
    pieceLocations,
    gameId,
    piece,
    move,
    oneTimeOnlyMoveFlags,
    humanColor,
  } = params;

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
        ...pieceLocationsObjectToDb(pieceLocations),
      });
  } catch (error) {
    console.log("Database error: " + JSON.stringify(error)); // TODO better error
    throw error;
  }

  updateOneTimeOnlyMarkers({
    db,
    gameId,
    pieceLocations,
    oneTimeOnlyMoveFlags,
    humanColor,
  });

  return pieceLocations;
};

export default makeMove;
