import NewGameController from "../../controllers/NewGameController";
import db from "../../db/postgresConnection";
import * as dotenv from "dotenv";
import knex from "knex";

dotenv.config({ path: ".env" });

const newGameResolver = {
  Mutation: {
    /// TODO better types for createGame args
    createGame: async (
      parent: Object,
      args: { humanPlayerId: string; test?: string; testDbUrl?: string },
      contextValue: Object,
      info: Object
    ) => {
      if (args.test === process.env.TEST) {
        const testDb = knex({
          client: "pg",
          connection: args.testDbUrl,
        });

        const newGameResult = await NewGameController({
          db: testDb,
          humanPlayerId: args.humanPlayerId,
        });

        testDb.destroy();

        return newGameResult;
      }

      return await NewGameController({
        db,
        humanPlayerId: args.humanPlayerId,
      });
    },
  },
};

export default newGameResolver;
