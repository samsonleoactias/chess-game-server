import { afterAll, beforeAll, test, expect } from "@jest/globals";
import NewGameController from "../../src/controllers/NewGameController/NewGameController";
import { PostgreSqlContainer } from "@testcontainers/postgresql";
import knex, { Knex } from "knex";
import { Color } from "../../src/types";
import setup from "../db/setup";
import teardown from "../db/teardown";

let postgresClient: Knex;

const humanPlayerId = "00000000-0000-0000-0000-000000000000";

beforeAll(async () => {
  const postgresContainer = await new PostgreSqlContainer().start();

  postgresClient = knex({
    client: "pg",
    connection: postgresContainer.getConnectionUri(),
  });

  await setup(postgresClient);

  await postgresClient("human_player").insert({
    human_player_id: humanPlayerId,
  });
}, 60000);

afterAll(async () => {
  await teardown(postgresClient);
  await postgresClient.destroy();
}, 60000);

test("NewGameController return PieceLocations from NewGameGeneratorController", async () => {
  const newGameResult = await NewGameController({
    humanPlayerId,
    db: postgresClient,
  });

  const humanColor = newGameResult.humanColor;
  const aiColor = humanColor === Color.WHITE ? Color.BLACK : Color.WHITE;

  expect(newGameResult).toEqual({
    humanColor,
    aiColor,
    humanPawnA: { row: 6, column: 0, captured: false },
    humanPawnB: { row: 6, column: 1, captured: false },
    humanPawnC: { row: 6, column: 2, captured: false },
    humanPawnD: { row: 6, column: 3, captured: false },
    humanPawnE: { row: 6, column: 4, captured: false },
    humanPawnF: { row: 6, column: 5, captured: false },
    humanPawnG: { row: 6, column: 6, captured: false },
    humanPawnH: { row: 6, column: 7, captured: false },
    humanRookA: { row: 7, column: 0, captured: false },
    humanRookB: { row: 7, column: 7, captured: false },
    humanKnightA: { row: 7, column: 1, captured: false },
    humanKnightB: { row: 7, column: 6, captured: false },
    humanBishopA: { row: 7, column: 2, captured: false },
    humanBishopB: { row: 7, column: 5, captured: false },
    humanQueen: {
      row: 7,
      column: humanColor === Color.BLACK ? 4 : 3,
      captured: false,
    },
    humanKing: {
      row: 7,
      column: humanColor === Color.BLACK ? 3 : 4,
      captured: false,
    },
    aiPawnA: { row: 1, column: 0, captured: false },
    aiPawnB: { row: 1, column: 1, captured: false },
    aiPawnC: { row: 1, column: 2, captured: false },
    aiPawnD: { row: 1, column: 3, captured: false },
    aiPawnE: { row: 1, column: 4, captured: false },
    aiPawnF: { row: 1, column: 5, captured: false },
    aiPawnG: { row: 1, column: 6, captured: false },
    aiPawnH: { row: 1, column: 7, captured: false },
    aiRookA: { row: 0, column: 0, captured: false },
    aiRookB: { row: 0, column: 7, captured: false },
    aiKnightA: { row: 0, column: 1, captured: false },
    aiKnightB: { row: 0, column: 6, captured: false },
    aiBishopA: { row: 0, column: 2, captured: false },
    aiBishopB: { row: 0, column: 5, captured: false },
    aiQueen: {
      row: 0,
      column: aiColor === Color.BLACK ? 4 : 3,
      captured: false,
    },
    aiKing: {
      row: 0,
      column: aiColor === Color.BLACK ? 3 : 4,
      captured: false,
    },
    matrix: [
      [true, true, true, true, true, true, true, true],
      [true, true, true, true, true, true, true, true],
      [false, false, false, false, false, false, false, false],
      [false, false, false, false, false, false, false, false],
      [false, false, false, false, false, false, false, false],
      [false, false, false, false, false, false, false, false],
      [true, true, true, true, true, true, true, true],
      [true, true, true, true, true, true, true, true],
    ],
  });
});

// do not directly test DB for now
// test("NewGameController stores new game data in DB correctly", async () => {
//   const newGameResult = await NewGameController({
//     humanPlayerId,
//     db: postgresClient,
//   });

//   const humanColor = newGameResult.humanColor;
//   const aiColor = humanColor === Color.WHITE ? Color.BLACK : Color.WHITE;

//   const game = await postgresClient("game")
//     .where("human_player_id", humanPlayerId)
//     .first();

//   expect(game).toEqual({
//     game_id: game.game_id,
//     created_at: game.created_at,
//     human_player_id: humanPlayerId,
//     human_player_color: humanColor,
//     ai_player_color: aiColor,
//   });

//   const pieceLocations = await postgresClient("piece_locations")
//     .where("game_id", game.game_id)
//     .first();

