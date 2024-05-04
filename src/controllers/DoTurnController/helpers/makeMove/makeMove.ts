import {
  Color,
  OneTimeOnlyMoveFlags,
  Piece,
  PieceLocations,
  PossibleMove,
} from "../../../../types/index.js";
import findWhatPieceIsOnASquare from "../../../utils/findWhatPieceIsOnASquare.js";
import { Knex } from "knex";
import updateOneTimeOnlyMarkers from "./helpers/index.js";
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

  let pieceCurrentlyOnSquare: Piece = findWhatPieceIsOnASquare(
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

  move.sideEffects?.forEach((sideEffect) => {
    if (sideEffect.piece && sideEffect.row && sideEffect.column) {
      let pieceCurrentlyOnSideEffectSquare: Piece = findWhatPieceIsOnASquare(
        pieceLocations,
        sideEffect.row,
        sideEffect.column
      );

      if (sideEffect.piece === Piece.None) {
        throw new Error("Cannot move 'None' piece"); // TODO better error
      }

      if (pieceCurrentlyOnSideEffectSquare !== Piece.None) {
        pieceLocations[pieceCurrentlyOnSideEffectSquare].captured = true;
      } else {
        pieceLocations.matrix[sideEffect.row][sideEffect.column] = true;
      }

      pieceLocations.matrix[pieceLocations[sideEffect.piece].row][
        pieceLocations[sideEffect.piece].column
      ] = false;

      pieceLocations[sideEffect.piece].row = sideEffect.row;
      pieceLocations[sideEffect.piece].column = sideEffect.column;
    }
  });

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
