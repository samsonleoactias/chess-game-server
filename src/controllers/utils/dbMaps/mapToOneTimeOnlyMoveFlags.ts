import { OneTimeOnlyMoveFlags } from "../../../types";

const mapToOneTimeOnlyMoveFlags = (object: Object) => {
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
  };

  return oneTimeOnlyMoveFlags;
};

export default mapToOneTimeOnlyMoveFlags;
