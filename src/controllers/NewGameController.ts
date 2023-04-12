import PieceLocations from "../types/PieceLocations";
import NewGameGeneratorController from "./NewGameGeneratorController";

type NewGameControllerParams = {
  humanPlayerId: string;
};

const NewGameController = async (params: NewGameControllerParams) => {
  const { humanPlayerId } = params;

  const pieceLocations: PieceLocations = await NewGameGeneratorController({
    humanPlayerId,
  });

  return pieceLocations;
};

export default NewGameController;
