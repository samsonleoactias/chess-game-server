import { Knex } from "knex";

type GetGameControllerParams = {
  db: Knex;
  humanPlayerId: string;
};

const GetGameController = async (params: GetGameControllerParams) => {
  const { db, humanPlayerId } = params;

  const gameFromDb: object | undefined = await db("game")
    .join("piece_location", "game.game_id", "=", "piece_location.game_id")
    .join("game_outcome", "game.game_id", "=", "game_outcome.game_id")
    .where({
      human_player_id: humanPlayerId,
      outcome: "in_progress",
    });
};
