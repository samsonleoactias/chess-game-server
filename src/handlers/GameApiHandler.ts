import express, { Express, Request, Response }  from "express";

import NewGameGeneratorController from "../controllers/NewGameGeneratorController/index.js";

const GameApiHandler = () => {
  const app: Express = express();

  app.get('/newGame', (req: Request, res: Response) => {
    if (!req.body.humanPlayerId) res.status(404); // TODO better error handling
    
    res.send(NewGameGeneratorController({humanPlayerId: req.body.humanPlayerId}));
  });

  return app;
}

export default GameApiHandler;