import { PieceLocations } from "../../../types";
import generateGameBoardMatrix from "./helpers/generateGameBoardMatrix";

const dbResultToPieceLocations = (dbResult: any): PieceLocations => {
  const pieceLocations: PieceLocations = {
    humanPawnA: {
      row: dbResult.human_pawn_a_row,
      column: dbResult.human_pawn_a_column,
      captured: dbResult.human_pawn_a_captured,
    },
    humanPawnB: {
      row: dbResult.human_pawn_b_row,
      column: dbResult.human_pawn_b_column,
      captured: dbResult.human_pawn_b_captured,
    },
    humanPawnC: {
      row: dbResult.human_pawn_c_row,
      column: dbResult.human_pawn_c_column,
      captured: dbResult.human_pawn_c_captured,
    },
    humanPawnD: {
      row: dbResult.human_pawn_d_row,
      column: dbResult.human_pawn_d_column,
      captured: dbResult.human_pawn_d_captured,
    },
    humanPawnE: {
      row: dbResult.human_pawn_e_row,
      column: dbResult.human_pawn_e_column,
      captured: dbResult.human_pawn_e_captured,
    },
    humanPawnF: {
      row: dbResult.human_pawn_f_row,
      column: dbResult.human_pawn_f_column,
      captured: dbResult.human_pawn_f_captured,
    },
    humanPawnG: {
      row: dbResult.human_pawn_g_row,
      column: dbResult.human_pawn_g_column,
      captured: dbResult.human_pawn_g_captured,
    },
    humanPawnH: {
      row: dbResult.human_pawn_h_row,
      column: dbResult.human_pawn_h_column,
      captured: dbResult.human_pawn_h_captured,
    },
    humanRookA: {
      row: dbResult.human_rook_a_row,
      column: dbResult.human_rook_a_column,
      captured: dbResult.human_rook_a_captured,
    },
    humanRookB: {
      row: dbResult.human_rook_b_row,
      column: dbResult.human_rook_b_column,
      captured: dbResult.human_rook_b_captured,
    },
    humanKnightA: {
      row: dbResult.human_knight_a_row,
      column: dbResult.human_knight_a_column,
      captured: dbResult.human_knight_a_captured,
    },
    humanKnightB: {
      row: dbResult.human_knight_b_row,
      column: dbResult.human_knight_b_column,
      captured: dbResult.human_knight_b_captured,
    },
    humanBishopA: {
      row: dbResult.human_bishop_a_row,
      column: dbResult.human_bishop_a_column,
      captured: dbResult.human_bishop_a_captured,
    },
    humanBishopB: {
      row: dbResult.human_bishop_b_row,
      column: dbResult.human_bishop_b_column,
      captured: dbResult.human_bishop_b_captured,
    },
    humanQueen: {
      row: dbResult.human_queen_row,
      column: dbResult.human_queen_column,
      captured: dbResult.human_queen_captured,
    },
    humanKing: {
      row: dbResult.human_king_row,
      column: dbResult.human_king_column,
      captured: dbResult.human_king_captured,
    },
    aiPawnA: {
      row: dbResult.ai_pawn_a_row,
      column: dbResult.ai_pawn_a_column,
      captured: dbResult.ai_pawn_a_captured,
    },
    aiPawnB: {
      row: dbResult.ai_pawn_b_row,
      column: dbResult.ai_pawn_b_column,
      captured: dbResult.ai_pawn_b_captured,
    },
    aiPawnC: {
      row: dbResult.ai_pawn_c_row,
      column: dbResult.ai_pawn_c_column,
      captured: dbResult.ai_pawn_c_captured,
    },
    aiPawnD: {
      row: dbResult.ai_pawn_d_row,
      column: dbResult.ai_pawn_d_column,
      captured: dbResult.ai_pawn_d_captured,
    },
    aiPawnE: {
      row: dbResult.ai_pawn_e_row,
      column: dbResult.ai_pawn_e_column,
      captured: dbResult.ai_pawn_e_captured,
    },
    aiPawnF: {
      row: dbResult.ai_pawn_f_row,
      column: dbResult.ai_pawn_f_column,
      captured: dbResult.ai_pawn_f_captured,
    },
    aiPawnG: {
      row: dbResult.ai_pawn_g_row,
      column: dbResult.ai_pawn_g_column,
      captured: dbResult.ai_pawn_g_captured,
    },
    aiPawnH: {
      row: dbResult.ai_pawn_h_row,
      column: dbResult.ai_pawn_h_column,
      captured: dbResult.ai_pawn_h_captured,
    },
    aiRookA: {
      row: dbResult.ai_rook_a_row,
      column: dbResult.ai_rook_a_column,
      captured: dbResult.ai_rook_a_captured,
    },
    aiRookB: {
      row: dbResult.ai_rook_b_row,
      column: dbResult.ai_rook_b_column,
      captured: dbResult.ai_rook_b_captured,
    },
    aiKnightA: {
      row: dbResult.ai_knight_a_row,
      column: dbResult.ai_knight_a_column,
      captured: dbResult.ai_knight_a_captured,
    },
    aiKnightB: {
      row: dbResult.ai_knight_b_row,
      column: dbResult.ai_knight_b_column,
      captured: dbResult.ai_knight_b_captured,
    },
    aiBishopA: {
      row: dbResult.ai_bishop_a_row,
      column: dbResult.ai_bishop_a_column,
      captured: dbResult.ai_bishop_a_captured,
    },
    aiBishopB: {
      row: dbResult.ai_bishop_b_row,
      column: dbResult.ai_bishop_b_column,
      captured: dbResult.ai_bishop_b_captured,
    },
    aiQueen: {
      row: dbResult.ai_queen_row,
      column: dbResult.ai_queen_column,
      captured: dbResult.ai_queen_captured,
    },
    aiKing: {
      row: dbResult.ai_king_row,
      column: dbResult.ai_king_column,
      captured: dbResult.ai_king_captured,
    },
    matrix: [],
  };

  pieceLocations.matrix = generateGameBoardMatrix(pieceLocations);

  return pieceLocations;
};

export default dbResultToPieceLocations;
