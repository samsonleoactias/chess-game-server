import PieceLocations from "../../types/PieceLocations";
import PlayerType from "../../types/PlayerType";
import objectCamelToSnake from "../helpers/objectCamelToSnake";
import mapToOneTimeOnlyMoveFlags from "../helpers/dbMaps/mapToOneTimeOnlyMoveFlags";
import { OneTimeOnlyMoveFlags } from "../../types";
import calculateHumanPossibleMoves from "./helpers/possibleMoves/calculateHumanPossibleMoves";
import { Knex } from "knex";
import first from "lodash/first";

type CalculatePossibleMovesControllerParams = {
  db: Knex;
  pieceLocations: PieceLocations;
  gameId: string;
  playerType: PlayerType;
};

const CalculatePossibleMovesController = async (
  params: CalculatePossibleMovesControllerParams
) => {
  const { db, pieceLocations, gameId, playerType } = params;

  const oneTimeOnlyMoveFlags: OneTimeOnlyMoveFlags = mapToOneTimeOnlyMoveFlags(
    first(await db("one_time_only_move_flags").where("game_id", gameId))
  );

  if (playerType === PlayerType.Human) {
    return calculateHumanPossibleMoves(pieceLocations, oneTimeOnlyMoveFlags);
  }
};

export default CalculatePossibleMovesController;
