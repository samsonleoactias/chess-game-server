import first from "lodash/first";

import {
  Game,
  OneTimeOnlyMoveFlags,
  Piece,
  PieceLocations,
  PossibleMove,
  PossibleMovesAssignedToPieces,
} from "../../types";
import makeMove from "./helpers/makeMove";
import calculateAiPossibleMoves from "../CalculatePossibleMovesController/helpers/possibleMoves/calculateAiPossibleMoves";
import chooseAiMove from "./helpers";
import calculateHumanPossibleMoves from "../CalculatePossibleMovesController/helpers/possibleMoves/calculateHumanPossibleMoves";
import { Knex } from "knex";

type DoTurnControllerParams = {
  db: Knex;
  humanMove: PossibleMove;
  piece: Piece;
  humanPlayerId: string;
};

const DoTurnController = async (params: DoTurnControllerParams) => {
  const { db, humanMove, piece, humanPlayerId } = params;

  const game = first(
    await db
      .where({ human_player_id: humanPlayerId })
      .select("id")
      .from<Game>("games")
  );

  const pieceLocations: PieceLocations | undefined = first(
    await db
      .where({ game_id: game.gameId })
      .select()
      .from<PieceLocations>("piece_locations")
  );

  const oneTimeOnlyMoveFlags: OneTimeOnlyMoveFlags | undefined = first(
    await db
      .where({ game_id: game.gameId })
      .select()
      .from<OneTimeOnlyMoveFlags>("one_time_only_move_flags")
  );

  let pieceLocationsAfterHumanMove;

  if (pieceLocations && oneTimeOnlyMoveFlags) {
    try {
      pieceLocationsAfterHumanMove = await makeMove({
        db,
        pieceLocations,
        piece,
        oneTimeOnlyMoveFlags,
        gameId: game.gameId,
        move: humanMove,
        humanColor: game.humanColor,
      });
    } catch (error) {
      return;
    }

    const possibleAiMovesAssignedToPieces: PossibleMovesAssignedToPieces =
      calculateAiPossibleMoves(pieceLocations, oneTimeOnlyMoveFlags);

    const chosenAiMove: { piece: string; move: PossibleMove } = chooseAiMove(
      pieceLocations,
      oneTimeOnlyMoveFlags,
      possibleAiMovesAssignedToPieces
    );

    let pieceLocationsAfterAiMove: PieceLocations;

    try {
      pieceLocationsAfterAiMove = await makeMove({
        db,
        pieceLocations,
        gameId: game.gameId,
        humanColor: game.humanColor,
        piece: (<any>Piece)[chosenAiMove.piece],
        oneTimeOnlyMoveFlags,
        move: chosenAiMove.move,
      });
    } catch (error) {
      return;
    }

    if (pieceLocationsAfterAiMove.humanKing.captured === true) {
      // TODO insert losing logic
      return {
        pieceLocations: pieceLocationsAfterAiMove,
        possibleMoves: {},
        humanKingCaptured: true,
        aiKingCaptured: false,
      };
    }

    const possibleHumanMovesAssignedToPieces: PossibleMovesAssignedToPieces =
      calculateHumanPossibleMoves(
        pieceLocationsAfterAiMove,
        oneTimeOnlyMoveFlags
      );

    return {
      pieceLocations: pieceLocationsAfterAiMove,
      possibleMoves: possibleHumanMovesAssignedToPieces,
      humanKingCaptured: false,
      aiKingCaptured: false,
    };
  }
};

export default DoTurnController;
