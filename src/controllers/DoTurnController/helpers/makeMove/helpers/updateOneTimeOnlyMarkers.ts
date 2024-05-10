import { Knex } from "knex";
import {
  Color,
  OneTimeOnlyMoveFlags,
  Piece,
  PieceLocations,
  PossibleMove,
} from "../../../../../types/index.js";
import enPassantCheckAndDbUpdate from "./enPassantCheckAndDbUpdate.js";

type UpdateOneTimeOnlyMarkersParams = {
  db: Knex;
  gameId: string;
  pieceLocations: PieceLocations;
  formerPieceLocations: PieceLocations;
  oneTimeOnlyMoveFlags: OneTimeOnlyMoveFlags;
  humanColor: Color;
  piece: Piece;
  move: PossibleMove;
};

const updateOneTimeOnlyMarkers = async (
  params: UpdateOneTimeOnlyMarkersParams
): Promise<void> => {
  const {
    db,
    gameId,
    pieceLocations,
    formerPieceLocations,
    oneTimeOnlyMoveFlags,
    humanColor,
    piece,
    move,
  } = params;
  if (
    oneTimeOnlyMoveFlags.humanPawnAInitialMoveEligible === true &&
    pieceLocations.humanPawnA.row < 6
  ) {
    await db("one_time_only_move_flags")
      .where({ game_id: gameId })
      .update({ human_pawn_a_initial_move_eligible: false });
  }

  if (
    oneTimeOnlyMoveFlags.humanPawnBInitialMoveEligible === true &&
    pieceLocations.humanPawnB.row < 6
  ) {
    await db("one_time_only_move_flags")
      .where({ game_id: gameId })
      .update({ human_pawn_b_initial_move_eligible: false });
  }

  if (
    oneTimeOnlyMoveFlags.humanPawnCInitialMoveEligible === true &&
    pieceLocations.humanPawnC.row < 6
  ) {
    await db("one_time_only_move_flags")
      .where({ game_id: gameId })
      .update({ human_pawn_c_initial_move_eligible: false });
  }

  if (
    oneTimeOnlyMoveFlags.humanPawnDInitialMoveEligible === true &&
    pieceLocations.humanPawnD.row < 6
  ) {
    await db("one_time_only_move_flags")
      .where({ game_id: gameId })
      .update({ human_pawn_d_initial_move_eligible: false });
  }

  if (
    oneTimeOnlyMoveFlags.humanPawnEInitialMoveEligible === true &&
    pieceLocations.humanPawnE.row < 6
  ) {
    await db("one_time_only_move_flags")
      .where({ game_id: gameId })
      .update({ human_pawn_e_initial_move_eligible: false });
  }

  if (
    oneTimeOnlyMoveFlags.humanPawnFInitialMoveEligible === true &&
    pieceLocations.humanPawnF.row < 6
  ) {
    await db("one_time_only_move_flags")
      .where({ game_id: gameId })
      .update({ human_pawn_f_initial_move_eligible: false });
  }

  if (
    oneTimeOnlyMoveFlags.humanPawnGInitialMoveEligible === true &&
    pieceLocations.humanPawnG.row < 6
  ) {
    await db("one_time_only_move_flags")
      .where({ game_id: gameId })
      .update({ human_pawn_g_initial_move_eligible: false });
  }

  if (
    oneTimeOnlyMoveFlags.humanPawnHInitialMoveEligible === true &&
    pieceLocations.humanPawnH.row < 6
  ) {
    await db("one_time_only_move_flags")
      .where({ game_id: gameId })
      .update({ human_pawn_h_initial_move_eligible: false });
  }

  if (
    oneTimeOnlyMoveFlags.aiPawnAInitialMoveEligible === true &&
    pieceLocations.aiPawnA.row > 1
  ) {
    await db("one_time_only_move_flags")
      .where({ game_id: gameId })
      .update({ ai_pawn_a_initial_move_eligible: false });
  }

  if (
    oneTimeOnlyMoveFlags.aiPawnBInitialMoveEligible === true &&
    pieceLocations.aiPawnB.row > 1
  ) {
    await db("one_time_only_move_flags")
      .where({ game_id: gameId })
      .update({ ai_pawn_b_initial_move_eligible: false });
  }

  if (
    oneTimeOnlyMoveFlags.aiPawnCInitialMoveEligible === true &&
    pieceLocations.aiPawnC.row > 1
  ) {
    await db("one_time_only_move_flags")
      .where({ game_id: gameId })
      .update({ ai_pawn_c_initial_move_eligible: false });
  }

  if (
    oneTimeOnlyMoveFlags.aiPawnDInitialMoveEligible === true &&
    pieceLocations.aiPawnD.row > 1
  ) {
    await db("one_time_only_move_flags")
      .where({ game_id: gameId })
      .update({ ai_pawn_d_initial_move_eligible: false });
  }

  if (
    oneTimeOnlyMoveFlags.aiPawnEInitialMoveEligible === true &&
    pieceLocations.aiPawnE.row > 1
  ) {
    await db("one_time_only_move_flags")
      .where({ game_id: gameId })
      .update({ ai_pawn_e_initial_move_eligible: false });
  }

  if (
    oneTimeOnlyMoveFlags.aiPawnFInitialMoveEligible === true &&
    pieceLocations.aiPawnF.row > 1
  ) {
    await db("one_time_only_move_flags")
      .where({ game_id: gameId })
      .update({ ai_pawn_f_initial_move_eligible: false });
  }

  if (
    oneTimeOnlyMoveFlags.aiPawnGInitialMoveEligible === true &&
    pieceLocations.aiPawnG.row > 1
  ) {
    await db("one_time_only_move_flags")
      .where({ game_id: gameId })
      .update({ ai_pawn_g_initial_move_eligible: false });
  }

  if (
    oneTimeOnlyMoveFlags.aiPawnHInitialMoveEligible === true &&
    pieceLocations.aiPawnH.row > 1
  ) {
    await db("one_time_only_move_flags")
      .where({ game_id: gameId })
      .update({ ai_pawn_h_initial_move_eligible: false });
  }

  if (
    oneTimeOnlyMoveFlags.humanCastleRookAEligible === true &&
    (pieceLocations.humanKing.row < 7 ||
      pieceLocations.humanKing.column !==
        (humanColor === Color.WHITE ? 4 : 3) ||
      pieceLocations.humanRookA.row < 7 ||
      pieceLocations.humanRookA.column > 1 ||
      pieceLocations.humanRookA.captured === true)
  ) {
    await db("one_time_only_move_flags")
      .where({ game_id: gameId })
      .update({ human_castle_rook_a_eligible: false });
  }

  if (
    oneTimeOnlyMoveFlags.humanCastleRookBEligible === true &&
    (pieceLocations.humanKing.row < 7 ||
      pieceLocations.humanKing.column !==
        (humanColor === Color.WHITE ? 4 : 3) ||
      pieceLocations.humanRookB.row < 7 ||
      pieceLocations.humanRookB.column < 7 ||
      pieceLocations.humanRookB.captured === true)
  ) {
    await db("one_time_only_move_flags")
      .where({ game_id: gameId })
      .update({ human_castle_rook_b_eligible: false });
  }

  if (
    oneTimeOnlyMoveFlags.aiCastleRookAEligible === true &&
    (pieceLocations.aiKing.row > 1 ||
      pieceLocations.aiKing.column !== (humanColor === Color.WHITE ? 4 : 3) ||
      pieceLocations.aiRookA.row > 1 ||
      pieceLocations.aiRookA.column > 1 ||
      pieceLocations.aiRookA.captured === true)
  ) {
    await db("one_time_only_move_flags")
      .where({ game_id: gameId })
      .update({ ai_castle_rook_a_eligible: false });
  }

  if (
    oneTimeOnlyMoveFlags.aiCastleRookBEligible === true &&
    (pieceLocations.aiKing.row > 1 ||
      pieceLocations.aiKing.column !== (humanColor === Color.WHITE ? 4 : 3) ||
      pieceLocations.aiRookB.row > 1 ||
      pieceLocations.aiRookB.column <= 6 ||
      pieceLocations.aiRookB.captured === true)
  ) {
    await db("one_time_only_move_flags")
      .where({ game_id: gameId })
      .update({ ai_castle_rook_b_eligible: false });
  }

  await enPassantCheckAndDbUpdate(
    gameId,
    piece,
    move,
    formerPieceLocations,
    db,
    oneTimeOnlyMoveFlags
  );
};

export default updateOneTimeOnlyMarkers;
