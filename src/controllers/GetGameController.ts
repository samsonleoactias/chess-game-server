import { Knex } from "knex";
import lodash from "lodash";
import dbResultToPieceLocations from "./utils/dbMaps/dbResultToPieceLocations.js";
import { Game, GameOutcome, PieceLocations } from "../types/index.js";
import dbResultToGame from "./utils/dbMaps/dbResultToGame.js";
import dbResultToGameOutcome from "./utils/dbMaps/dbResultToGameOutcome.js";

type GetGameControllerParams = {
  db: Knex;
  humanPlayerId: string;
};

// TODO types for controllers
const GetGameController = async (
  params: GetGameControllerParams
): Promise<[PieceLocations, Game, GameOutcome]> => {
  const { db, humanPlayerId } = params;

  const gameFromDb: any = lodash.first(
    await db("game")
      .join("piece_locations", "game.game_id", "=", "piece_locations.game_id")
      .join("game_outcome", "game.game_id", "=", "game_outcome.game_id")
      .where({
        human_player_id: humanPlayerId,
        outcome: "in_progress",
      })
  );

  // TODO do we need a check that all data is present?
  if (gameFromDb?.game_id) {
    const pieceLocations: PieceLocations = dbResultToPieceLocations(gameFromDb);

    const game: Game = dbResultToGame(gameFromDb);

    const gameOutcome: GameOutcome = dbResultToGameOutcome(gameFromDb);

    return [pieceLocations, game, gameOutcome];
  }

  throw new Error("No game found");
};

export default GetGameController;
