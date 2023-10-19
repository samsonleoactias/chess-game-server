import { Knex } from "knex";
import PieceLocations from "../types/PieceLocations";
import NewGameGeneratorController from "./NewGameGeneratorController";

type NewGameControllerParams = {
  db: Knex;
  humanPlayerId: string;
};

const NewGameController = async (params: NewGameControllerParams) => {
  const { db, humanPlayerId } = params;

  const pieceLocations: PieceLocations = await NewGameGeneratorController({
    db,
    humanPlayerId,
  });

  return pieceLocations;
};

export default NewGameController;
