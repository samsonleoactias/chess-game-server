import NewGameController from "../../controllers/NewGameController";

const newGameResolver = {
  createGame: async ({ humanPlayerId }) => {
    await NewGameController({
      humanPlayerId,
    });
  },
};

export default newGameResolver;
