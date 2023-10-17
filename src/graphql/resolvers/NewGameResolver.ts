import NewGameController from "../../controllers/NewGameController";

const newGameResolver = {
  createGame: async (input: { humanPlayerId: string }) => {
    await NewGameController({
      humanPlayerId: input.humanPlayerId,
    });
  },
};

export default newGameResolver;
