import { ApolloServer } from "@apollo/server";
import schema from "../graphql/schema.js";
import resolvers from "../graphql/resolvers.js";

const GameApiHandler = () => {
  const server = new ApolloServer({
    typeDefs: schema,
    resolvers: resolvers,
  });

  return server;
};

export default GameApiHandler;
