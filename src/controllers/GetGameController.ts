import { Knex } from "knex";
import { first } from "lodash";
import gamePieceLocationsGameOutcomeDbToPieceLocations from "./utils/dbMaps/gamePieceLocationsGameOutcomeDbToPieceLocations";
import { GamePieceLocationsGameOutcomeDb } from "../types";

type GetGameControllerParams = {
  db: Knex;
  humanPlayerId: string;
};

const GetGameController = async (params: GetGameControllerParams) => {
  const { db, humanPlayerId } = params;

  const gameFromDb: GamePieceLocationsGameOutcomeDb | undefined = first(
    await db("pieceLocations")
      .join("piece_location", "game.game_id", "=", "piece_location.game_id")
      .join("game_outcome", "game.game_id", "=", "game_outcome.game_id")
      .where({
        human_player_id: humanPlayerId,
        outcome: "in_progress",
      })
  );

  if (gameFromDb !== undefined) {
    const pieceLocations =
      gamePieceLocationsGameOutcomeDbToPieceLocations(gameFromDb);
  }
};
