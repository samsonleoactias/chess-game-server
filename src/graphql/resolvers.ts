import CalculateHumanPossibleMovesController from "../controllers/CalculatePossibleMovesController/CalculateHumanPossibleMovesController.js";
import DoTurnController from "../controllers/DoTurnController/DoTurnController.js";
import NewGameController from "../controllers/NewGameController/NewGameController.js";
import db from "../db/postgresConnection.js";
import {
  Color,
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
      args: { humanPlayerId?: string },
      contextValue: null,
      info: null
    ) => {
      const [gameId, pieceLocations, humanColor, humanPlayerId]: [
        string,
        PieceLocations,
        Color,
        string
      ] = await NewGameController({
        db,
        humanPlayerId: args.humanPlayerId || undefined,
      });

      const possibleMoves: PossibleMovesAssignedToPieces =
        await CalculateHumanPossibleMovesController({
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
        humanPlayerId,
      };
    },
    doTurn: async (
      parent: null,
      args: { humanPlayerId: string; piece: string; move: string },
      contextValue: null,
      info: null
    ) => {
      let parsedPiece: Piece;
      let parsedMove: PossibleMove;

      try {
        parsedPiece = args.piece as Piece;
      } catch (e) {
        throw new Error("Error parsing piece");
      }

      try {
        parsedMove = JSON.parse(args.move);
      } catch (error) {
        throw new Error("could not parse move");
      }

      try {
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
          piece: parsedPiece,
          humanMove: parsedMove,
        });

        return {
          pieceLocations,
          possibleMoves,
          humanWinner,
          aiWinner,
          humanColor,
        };
      } catch (e) {
        console.log(e);
      }
    },
    aiFirstMove: async (
      parent: null,
      args: { humanPlayerId: string },
      contextValue: null,
      info: null
    ) => {
      try {
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
          aiFirstMove: true,
        });

        return {
          pieceLocations,
          possibleMoves,
          humanWinner,
          aiWinner,
          humanColor,
        };
      } catch (e) {
        console.log(e);
      }
    },
  },
};

export default resolvers;
