import Color from "./Color";

type Game = {
  gameId: String;
  humanPlayerId: String;
  humanPlayerColor: Color;
  aiPlayerColor: Color;
  createdAt: Date;
};

export default Game;
