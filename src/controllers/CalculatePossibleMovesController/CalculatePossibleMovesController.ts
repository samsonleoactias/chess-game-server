import PieceLocations from "../../types/PieceLocations";
import db from "../../db/postgresConnection";
import PlayerType from "../../types/PlayerType";
import objectCamelToSnake from "../helpers/objectCamelToSnake";
import mapToOneTimeOnlyMoveFlags from "../helpers/dbMaps/mapToOneTimeOnlyMoveFlags";
import { OneTimeOnlyMoveFlags } from "../../types";
import calculateHumanPossibleMoves from "./utils/possibleMoves/calculateHumanPossibleMoves";

type CalculatePossibleMovesControllerParams = {
  pieceLocations: PieceLocations;
  gameId: string;
  playerType: PlayerType;
};

const CalculatePossibleMovesController = async (
  params: CalculatePossibleMovesControllerParams
) => {
  const { pieceLocations, gameId, playerType } = params;

  const oneTimeOnlyMoveFlags: OneTimeOnlyMoveFlags = mapToOneTimeOnlyMoveFlags(
    objectCamelToSnake(
      await db("one_time_only_move_flags").where("game_id", gameId)
    )
  );

  if (playerType === PlayerType.Human) {
    return calculateHumanPossibleMoves(pieceLocations, oneTimeOnlyMoveFlags);
  }
};
