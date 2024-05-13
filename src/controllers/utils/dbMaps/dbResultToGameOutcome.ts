import { GameOutcome } from "../../../types/index.js";

const dbResultToGameOutcome = (dbResult: any): GameOutcome => {
  const gameOutcome: GameOutcome = {
    gameOutcomeId: dbResult.game_outcome_id,
    gameId: dbResult.game_id,
    outcome: dbResult.outcome,
  };

  return gameOutcome;
};

export default dbResultToGameOutcome;
