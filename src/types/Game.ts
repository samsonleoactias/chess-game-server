import Color from "./Color";

type Game = {
  gameId: string;
  humanPlayerId: string;
  humanPlayerColor: Color;
  aiPlayerColor: Color;
  createdAt: Date;
};

export default Game;
