module.exports = {
  up: async function (db) {
    await db.schema.createTable("one_time_only_move_flags", (table) => {
      table.uuid("game_id").notNull();
      table.foreign("game_id").references("game.game_id");
      table.boolean("human_pawn_a_initial_move_eligible").defaultTo(true);
      table.boolean("human_pawn_b_initial_move_eligible").defaultTo(true);
      table.boolean("human_pawn_c_initial_move_eligible").defaultTo(true);
      table.boolean("human_pawn_d_initial_move_eligible").defaultTo(true);
      table.boolean("human_pawn_e_initial_move_eligible").defaultTo(true);
      table.boolean("human_pawn_f_initial_move_eligible").defaultTo(true);
      table.boolean("human_pawn_g_initial_move_eligible").defaultTo(true);
      table.boolean("human_pawn_h_initial_move_eligible").defaultTo(true);
      table.boolean("ai_pawn_a_initial_move_eligible").defaultTo(true);
      table.boolean("ai_pawn_b_initial_move_eligible").defaultTo(true);
      table.boolean("ai_pawn_c_initial_move_eligible").defaultTo(true);
      table.boolean("ai_pawn_d_initial_move_eligible").defaultTo(true);
      table.boolean("ai_pawn_e_initial_move_eligible").defaultTo(true);
      table.boolean("ai_pawn_f_initial_move_eligible").defaultTo(true);
      table.boolean("ai_pawn_g_initial_move_eligible").defaultTo(true);
      table.boolean("ai_pawn_h_initial_move_eligible").defaultTo(true);
      table.boolean("human_castle_rook_a_eligible").defaultTo(true);
      table.boolean("human_castle_rook_b_eligible").defaultTo(true);
      table.boolean("ai_castle_rook_a_eligible").defaultTo(true);
      table.boolean("ai_castle_rook_b_eligible").defaultTo(true);
    });
  },
  down: async function (db) {
    await db.schema.dropTable("one_time_only_move_flags");
  },
};
