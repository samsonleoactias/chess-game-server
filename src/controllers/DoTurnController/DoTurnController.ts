import first from "lodash/first";

import { Piece, PieceLocations, PossibleMove } from "../../types";
import db from "../../db/postgresConnection";
import MakeMoveController from "../MakeMoveController";

type DoTurnControllerParams = {
  humanMove: PossibleMove;
  piece: Piece;
  gameId: string;
};

const DoTurnController = async (params: DoTurnControllerParams) => {
  const { humanMove, piece, gameId } = params;

  var pieceLocations: PieceLocations = first(
    await db
      .where({ game_id: gameId })
      .select()
      .from<PieceLocations>("piece_locations")
  );

  try {
    await MakeMoveController({
      pieceLocations,
      gameId,
      piece,
      move: humanMove,
    });
  } catch (error) {
    return;
  }
};
