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
        humanColor: humanColor === Color.WHITE ? "WHITE" : "BLACK",
        humanWinner: false,
        aiWinner: false,
      };
    },
    // TODO fix input
    doTurn: async (
      parent: null,
      args: { humanPlayerId: string; piece: Piece; move: string },
      contextValue: null,
      info: null
    ) => {
      let parsedMove: PossibleMove;

      try {
        parsedMove = JSON.parse(args.move);
      } catch (error) {
        console.log("could not parse move"); // TODO: better error
        return;
      }

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
        humanMove: parsedMove,
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
      try {
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
      } catch (error) {
        return {
          pieceLocations: null,
          possibleMovies: null,
          humanWinner: null,
          aiWinner: null,
          humanColor: null,
        };
      }
    },
  },
};

export default resolvers;
