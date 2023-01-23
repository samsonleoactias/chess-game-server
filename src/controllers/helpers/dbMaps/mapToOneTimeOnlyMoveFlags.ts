import { OneTimeOnlyMoveFlags } from "../../../types";

const mapToOneTimeOnlyMoveFlags = (object: Object) => {
  const oneTimeOnlyMoveFlags: OneTimeOnlyMoveFlags = {
    humanPawnAInitialMoveEligible: object["human_pawn_a_initial_move_eligible"],
    humanPawnBInitialMoveEligible: object["human_pawn_b_initial_move_eligible"],
    humanPawnCInitialMoveEligible: object["human_pawn_c_initial_move_eligible"],
    humanPawnDInitialMoveEligible: object["human_pawn_d_initial_move_eligible"],
    humanPawnEInitialMoveEligible: object["human_pawn_e_initial_move_eligible"],
    humanPawnFInitialMoveEligible: object["human_pawn_f_initial_move_eligible"],
    humanPawnGInitialMoveEligible: object["human_pawn_g_initial_move_eligible"],
    humanPawnHInitialMoveEligible: object["human_pawn_h_initial_move_eligible"],
    aiPawnAInitialMoveEligible: object["ai_pawn_a_initial_move_eligible"],
    aiPawnBInitialMoveEligible: object["ai_pawn_b_initial_move_eligible"],
    aiPawnCInitialMoveEligible: object["ai_pawn_c_initial_move_eligible"],
    aiPawnDInitialMoveEligible: object["ai_pawn_d_initial_move_eligible"],
    aiPawnEInitialMoveEligible: object["ai_pawn_e_initial_move_eligible"],
    aiPawnFInitialMoveEligible: object["ai_pawn_f_initial_move_eligible"],
    aiPawnGInitialMoveEligible: object["ai_pawn_g_initial_move_eligible"],
    aiPawnHInitialMoveEligible: object["ai_pawn_h_initial_move_eligible"],
    humanCastleEligible: object["human_castle_eligible"],
    aiCastleEligible: object["ai_castle_eligible"],
  };

  return oneTimeOnlyMoveFlags;
};

export default mapToOneTimeOnlyMoveFlags;
