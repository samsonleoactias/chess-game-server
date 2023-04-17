import express, { Express, Request, Response } from "express";
import NewGameController from "../controllers/NewGameController.js";

import NewGameGeneratorController from "../controllers/NewGameGeneratorController/index.js";

const GameApiHandler = () => {
  const app: Express = express();

  app.use(express.json());

  app.post("/newGame", async (req: Request, res: Response) => {
    if (!req.body.humanPlayerId) res.status(404); // TODO better error handling

    res.send(
      await NewGameController({
        humanPlayerId: req.body.humanPlayerId,
      })
    );
  });

  return app;
};

export default GameApiHandler;
