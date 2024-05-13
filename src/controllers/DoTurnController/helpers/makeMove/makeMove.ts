import {
  Color,
  OneTimeOnlyMoveFlags,
  Piece,
  PieceLocations,
  PossibleMove,
} from "../../../../types/index.js";
import findWhatPieceIsOnASquare from "../../../utils/findWhatPieceIsOnASquare.js";
import { Knex } from "knex";
import { updateOneTimeOnlyMarkers } from "./helpers/index.js";
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

  let newPieceLocations = JSON.parse(JSON.stringify(pieceLocations));

  let pieceCurrentlyOnSquare: Piece = findWhatPieceIsOnASquare(
    newPieceLocations,
    move.location.row,
    move.location.column
  );

  if (piece === Piece.None) {
    throw new Error("Cannot move 'None' piece");
  }

  if (pieceCurrentlyOnSquare !== Piece.None) {
    newPieceLocations[pieceCurrentlyOnSquare].captured = true;
  } else {
    newPieceLocations.matrix[move.location.row][move.location.column] = true;
  }

  newPieceLocations.matrix[newPieceLocations[piece].row][
    newPieceLocations[piece].column
  ] = false;

  newPieceLocations[piece].row = move.location.row;
  newPieceLocations[piece].column = move.location.column;

  move.sideEffects?.forEach((sideEffect) => {
    if (sideEffect.piece && sideEffect.row && sideEffect.column) {
      let pieceCurrentlyOnSideEffectSquare: Piece = findWhatPieceIsOnASquare(
        newPieceLocations,
        sideEffect.row,
        sideEffect.column
      );

      if (sideEffect.piece === Piece.None) {
        throw new Error("Cannot move 'None' piece");
      }

      if (pieceCurrentlyOnSideEffectSquare !== Piece.None) {
        newPieceLocations[pieceCurrentlyOnSideEffectSquare].captured = true;
      } else {
        newPieceLocations.matrix[sideEffect.row][sideEffect.column] = true;
      }

      newPieceLocations.matrix[newPieceLocations[sideEffect.piece].row][
        newPieceLocations[sideEffect.piece].column
      ] = false;

      newPieceLocations[sideEffect.piece].row = sideEffect.row;
      newPieceLocations[sideEffect.piece].column = sideEffect.column;
    }
  });

  if (move.enPassantCapture && move.enPassantCapture !== Piece.None) {
    newPieceLocations[move.enPassantCapture].captured = true;
    newPieceLocations.matrix[newPieceLocations[move.enPassantCapture].row][
      newPieceLocations[move.enPassantCapture].column
    ] = false;
  }

  try {
    await db("piece_locations")
      .where({ game_id: gameId })
      .update({
        ...pieceLocationsObjectToDb(newPieceLocations),
      });
  } catch (error) {
    console.log("Database error: " + JSON.stringify(error));
    throw error;
  }

  await updateOneTimeOnlyMarkers({
    db,
    gameId,
    pieceLocations: newPieceLocations,
    formerPieceLocations: pieceLocations,
    oneTimeOnlyMoveFlags,
    humanColor,
    piece,
    move,
  });

  return newPieceLocations;
};

export default makeMove;
