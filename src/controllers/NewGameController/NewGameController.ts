import { Knex } from "knex";
import PieceLocations from "../../types/PieceLocations";
import newGameGenerator from "./helpers/newGameGenerator";
import {
  Color,
  Game,
  GameOutcome,
  PossibleMovesAssignedToPieces,
} from "../../types";

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
