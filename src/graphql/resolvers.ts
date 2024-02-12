import CalculatePossibleMovesController from "../controllers/CalculatePossibleMovesController/CalculatePossibleMovesController.js";
import DoTurnController from "../controllers/DoTurnController/DoTurnController.js";
import GetGameController from "../controllers/GetGameController.js";
import NewGameController from "../controllers/NewGameController/NewGameController.js";
import db from "../db/postgresConnection.js";
import {
  Color,
  Game,
  GameOutcome,
  Outcome,
  Piece,
  PieceLocations,
  PlayerType,
  PossibleMove,
  PossibleMovesAssignedToPieces,
} from "../types/index.js";

const resolvers = {
  Mutation: {
    createGame: async (
      parent: null,
      args: { humanPlayerId: string },
      contextValue: null,
      info: null
    ) => {
      const [gameId, pieceLocations, humanColor]: [
        string,
        PieceLocations,
        Color
      ] = await NewGameController({
        db,
        humanPlayerId: args.humanPlayerId,
      });

      const possibleMoves: PossibleMovesAssignedToPieces =
        await CalculatePossibleMovesController({
          db,
          gameId,
          pieceLocations,
          playerType: PlayerType.HUMAN,
        });

      return {
        pieceLocations,
        possibleMoves,
        humanColor,
        humanWinner: false,
        aiWinner: false,
      };
    },
    // TODO fix input
    doTurn: async (
      parent: null,
      args: { humanPlayerId: string; piece: Piece; move: PossibleMove },
      contextValue: null,
      info: null
    ) => {
      const [
        humanColor,
        pieceLocations,
        possibleMoves,
        aiWinner,
        humanWinner,
      ]: [
        Color,
        PieceLocations,
        PossibleMovesAssignedToPieces,
        boolean,
        boolean
      ] = await DoTurnController({
        db,
        humanPlayerId: args.humanPlayerId,
        piece: args.piece,
        humanMove: args.move,
      });

      return {
        pieceLocations,
        possibleMoves,
        humanWinner,
        aiWinner,
        humanColor,
      };
    },
  },
  Query: {
    async getGame(
      parent: null,
      args: { humanPlayerId: string },
      contextValue: null,
      info: null
    ) {
      const [pieceLocations, game, gameOutcome]: [
        PieceLocations,
        Game,
        GameOutcome
      ] = await GetGameController({ db, humanPlayerId: args.humanPlayerId });

      let possibleMoves: PossibleMovesAssignedToPieces;

      if (gameOutcome.outcome === Outcome.IN_PROGRESS) {
        possibleMoves = await CalculatePossibleMovesController({
          db,
          pieceLocations,
          gameId: game.gameId,
          playerType: PlayerType.HUMAN,
        });
      } else {
        possibleMoves = {};
      }
      return {
        pieceLocations,
        possibleMoves,
        humanWinner: gameOutcome.outcome === Outcome.HUMAN_WINS,
        aiWinner: gameOutcome.outcome === Outcome.AI_WINS,
        humanColor: game.humanPlayerColor,
      };
    },
  },
};

export default resolvers;
