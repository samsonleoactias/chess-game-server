import { Knex } from "knex";
import { first } from "lodash";
import dbResultToPieceLocations from "./utils/dbMaps/dbResultToPieceLocations";
import {
  Game,
  GameOutcome,
  Outcome,
  PieceLocations,
  PlayerType,
  PossibleMove,
  PossibleMovesAssignedToPieces,
} from "../types";
import dbResultToGame from "./utils/dbMaps/dbResultToGame";
import dbResultToGameOutcome from "./utils/dbMaps/dbResultToGameOutcome";
import CalculatePossibleMovesController from "./CalculatePossibleMovesController/CalculatePossibleMovesController";

type GetGameControllerParams = {
  db: Knex;
  humanPlayerId: string;
};

// TODO types for controllers
const GetGameController = async (
  params: GetGameControllerParams
): Promise<[PieceLocations, Game, GameOutcome]> => {
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

  // TODO do we need a check that all data is present?
  if (gameFromDb.game_id) {
    const pieceLocations: PieceLocations = dbResultToPieceLocations(gameFromDb);

    const game: Game = dbResultToGame(gameFromDb);

    const gameOutcome: GameOutcome = dbResultToGameOutcome(gameFromDb);

    return [pieceLocations, game, gameOutcome];
  }

  throw new Error("No game found");
};

export default GetGameController;
