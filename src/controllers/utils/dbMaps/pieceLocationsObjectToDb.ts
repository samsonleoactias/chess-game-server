import { PieceLocations } from "../../../types";

const pieceLocationsObjectToDb = (pieceLocations: PieceLocations): Object => {
  return {
    human_pawn_a_row: pieceLocations.humanPawnA.row,
    human_pawn_a_column: pieceLocations.humanPawnA.column,
    human_pawn_a_captured: pieceLocations.humanPawnA.captured,
    human_pawn_b_row: pieceLocations.humanPawnB.row,
    human_pawn_b_column: pieceLocations.humanPawnB.column,
    human_pawn_b_captured: pieceLocations.humanPawnB.captured,
    human_pawn_c_row: pieceLocations.humanPawnC.row,
    human_pawn_c_column: pieceLocations.humanPawnC.column,
    human_pawn_c_captured: pieceLocations.humanPawnC.captured,
    human_pawn_d_row: pieceLocations.humanPawnD.row,
    human_pawn_d_column: pieceLocations.humanPawnD.column,
    human_pawn_d_captured: pieceLocations.humanPawnD.captured,
    human_pawn_e_row: pieceLocations.humanPawnE.row,
    human_pawn_e_column: pieceLocations.humanPawnE.column,
    human_pawn_e_captured: pieceLocations.humanPawnE.captured,
    human_pawn_f_row: pieceLocations.humanPawnF.row,
    human_pawn_f_column: pieceLocations.humanPawnF.column,
    human_pawn_f_captured: pieceLocations.humanPawnF.captured,
    human_pawn_g_row: pieceLocations.humanPawnG.row,
    human_pawn_g_column: pieceLocations.humanPawnG.column,
    human_pawn_g_captured: pieceLocations.humanPawnG.captured,
    human_pawn_h_row: pieceLocations.humanPawnH.row,
    human_pawn_h_column: pieceLocations.humanPawnH.column,
    human_pawn_h_captured: pieceLocations.humanPawnH.captured,
    human_rook_a_row: pieceLocations.humanRookA.column,
    human_rook_a_column: pieceLocations.humanRookA.column,
    human_rook_a_captured: pieceLocations.humanRookA.captured,
    human_rook_b_row: pieceLocations.humanRookB.row,
    human_rook_b_column: pieceLocations.humanRookB.column,
    human_rook_b_captured: pieceLocations.humanRookB.captured,
    human_knight_a_row: pieceLocations.humanKnightA.row,
    human_knight_a_column: pieceLocations.humanKnightA.column,
    human_knight_a_captured: pieceLocations.humanKnightA.captured,
    human_knight_b_row: pieceLocations.humanKnightB.row,
    human_knight_b_column: pieceLocations.humanKnightB.column,
    human_knight_b_captured: pieceLocations.humanKnightB.captured,
    human_bishop_a_row: pieceLocations.humanBishopA.row,
    human_bishop_a_column: pieceLocations.humanBishopA.column,
    human_bishop_a_captured: pieceLocations.humanBishopA.captured,
    human_bishop_b_row: pieceLocations.humanBishopB.row,
    human_bishop_b_column: pieceLocations.humanBishopB.column,
    human_bishop_b_captured: pieceLocations.humanBishopB.captured,
    human_queen_row: pieceLocations.humanQueen.row,
    human_queen_column: pieceLocations.humanQueen.column,
    human_queen_captured: pieceLocations.humanQueen.captured,
    human_king_row: pieceLocations.humanKing.row,
    human_king_column: pieceLocations.humanKing.column,
    human_king_captured: pieceLocations.humanKing.captured,
    ai_pawn_a_row: pieceLocations.aiPawnA.row,
    ai_pawn_a_column: pieceLocations.aiPawnA.column,
    ai_pawn_a_captured: pieceLocations.aiPawnA.captured,
    ai_pawn_b_row: pieceLocations.aiPawnB.row,
    ai_pawn_b_column: pieceLocations.aiPawnB.column,
    ai_pawn_b_captured: pieceLocations.aiPawnB.captured,
    ai_pawn_c_row: pieceLocations.aiPawnC.row,
    ai_pawn_c_column: pieceLocations.aiPawnC.column,
    ai_pawn_c_captured: pieceLocations.aiPawnC.captured,
    ai_pawn_d_row: pieceLocations.aiPawnD.row,
    ai_pawn_d_column: pieceLocations.aiPawnD.column,
    ai_pawn_d_captured: pieceLocations.aiPawnD.captured,
    ai_pawn_e_row: pieceLocations.aiPawnE.row,
    ai_pawn_e_column: pieceLocations.aiPawnE.column,
    ai_pawn_e_captured: pieceLocations.aiPawnE.captured,
    ai_pawn_f_row: pieceLocations.aiPawnF.row,
    ai_pawn_f_column: pieceLocations.aiPawnF.column,
    ai_pawn_f_captured: pieceLocations.aiPawnF.captured,
    ai_pawn_g_row: pieceLocations.aiPawnG.row,
    ai_pawn_g_column: pieceLocations.aiPawnG.column,
    ai_pawn_g_captured: pieceLocations.aiPawnG.captured,
    ai_pawn_h_row: pieceLocations.aiPawnH.row,
    ai_pawn_h_column: pieceLocations.aiPawnH.column,
    ai_pawn_h_captured: pieceLocations.aiPawnH.captured,
    ai_rook_a_row: pieceLocations.aiRookA.column,
    ai_rook_a_column: pieceLocations.aiRookA.column,
    ai_rook_a_captured: pieceLocations.aiRookA.captured,
    ai_rook_b_row: pieceLocations.aiRookB.row,
    ai_rook_b_column: pieceLocations.aiRookB.column,
    ai_rook_b_captured: pieceLocations.aiRookB.captured,
    ai_knight_a_row: pieceLocations.aiKnightA.row,
    ai_knight_a_column: pieceLocations.aiKnightA.column,
    ai_knight_a_captured: pieceLocations.aiKnightA.captured,
    ai_knight_b_row: pieceLocations.aiKnightB.row,
    ai_knight_b_column: pieceLocations.aiKnightB.column,
    ai_knight_b_captured: pieceLocations.aiKnightB.captured,
    ai_bishop_a_row: pieceLocations.aiBishopA.row,
    ai_bishop_a_column: pieceLocations.aiBishopA.column,
    ai_bishop_a_captured: pieceLocations.aiBishopA.captured,
    ai_bishop_b_row: pieceLocations.aiBishopB.row,
    ai_bishop_b_column: pieceLocations.aiBishopB.column,
    ai_bishop_b_captured: pieceLocations.aiBishopB.captured,
    ai_queen_row: pieceLocations.aiQueen.row,
    ai_queen_column: pieceLocations.aiQueen.column,
    ai_queen_captured: pieceLocations.aiQueen.captured,
    ai_king_row: pieceLocations.aiKing.row,
    ai_king_column: pieceLocations.aiKing.column,
    ai_king_captured: pieceLocations.aiKing.captured,
  };
};

export default pieceLocationsObjectToDb;
