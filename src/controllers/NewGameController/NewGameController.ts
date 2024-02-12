import { Knex } from "knex";
import { PieceLocations, Color } from "../../types/index.js";
import newGameGenerator from "./helpers/newGameGenerator/newGameGenerator.js";

type NewGameControllerParams = {
  db: Knex;
  humanPlayerId: string;
};

const NewGameController = async (
  params: NewGameControllerParams
): Promise<[string, PieceLocations, Color]> => {
  const { db, humanPlayerId } = params;

  const [gameId, pieceLocations, humanColor]: [string, PieceLocations, Color] =
    await newGameGenerator({
      db,
      humanPlayerId,
    });

  return [gameId, pieceLocations, humanColor];
};

export default NewGameController;
