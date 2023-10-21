import { Knex } from "knex";
import PieceLocations from "../../types/PieceLocations";
import newGameGenerator from "./helpers/newGameGenerator";

type NewGameControllerParams = {
  db: Knex;
  humanPlayerId: string;
};

const NewGameController = async (params: NewGameControllerParams) => {
  const { db, humanPlayerId } = params;

  const pieceLocations: PieceLocations = await newGameGenerator({
    db,
    humanPlayerId,
  });

  return pieceLocations;
};

export default NewGameController;