//   expect(pieceLocations).toEqual({
//     piece_locations_id: pieceLocations.piece_locations_id,
//     game_id: game.game_id,
//     human_bishop_a_captured: false,
//     human_bishop_a_column: 2,
//     human_bishop_a_row: 7,
//     human_bishop_b_captured: false,
//     human_bishop_b_column: 5,
//     human_bishop_b_row: 7,
//     human_king_captured: false,
//     human_king_column: humanColor === Color.BLACK ? 3 : 4,
//     human_king_row: 7,
//     human_knight_a_captured: false,
//     human_knight_a_column: 1,
//     human_knight_a_row: 7,
//     human_knight_b_captured: false,
//     human_knight_b_column: 6,
//     human_knight_b_row: 7,
//     human_pawn_a_captured: false,
//     human_pawn_a_column: 0,
//     human_pawn_a_row: 6,
//     human_pawn_b_captured: false,
//     human_pawn_b_column: 1,
//     human_pawn_b_row: 6,
//     human_pawn_c_captured: false,
//     human_pawn_c_column: 2,
//     human_pawn_c_row: 6,
//     human_pawn_d_captured: false,
//     human_pawn_d_column: 3,
//     human_pawn_d_row: 6,
//     human_pawn_e_captured: false,
//     human_pawn_e_column: 4,
//     human_pawn_e_row: 6,
//     human_pawn_f_captured: false,
//     human_pawn_f_column: 5,
//     human_pawn_f_row: 6,
//     human_pawn_g_captured: false,
//     human_pawn_g_column: 6,
//     human_pawn_g_row: 6,
//     human_pawn_h_captured: false,
//     human_pawn_h_column: 7,
//     human_pawn_h_row: 6,
//     human_queen_captured: false,
//     human_queen_column: humanColor === Color.BLACK ? 4 : 3,
//     human_queen_row: 7,
//     human_rook_a_captured: false,
//     human_rook_a_column: 0,
//     human_rook_a_row: 0,
//     human_rook_b_captured: false,
//     human_rook_b_column: 7,
//     human_rook_b_row: 7,
//     ai_bishop_a_captured: false,
//     ai_bishop_a_column: 2,
//     ai_bishop_a_row: 0,
//     ai_bishop_b_captured: false,
//     ai_bishop_b_column: 5,
//     ai_bishop_b_row: 0,
//     ai_king_captured: false,
//     ai_king_column: aiColor === Color.BLACK ? 3 : 4,
//     ai_king_row: 0,
//     ai_knight_a_captured: false,
//     ai_knight_a_column: 1,
//     ai_knight_a_row: 0,
//     ai_knight_b_captured: false,
//     ai_knight_b_column: 6,
//     ai_knight_b_row: 0,
//     ai_pawn_a_captured: false,
//     ai_pawn_a_column: 0,
//     ai_pawn_a_row: 1,
//     ai_pawn_b_captured: false,
//     ai_pawn_b_column: 1,
//     ai_pawn_b_row: 1,
//     ai_pawn_c_captured: false,
//     ai_pawn_c_column: 2,
//     ai_pawn_c_row: 1,
//     ai_pawn_d_captured: false,
//     ai_pawn_d_column: 3,
//     ai_pawn_d_row: 1,
//     ai_pawn_e_captured: false,
//     ai_pawn_e_column: 4,
//     ai_pawn_e_row: 1,
//     ai_pawn_f_captured: false,
//     ai_pawn_f_column: 5,
//     ai_pawn_f_row: 1,
//     ai_pawn_g_captured: false,
//     ai_pawn_g_column: 6,
//     ai_pawn_g_row: 1,
//     ai_pawn_h_captured: false,
//     ai_pawn_h_column: 7,
//     ai_pawn_h_row: 1,
//     ai_queen_captured: false,
//     ai_queen_column: aiColor === Color.BLACK ? 4 : 3,
//     ai_queen_row: 0,
//     ai_rook_a_captured: false,
//     ai_rook_a_column: 0,
//     ai_rook_a_row: 0,
//     ai_rook_b_captured: false,
//     ai_rook_b_column: 7,
//     ai_rook_b_row: 0,
//   });

//   expect(await postgresClient("one_time_only_move_flags").first()).toEqual({
//     game_id: game.game_id,
//     human_pawn_a_initial_move_eligible: true,
//     human_pawn_b_initial_move_eligible: true,
//     human_pawn_c_initial_move_eligible: true,
//     human_pawn_d_initial_move_eligible: true,
//     human_pawn_e_initial_move_eligible: true,
//     human_pawn_f_initial_move_eligible: true,
//     human_pawn_g_initial_move_eligible: true,
//     human_pawn_h_initial_move_eligible: true,
//     ai_pawn_a_initial_move_eligible: true,
//     ai_pawn_b_initial_move_eligible: true,
//     ai_pawn_c_initial_move_eligible: true,
//     ai_pawn_d_initial_move_eligible: true,
//     ai_pawn_e_initial_move_eligible: true,
//     ai_pawn_f_initial_move_eligible: true,
//     ai_pawn_g_initial_move_eligible: true,
//     ai_pawn_h_initial_move_eligible: true,
//     human_castle_rook_a_eligible: true,
//     human_castle_rook_b_eligible: true,
//     ai_castle_rook_a_eligible: true,
//     ai_castle_rook_b_eligible: true,
//   });
