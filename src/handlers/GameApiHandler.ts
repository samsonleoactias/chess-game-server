import express, { Express, Request, Response } from "express";
import gameSchema from "../graphql/schemas/GameSchema";
import newGameResolver from "../graphql/resolvers/NewGameResolver";
import { ApolloServer } from "@apollo/server";

const GameApiHandler = () => {
  const server = new ApolloServer({
    typeDefs: gameSchema,
    resolvers: newGameResolver,
  });

  return server;
};

export default GameApiHandler;
