import { ApolloServer } from "@apollo/server";
import schema from "../graphql/schema";
import resolvers from "../graphql/resolvers";

const GameApiHandler = () => {
  const server = new ApolloServer({
    typeDefs: schema,
    resolvers: resolvers,
  });

  return server;
};

export default GameApiHandler;
