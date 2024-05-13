import { OneTimeOnlyMoveFlags } from "../../../types/index.js";

const mapToOneTimeOnlyMoveFlags = (object: Object): OneTimeOnlyMoveFlags => {
  const oneTimeOnlyMoveFlags: OneTimeOnlyMoveFlags = {
    humanPawnAInitialMoveEligible: (<any>object)[
      "human_pawn_a_initial_move_eligible"
    ],
    humanPawnBInitialMoveEligible: (<any>object)[
      "human_pawn_b_initial_move_eligible"
    ],
    humanPawnCInitialMoveEligible: (<any>object)[
      "human_pawn_c_initial_move_eligible"
    ],
    humanPawnDInitialMoveEligible: (<any>object)[
      "human_pawn_d_initial_move_eligible"
    ],
    humanPawnEInitialMoveEligible: (<any>object)[
      "human_pawn_e_initial_move_eligible"
    ],
    humanPawnFInitialMoveEligible: (<any>object)[
      "human_pawn_f_initial_move_eligible"
    ],
    humanPawnGInitialMoveEligible: (<any>object)[
      "human_pawn_g_initial_move_eligible"
    ],
    humanPawnHInitialMoveEligible: (<any>object)[
      "human_pawn_h_initial_move_eligible"
    ],
    aiPawnAInitialMoveEligible: (<any>object)[
      "ai_pawn_a_initial_move_eligible"
    ],
    aiPawnBInitialMoveEligible: (<any>object)[
      "ai_pawn_b_initial_move_eligible"
    ],
    aiPawnCInitialMoveEligible: (<any>object)[
      "ai_pawn_c_initial_move_eligible"
    ],
    aiPawnDInitialMoveEligible: (<any>object)[
      "ai_pawn_d_initial_move_eligible"
    ],
    aiPawnEInitialMoveEligible: (<any>object)[
      "ai_pawn_e_initial_move_eligible"
    ],
    aiPawnFInitialMoveEligible: (<any>object)[
      "ai_pawn_f_initial_move_eligible"
    ],
    aiPawnGInitialMoveEligible: (<any>object)[
      "ai_pawn_g_initial_move_eligible"
    ],
    aiPawnHInitialMoveEligible: (<any>object)[
      "ai_pawn_h_initial_move_eligible"
    ],
    humanCastleRookAEligible: (<any>object)["human_castle_rook_a_eligible"],
    humanCastleRookBEligible: (<any>object)["human_castle_rook_b_eligible"],
    aiCastleRookAEligible: (<any>object)["human_castle_rook_a_eligible"],
    aiCastleRookBEligible: (<any>object)["human_castle_rook_b_eligible"],
    humanPawnAEnPassantEligible: (<any>object)[
      "human_pawn_a_en_passant_eligible"
    ],
    humanPawnBEnPassantEligible: (<any>object)[
      "human_pawn_b_en_passant_eligible"
    ],
    humanPawnCEnPassantEligible: (<any>object)[
      "human_pawn_c_en_passant_eligible"
    ],
    humanPawnDEnPassantEligible: (<any>object)[
      "human_pawn_d_en_passant_eligible"
    ],
    humanPawnEEnPassantEligible: (<any>object)[
      "human_pawn_e_en_passant_eligible"
    ],
    humanPawnFEnPassantEligible: (<any>object)[
      "human_pawn_f_en_passant_eligible"
    ],
    humanPawnGEnPassantEligible: (<any>object)[
      "human_pawn_g_en_passant_eligible"
    ],
    humanPawnHEnPassantEligible: (<any>object)[
      "human_pawn_h_en_passant_eligible"
    ],
    aiPawnAEnPassantEligible: (<any>object)["ai_pawn_a_en_passant_eligible"],
    aiPawnBEnPassantEligible: (<any>object)["ai_pawn_b_en_passant_eligible"],
    aiPawnCEnPassantEligible: (<any>object)["ai_pawn_c_en_passant_eligible"],
    aiPawnDEnPassantEligible: (<any>object)["ai_pawn_d_en_passant_eligible"],
    aiPawnEEnPassantEligible: (<any>object)["ai_pawn_e_en_passant_eligible"],
    aiPawnFEnPassantEligible: (<any>object)["ai_pawn_f_en_passant_eligible"],
    aiPawnGEnPassantEligible: (<any>object)["ai_pawn_g_en_passant_eligible"],
    aiPawnHEnPassantEligible: (<any>object)["ai_pawn_h_en_passant_eligible"],
  };

  return oneTimeOnlyMoveFlags;
};

export default mapToOneTimeOnlyMoveFlags;
