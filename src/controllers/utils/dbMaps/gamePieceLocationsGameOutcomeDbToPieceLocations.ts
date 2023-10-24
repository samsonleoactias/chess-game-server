import {
  PieceLocations,
  GamePieceLocationsGameOutcomeDb,
} from "../../../types";
import generateGameBoardMatrix from "./helpers/generateGameBoardMatrix";

const gamePieceLocationsGameOutcomeDbToPieceLocations = (
  pieceLocationsDb: GamePieceLocationsGameOutcomeDb
) => {
  const pieceLocations: PieceLocations = {
    humanPawnA: {
      row: pieceLocationsDb.human_pawn_a_row,
      column: pieceLocationsDb.human_pawn_a_column,
      captured: pieceLocationsDb.human_pawn_a_captured,
    },
    humanPawnB: {
      row: pieceLocationsDb.human_pawn_b_row,
      column: pieceLocationsDb.human_pawn_b_column,
      captured: pieceLocationsDb.human_pawn_b_captured,
    },
    humanPawnC: {
      row: pieceLocationsDb.human_pawn_c_row,
      column: pieceLocationsDb.human_pawn_c_column,
      captured: pieceLocationsDb.human_pawn_c_captured,
    },
    humanPawnD: {
      row: pieceLocationsDb.human_pawn_d_row,
      column: pieceLocationsDb.human_pawn_d_column,
      captured: pieceLocationsDb.human_pawn_d_captured,
    },
    humanPawnE: {
      row: pieceLocationsDb.human_pawn_e_row,
      column: pieceLocationsDb.human_pawn_e_column,
      captured: pieceLocationsDb.human_pawn_e_captured,
    },
    humanPawnF: {
      row: pieceLocationsDb.human_pawn_f_row,
      column: pieceLocationsDb.human_pawn_f_column,
      captured: pieceLocationsDb.human_pawn_f_captured,
    },
    humanPawnG: {
      row: pieceLocationsDb.human_pawn_g_row,
      column: pieceLocationsDb.human_pawn_g_column,
      captured: pieceLocationsDb.human_pawn_g_captured,
    },
    humanPawnH: {
      row: pieceLocationsDb.human_pawn_h_row,
      column: pieceLocationsDb.human_pawn_h_column,
      captured: pieceLocationsDb.human_pawn_h_captured,
    },
    humanRookA: {
      row: pieceLocationsDb.human_rook_a_row,
      column: pieceLocationsDb.human_rook_a_column,
      captured: pieceLocationsDb.human_rook_a_captured,
    },
    humanRookB: {
      row: pieceLocationsDb.human_rook_b_row,
      column: pieceLocationsDb.human_rook_b_column,
      captured: pieceLocationsDb.human_rook_b_captured,
    },
    humanKnightA: {
      row: pieceLocationsDb.human_knight_a_row,
      column: pieceLocationsDb.human_knight_a_column,
      captured: pieceLocationsDb.human_knight_a_captured,
    },
    humanKnightB: {
      row: pieceLocationsDb.human_knight_b_row,
      column: pieceLocationsDb.human_knight_b_column,
      captured: pieceLocationsDb.human_knight_b_captured,
    },
    humanBishopA: {
      row: pieceLocationsDb.human_bishop_a_row,
      column: pieceLocationsDb.human_bishop_a_column,
      captured: pieceLocationsDb.human_bishop_a_captured,
    },
    humanBishopB: {
      row: pieceLocationsDb.human_bishop_b_row,
      column: pieceLocationsDb.human_bishop_b_column,
      captured: pieceLocationsDb.human_bishop_b_captured,
    },
    humanQueen: {
      row: pieceLocationsDb.human_queen_row,
      column: pieceLocationsDb.human_queen_column,
      captured: pieceLocationsDb.human_queen_captured,
    },
    humanKing: {
      row: pieceLocationsDb.human_king_row,
      column: pieceLocationsDb.human_king_column,
      captured: pieceLocationsDb.human_king_captured,
    },
    aiPawnA: {
      row: pieceLocationsDb.ai_pawn_a_row,
      column: pieceLocationsDb.ai_pawn_a_column,
      captured: pieceLocationsDb.ai_pawn_a_captured,
    },
    aiPawnB: {
      row: pieceLocationsDb.ai_pawn_b_row,
      column: pieceLocationsDb.ai_pawn_b_column,
      captured: pieceLocationsDb.ai_pawn_b_captured,
    },
    aiPawnC: {
      row: pieceLocationsDb.ai_pawn_c_row,
      column: pieceLocationsDb.ai_pawn_c_column,
      captured: pieceLocationsDb.ai_pawn_c_captured,
    },
    aiPawnD: {
      row: pieceLocationsDb.ai_pawn_d_row,
      column: pieceLocationsDb.ai_pawn_d_column,
      captured: pieceLocationsDb.ai_pawn_d_captured,
    },
    aiPawnE: {
      row: pieceLocationsDb.ai_pawn_e_row,
      column: pieceLocationsDb.ai_pawn_e_column,
      captured: pieceLocationsDb.ai_pawn_e_captured,
    },
    aiPawnF: {
      row: pieceLocationsDb.ai_pawn_f_row,
      column: pieceLocationsDb.ai_pawn_f_column,
      captured: pieceLocationsDb.ai_pawn_f_captured,
    },
    aiPawnG: {
      row: pieceLocationsDb.ai_pawn_g_row,
      column: pieceLocationsDb.ai_pawn_g_column,
      captured: pieceLocationsDb.ai_pawn_g_captured,
    },
    aiPawnH: {
      row: pieceLocationsDb.ai_pawn_h_row,
      column: pieceLocationsDb.ai_pawn_h_column,
      captured: pieceLocationsDb.ai_pawn_h_captured,
    },
    aiRookA: {
      row: pieceLocationsDb.ai_rook_a_row,
      column: pieceLocationsDb.ai_rook_a_column,
      captured: pieceLocationsDb.ai_rook_a_captured,
    },
    aiRookB: {
      row: pieceLocationsDb.ai_rook_b_row,
      column: pieceLocationsDb.ai_rook_b_column,
      captured: pieceLocationsDb.ai_rook_b_captured,
    },
    aiKnightA: {
      row: pieceLocationsDb.ai_knight_a_row,
      column: pieceLocationsDb.ai_knight_a_column,
      captured: pieceLocationsDb.ai_knight_a_captured,
    },
    aiKnightB: {
      row: pieceLocationsDb.ai_knight_b_row,
      column: pieceLocationsDb.ai_knight_b_column,
      captured: pieceLocationsDb.ai_knight_b_captured,
    },
    aiBishopA: {
      row: pieceLocationsDb.ai_bishop_a_row,
      column: pieceLocationsDb.ai_bishop_a_column,
      captured: pieceLocationsDb.ai_bishop_a_captured,
    },
    aiBishopB: {
      row: pieceLocationsDb.ai_bishop_b_row,
      column: pieceLocationsDb.ai_bishop_b_column,
      captured: pieceLocationsDb.ai_bishop_b_captured,
    },
    aiQueen: {
      row: pieceLocationsDb.ai_queen_row,
      column: pieceLocationsDb.ai_queen_column,
      captured: pieceLocationsDb.ai_queen_captured,
    },
    aiKing: {
      row: pieceLocationsDb.ai_king_row,
      column: pieceLocationsDb.ai_king_column,
      captured: pieceLocationsDb.ai_king_captured,
    },
    matrix: [],
  };

  pieceLocations.matrix = generateGameBoardMatrix(pieceLocations);

  return pieceLocations;
};

export default gamePieceLocationsGameOutcomeDbToPieceLocations;
