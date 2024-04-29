import mapToOneTimeOnlyMoveFlags from "../utils/dbMaps/mapToOneTimeOnlyMoveFlags.js";
import {
  OneTimeOnlyMoveFlags,
  PieceLocations,
  PlayerType,
} from "../../types/index.js";
import calculateHumanPossibleMoves from "./helpers/possibleMoves/calculateHumanPossibleMoves.js";
import { Knex } from "knex";
import lodash from "lodash";

type CalculateHumanPossibleMovesControllerParams = {
  db: Knex;
  pieceLocations: PieceLocations;
  gameId: string;
  playerType: PlayerType;
};

const CalculateHumanPossibleMovesController = async (
  params: CalculateHumanPossibleMovesControllerParams
) => {
  const { db, pieceLocations, gameId, playerType } = params;

  const oneTimeOnlyMoveFlags: OneTimeOnlyMoveFlags = mapToOneTimeOnlyMoveFlags(
    lodash.first(await db("one_time_only_move_flags").where("game_id", gameId))
  );

  // TODO do we need player type, is this always human when called
  if (playerType === PlayerType.HUMAN) {
    return calculateHumanPossibleMoves(pieceLocations, oneTimeOnlyMoveFlags);
  }

  // TODO needed if don't need player type
  return {};
};

export default CalculateHumanPossibleMovesController;
