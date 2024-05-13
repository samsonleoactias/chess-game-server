import Color from "./Color.js";

type Game = {
  gameId: string;
  humanPlayerId: string;
  humanPlayerColor: Color;
  aiPlayerColor: Color;
  createdAt: Date;
};

export default Game;
