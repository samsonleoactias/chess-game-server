import { Knex } from "knex";
import Piece from "../../../../../types/Piece.js";
import PieceLocations from "../../../../../types/PieceLocations.js";
import PossibleMove from "../../../../../types/PossibleMove.js";
import OneTimeOnlyMoveFlags from "../../../../../types/OneTimeOnlyMoveFlags.js";

const enPassantCheckAndDbUpdate = async (
  gameId: string,
  piece: Piece,
  move: PossibleMove,
  pieceLocations: PieceLocations,
  db: Knex,
  oneTimeOnlyMoveFlags: OneTimeOnlyMoveFlags
): Promise<void> => {
  let newOneTimeOnlyMoveFlags: OneTimeOnlyMoveFlags = JSON.parse(
    JSON.stringify(oneTimeOnlyMoveFlags)
  );

  newOneTimeOnlyMoveFlags.humanPawnAEnPassantEligible = false;
  newOneTimeOnlyMoveFlags.humanPawnBEnPassantEligible = false;
  newOneTimeOnlyMoveFlags.humanPawnCEnPassantEligible = false;
  newOneTimeOnlyMoveFlags.humanPawnDEnPassantEligible = false;
  newOneTimeOnlyMoveFlags.humanPawnEEnPassantEligible = false;
  newOneTimeOnlyMoveFlags.humanPawnFEnPassantEligible = false;
  newOneTimeOnlyMoveFlags.humanPawnGEnPassantEligible = false;
  newOneTimeOnlyMoveFlags.humanPawnHEnPassantEligible = false;
  newOneTimeOnlyMoveFlags.aiPawnAEnPassantEligible = false;
  newOneTimeOnlyMoveFlags.aiPawnBEnPassantEligible = false;
  newOneTimeOnlyMoveFlags.aiPawnCEnPassantEligible = false;
  newOneTimeOnlyMoveFlags.aiPawnDEnPassantEligible = false;
  newOneTimeOnlyMoveFlags.aiPawnEEnPassantEligible = false;
  newOneTimeOnlyMoveFlags.aiPawnFEnPassantEligible = false;
  newOneTimeOnlyMoveFlags.aiPawnGEnPassantEligible = false;
  newOneTimeOnlyMoveFlags.aiPawnHEnPassantEligible = false;

  if (
    piece === Piece.HumanPawnA &&
    move.location.row === 4 &&
    pieceLocations[Piece.HumanPawnA].row === 6
  ) {
    newOneTimeOnlyMoveFlags.humanPawnAEnPassantEligible = true;
  }

  if (
    piece === Piece.HumanPawnB &&
    move.location.row === 4 &&
    pieceLocations[Piece.HumanPawnB].row === 6
  ) {
    newOneTimeOnlyMoveFlags.humanPawnBEnPassantEligible = true;
  }

  if (
    piece === Piece.HumanPawnC &&
    move.location.row === 4 &&
    pieceLocations[Piece.HumanPawnC].row === 6
  ) {
    newOneTimeOnlyMoveFlags.humanPawnCEnPassantEligible = true;
  }

  if (
    piece === Piece.HumanPawnD &&
    move.location.row === 4 &&
    pieceLocations[Piece.HumanPawnD].row === 6
  ) {
    newOneTimeOnlyMoveFlags.humanPawnDEnPassantEligible = true;
  }

  if (
    piece === Piece.HumanPawnE &&
    move.location.row === 4 &&
    pieceLocations[Piece.HumanPawnE].row === 6
  ) {
    newOneTimeOnlyMoveFlags.humanPawnEEnPassantEligible = true;
  }

  if (
    piece === Piece.HumanPawnF &&
    move.location.row === 4 &&
    pieceLocations[Piece.HumanPawnF].row === 6
  ) {
    newOneTimeOnlyMoveFlags.humanPawnFEnPassantEligible = true;
  }

  if (
    piece === Piece.HumanPawnG &&
    move.location.row === 4 &&
    pieceLocations[Piece.HumanPawnG].row === 6
  ) {
    newOneTimeOnlyMoveFlags.humanPawnGEnPassantEligible = true;
  }

  if (
    piece === Piece.HumanPawnH &&
    move.location.row === 4 &&
    pieceLocations[Piece.HumanPawnH].row === 6
  ) {
    newOneTimeOnlyMoveFlags.humanPawnHEnPassantEligible = true;
  }

  if (
    piece === Piece.AiPawnA &&
    move.location.row === 3 &&
    pieceLocations[Piece.AiPawnA].row === 1
  ) {
    newOneTimeOnlyMoveFlags.aiPawnAEnPassantEligible = true;
  }

  if (
    piece === Piece.AiPawnB &&
    move.location.row === 3 &&
    pieceLocations[Piece.AiPawnB].row === 1
  ) {
    newOneTimeOnlyMoveFlags.aiPawnBEnPassantEligible = true;
  }

  if (
    piece === Piece.AiPawnC &&
    move.location.row === 3 &&
    pieceLocations[Piece.AiPawnC].row === 1
  ) {
    newOneTimeOnlyMoveFlags.aiPawnCEnPassantEligible = true;
  }

  if (
    piece === Piece.AiPawnD &&
    move.location.row === 3 &&
    pieceLocations[Piece.AiPawnD].row === 1
  ) {
    newOneTimeOnlyMoveFlags.aiPawnDEnPassantEligible = true;
  }

  if (
    piece === Piece.AiPawnE &&
    move.location.row === 3 &&
    pieceLocations[Piece.AiPawnE].row === 1
  ) {
    newOneTimeOnlyMoveFlags.aiPawnEEnPassantEligible = true;
  }

  if (
    piece === Piece.AiPawnF &&
    move.location.row === 3 &&
    pieceLocations[Piece.AiPawnF].row === 1
  ) {
    newOneTimeOnlyMoveFlags.aiPawnFEnPassantEligible = true;
  }

  if (
    piece === Piece.AiPawnG &&
    move.location.row === 3 &&
    pieceLocations[Piece.AiPawnG].row === 1
  ) {
    newOneTimeOnlyMoveFlags.aiPawnGEnPassantEligible = true;
  }

  if (
    piece === Piece.AiPawnH &&
    move.location.row === 3 &&
    pieceLocations[Piece.AiPawnH].row === 1
  ) {
    newOneTimeOnlyMoveFlags.aiPawnHEnPassantEligible = true;
  }

  if (
    JSON.stringify(newOneTimeOnlyMoveFlags) !==
    JSON.stringify(oneTimeOnlyMoveFlags) // TODO better way to compare
  ) {
    try {
      await db("one_time_only_move_flags").where({ game_id: gameId }).update({
        human_pawn_a_en_passant_eligible:
          newOneTimeOnlyMoveFlags.humanPawnAEnPassantEligible,
        human_pawn_b_en_passant_eligible:
          newOneTimeOnlyMoveFlags.humanPawnBEnPassantEligible,
        human_pawn_c_en_passant_eligible:
          newOneTimeOnlyMoveFlags.humanPawnCEnPassantEligible,
        human_pawn_d_en_passant_eligible:
          newOneTimeOnlyMoveFlags.humanPawnDEnPassantEligible,
        human_pawn_e_en_passant_eligible:
          newOneTimeOnlyMoveFlags.humanPawnEEnPassantEligible,
        human_pawn_f_en_passant_eligible:
          newOneTimeOnlyMoveFlags.humanPawnFEnPassantEligible,
        human_pawn_g_en_passant_eligible:
          newOneTimeOnlyMoveFlags.humanPawnGEnPassantEligible,
        human_pawn_h_en_passant_eligible:
          newOneTimeOnlyMoveFlags.humanPawnHEnPassantEligible,
        ai_pawn_a_en_passant_eligible:
          newOneTimeOnlyMoveFlags.aiPawnAEnPassantEligible,
        ai_pawn_b_en_passant_eligible:
          newOneTimeOnlyMoveFlags.aiPawnBEnPassantEligible,
        ai_pawn_c_en_passant_eligible:
          newOneTimeOnlyMoveFlags.aiPawnCEnPassantEligible,
        ai_pawn_d_en_passant_eligible:
          newOneTimeOnlyMoveFlags.aiPawnDEnPassantEligible,
        ai_pawn_e_en_passant_eligible:
          newOneTimeOnlyMoveFlags.aiPawnEEnPassantEligible,
        ai_pawn_f_en_passant_eligible:
          newOneTimeOnlyMoveFlags.aiPawnFEnPassantEligible,
        ai_pawn_g_en_passant_eligible:
          newOneTimeOnlyMoveFlags.aiPawnGEnPassantEligible,
        ai_pawn_h_en_passant_eligible:
          newOneTimeOnlyMoveFlags.aiPawnHEnPassantEligible,
      });
    } catch (error) {
      console.log("Database error: " + JSON.stringify(error)); // TODO better error
      throw error;
    }
  }
};

export default enPassantCheckAndDbUpdate;
