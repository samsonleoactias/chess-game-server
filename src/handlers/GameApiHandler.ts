import express, { Express, Request, Response } from "express";
import { graphqlHTTP } from "express-graphql";
import gameSchema from "../graphql/schemas/GameSchema";
import newGameResolver from "../graphql/resolvers/NewGameResolver";

const GameApiHandler = () => {
  const app: Express = express();

  app.use(
    "/newGame",
    graphqlHTTP({
      schema: gameSchema,
      rootValue: newGameResolver,
      graphiql: true,
    })
  );

  return app;
};

export default GameApiHandler;
