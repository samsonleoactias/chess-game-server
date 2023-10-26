import { Game } from "../../../types";

const dbResultToGame = (dbResult: any): Game => {
  const game: Game = {
    gameId: dbResult.game_id,
    humanPlayerId: dbResult.human_player_id,
    humanPlayerColor: dbResult.human_player_color,
    aiPlayerColor: dbResult.ai_player_color,
    createdAt: dbResult.created_at,
  };

  return game;
};

export default dbResultToGame;
