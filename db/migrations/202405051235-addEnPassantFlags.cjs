module.exports = {
  up: async function () {
    if (!process.env.DATABASE_URL)
      require("dotenv").config({ path: "../../.env" });

    const db = require("knex")({
      client: "pg",
      connection: {
        connectionString: process.env.DATABASE_URL,
        host: process.env.POSTGRES_HOST,
        port: process.env.POSTGRES_PORT,
        user: process.env.POSTGRES_USER,
        password: process.env.POSTGRES_PASSWORD,
        database: process.env.POSTGRES_DATABASE,
        //ssl: { rejectUnauthorized: false },
      },
    });
    await db.schema.alterTable("one_time_only_move_flags", (table) => {
      table.boolean("human_pawn_a_en_passant_eligible").defaultTo(false);
      table.boolean("human_pawn_b_en_passant_eligible").defaultTo(false);
      table.boolean("human_pawn_c_en_passant_eligible").defaultTo(false);
      table.boolean("human_pawn_d_en_passant_eligible").defaultTo(false);
      table.boolean("human_pawn_e_en_passant_eligible").defaultTo(false);
      table.boolean("human_pawn_f_en_passant_eligible").defaultTo(false);
      table.boolean("human_pawn_g_en_passant_eligible").defaultTo(false);
      table.boolean("human_pawn_h_en_passant_eligible").defaultTo(false);
      table.boolean("ai_pawn_a_en_passant_eligible").defaultTo(false);
      table.boolean("ai_pawn_b_en_passant_eligible").defaultTo(false);
      table.boolean("ai_pawn_c_en_passant_eligible").defaultTo(false);
      table.boolean("ai_pawn_d_en_passant_eligible").defaultTo(false);
      table.boolean("ai_pawn_e_en_passant_eligible").defaultTo(false);
      table.boolean("ai_pawn_f_en_passant_eligible").defaultTo(false);
      table.boolean("ai_pawn_g_en_passant_eligible").defaultTo(false);
      table.boolean("ai_pawn_h_en_passant_eligible").defaultTo(false);
    });
  },
  down: async function (db) {
    await db.schema.alterTable("one_time_only_move_flags", (table) => {
      table.dropColumn("human_pawn_a_en_passant_eligible");
      table.dropColumn("human_pawn_b_en_passant_eligible");
      table.dropColumn("human_pawn_c_en_passant_eligible");
      table.dropColumn("human_pawn_d_en_passant_eligible");
      table.dropColumn("human_pawn_e_en_passant_eligible");
      table.dropColumn("human_pawn_f_en_passant_eligible");
      table.dropColumn("human_pawn_g_en_passant_eligible");
      table.dropColumn("human_pawn_h_en_passant_eligible");
      table.dropColumn("ai_pawn_a_en_passant_eligible");
      table.dropColumn("ai_pawn_b_en_passant_eligible");
      table.dropColumn("ai_pawn_c_en_passant_eligible");
      table.dropColumn("ai_pawn_d_en_passant_eligible");
      table.dropColumn("ai_pawn_e_en_passant_eligible");
      table.dropColumn("ai_pawn_f_en_passant_eligible");
      table.dropColumn("ai_pawn_g_en_passant_eligible");
      table.dropColumn("ai_pawn_h_en_passant_eligible");
    });
  },
};
