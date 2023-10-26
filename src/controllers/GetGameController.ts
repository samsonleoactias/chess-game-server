import { Knex } from "knex";
import { first } from "lodash";
import dbResultToPieceLocations from "./utils/dbMaps/dbResultToPieceLocations";
import { Game, PieceLocations } from "../types";
import dbResultToGame from "./utils/dbMaps/dbResultToGame";

type GetGameControllerParams = {
  db: Knex;
  humanPlayerId: string;
};

const GetGameController = async (params: GetGameControllerParams) => {
  const { db, humanPlayerId } = params;

  const gameFromDb: any = first(
    await db("pieceLocations")
      .join("piece_location", "game.game_id", "=", "piece_location.game_id")
      .join("game_outcome", "game.game_id", "=", "game_outcome.game_id")
      .where({
        human_player_id: humanPlayerId,
        outcome: "in_progress",
      })
  );

  if (gameFromDb !== undefined) {
    const pieceLocations: PieceLocations = dbResultToPieceLocations(gameFromDb);

    const game: Game = dbResultToGame(gameFromDb);
  }
};
