import DoTurnController from "../controllers/DoTurnController";
import NewGameController from "../controllers/NewGameController";
import db from "../db/postgresConnection";
import { Piece, PossibleMove } from "../types";

const resolvers = {
  Mutation: {
    createGame: async (
      parent: null,
      args: { humanPlayerId: string },
      contextValue: null,
      info: null
    ) => {
      return await NewGameController({
        db,
        humanPlayerId: args.humanPlayerId,
      });
    },
    doTurn: async (
      parent: null,
      args: { humanPlayerId: string; piece: Piece; move: PossibleMove },
      contextValue: null,
      info: null
    ) => {
      return await DoTurnController({
        db,
        humanPlayerId: args.humanPlayerId,
        piece: args.piece,
        humanMove: args.move,
      });
    },
  },
  Query: {
    GetGame(
      parent: null,
      args: { humanPlayerId: string },
      contextValue: null,
      info: null
    ) {
      return;
    },
  },
};

export default resolvers;
