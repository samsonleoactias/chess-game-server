import { afterAll, beforeAll, test, expect } from "@jest/globals";
import { PostgreSqlContainer } from "@testcontainers/postgresql";
import knex, { Knex } from "knex";
import { Color, PieceLocations, PlayerType } from "../../../src/types";
import setup from "../../db/setup";
import teardown from "../../db/teardown";
import CalculatePossibleMovesController from "../../../src/controllers/CalculatePossibleMovesController/CalculatePossibleMovesController";

let postgresClient: Knex;

const humanPlayerId = "00000000-0000-0000-0000-000000000000";
const humanColor = Color.White;
const aiColor = Color.Black;

beforeAll(async () => {
  try {
    const postgresContainer = await new PostgreSqlContainer().start();

    postgresClient = knex({
      client: "pg",
      connection: postgresContainer.getConnectionUri(),
    });

    await setup(postgresClient);

    await postgresClient("human_player").insert({
      human_player_id: humanPlayerId,
    });
  } catch (e: any) {
    throw new Error(e); // TODO better error
  }
}, 60000);

afterAll(async () => {
  await teardown(postgresClient);
  await postgresClient.destroy();
}, 60000);

test("CalculatePossibleMoves controller returns correct possible moves for human for new game where no pieces have moved yet", async () => {
  const gameId = "00000000-0000-0000-0000-000000000000";

  await postgresClient("game").insert({
    game_id: gameId,
    human_player_id: humanPlayerId,
    human_player_color: humanColor,
    ai_player_color: aiColor,
  });

  await postgresClient("one_time_only_move_flags").insert({
    game_id: gameId,
  });

  const pieceLocations: PieceLocations = {
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
      column: 3,
      captured: false,
    },
    humanKing: {
      row: 7,
      column: 4,
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
      column: 4,
      captured: false,
    },
    aiKing: {
      row: 0,
      column: 3,
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
  };

  expect(
    await CalculatePossibleMovesController({
      pieceLocations,
      gameId,
      db: postgresClient,
      playerType: PlayerType.Human,
    })
  ).toEqual({
    pawnA: [
      { location: { row: 5, column: 0 } },
      { location: { row: 4, column: 0 } },
    ],
    pawnB: [
      { location: { row: 5, column: 1 } },
      { location: { row: 4, column: 1 } },
    ],
    pawnC: [
      { location: { row: 5, column: 2 } },
      { location: { row: 4, column: 2 } },
    ],
    pawnD: [
      { location: { row: 5, column: 3 } },
      { location: { row: 4, column: 3 } },
    ],
    pawnE: [
      { location: { row: 5, column: 4 } },
      { location: { row: 4, column: 4 } },
    ],
    pawnF: [
      { location: { row: 5, column: 5 } },
      { location: { row: 4, column: 5 } },
    ],
    pawnG: [
      { location: { row: 5, column: 6 } },
      { location: { row: 4, column: 6 } },
    ],
    pawnH: [
      { location: { row: 5, column: 7 } },
      { location: { row: 4, column: 7 } },
    ],
    rookA: [],
    rookB: [],
    knightA: [
      { location: { row: 5, column: 2 } },
      { location: { row: 5, column: 0 } },
    ],
    knightB: [
      { location: { row: 5, column: 7 } },
      { location: { row: 5, column: 5 } },
    ],
    bishopA: [],
    bishopB: [],
    queen: [],
    king: [],
  });
});

test("CalculatePossibleMoves controller returns correct possible moves for human for in-progress game", async () => {
  const gameId = "00000000-0000-0000-0000-000000000001";

  await postgresClient("game").insert({
    game_id: gameId,
    human_player_id: humanPlayerId,
    human_player_color: humanColor,
    ai_player_color: aiColor,
  });

  await postgresClient("one_time_only_move_flags").insert({
    game_id: gameId,
    human_pawn_a_initial_move_eligible: false,
    human_pawn_b_initial_move_eligible: false,
    human_pawn_c_initial_move_eligible: false,
    human_pawn_d_initial_move_eligible: false,
    human_pawn_e_initial_move_eligible: false,
    human_pawn_f_initial_move_eligible: false,
    human_pawn_g_initial_move_eligible: false,
    human_pawn_h_initial_move_eligible: false,
    ai_pawn_a_initial_move_eligible: false,
    ai_pawn_b_initial_move_eligible: false,
    ai_pawn_c_initial_move_eligible: false,
    ai_pawn_d_initial_move_eligible: false,
    ai_pawn_e_initial_move_eligible: false,
    ai_pawn_f_initial_move_eligible: false,
    ai_pawn_g_initial_move_eligible: false,
    ai_pawn_h_initial_move_eligible: false,
    human_castle_rook_a_eligible: false,
    human_castle_rook_b_eligible: false,
    ai_castle_rook_a_eligible: true,
    ai_castle_rook_b_eligible: true,
  });

  const pieceLocations: PieceLocations = {
    humanColor,
    aiColor,
    humanPawnA: { row: 6, column: 0, captured: true },
    humanPawnB: { row: 6, column: 1, captured: true },
    humanPawnC: { row: 6, column: 2, captured: true },
    humanPawnD: { row: 4, column: 3, captured: false },
    humanPawnE: { row: 5, column: 4, captured: false },
    humanPawnF: { row: 6, column: 5, captured: true },
    humanPawnG: { row: 4, column: 6, captured: false },
    humanPawnH: { row: 3, column: 7, captured: false },
    humanRookA: { row: 4, column: 0, captured: false },
    humanRookB: { row: 4, column: 7, captured: false },
    humanKnightA: { row: 5, column: 0, captured: false },
    humanKnightB: { row: 7, column: 6, captured: true },
    humanBishopA: { row: 6, column: 1, captured: false },
    humanBishopB: { row: 7, column: 5, captured: true },
    humanQueen: {
      row: 7,
      column: 3,
      captured: true,
    },
    humanKing: {
      row: 7,
      column: 4,
      captured: false,
    },
    aiPawnA: { row: 1, column: 0, captured: true },
    aiPawnB: { row: 1, column: 1, captured: true },
    aiPawnC: { row: 1, column: 2, captured: true },
    aiPawnD: { row: 1, column: 3, captured: true },
    aiPawnE: { row: 1, column: 4, captured: true },
    aiPawnF: { row: 1, column: 5, captured: true },
    aiPawnG: { row: 1, column: 6, captured: true },
    aiPawnH: { row: 1, column: 7, captured: true },
    aiRookA: { row: 0, column: 0, captured: false },
    aiRookB: { row: 0, column: 7, captured: false },
    aiKnightA: { row: 0, column: 1, captured: true },
    aiKnightB: { row: 0, column: 6, captured: true },
    aiBishopA: { row: 2, column: 4, captured: false },
    aiBishopB: { row: 2, column: 7, captured: false },
    aiQueen: {
      row: 4,
      column: 4,
      captured: false,
    },
    aiKing: {
      row: 0,
      column: 3,
      captured: false,
    },
    matrix: [
      [true, false, false, true, false, false, false, true],
      [false, false, false, false, false, false, false, false],
      [false, false, false, false, true, false, false, true],
      [false, false, false, false, false, false, false, true],
      [true, false, false, true, true, false, true, true],
      [true, false, false, false, true, false, false, false],
      [false, true, false, false, false, false, false, false],
      [false, false, false, false, true, false, false, false],
    ],
  };
  console.log(
    JSON.stringify(
      await CalculatePossibleMovesController({
        pieceLocations,
        gameId,
        db: postgresClient,
        playerType: PlayerType.Human,
      })
    )
  );
  expect(
    await CalculatePossibleMovesController({
      pieceLocations,
      gameId,
      db: postgresClient,
      playerType: PlayerType.Human,
    })
  ).toEqual({
    pawnA: [
      { location: { row: 5, column: 0 } },
      { location: { row: 4, column: 0 } },
    ],
    pawnB: [
      { location: { row: 5, column: 1 } },
      { location: { row: 4, column: 1 } },
    ],
    pawnC: [
      { location: { row: 5, column: 2 } },
      { location: { row: 4, column: 2 } },
    ],
    pawnD: [
      { location: { row: 5, column: 3 } },
      { location: { row: 4, column: 3 } },
    ],
    pawnE: [
      { location: { row: 5, column: 4 } },
      { location: { row: 4, column: 4 } },
    ],
    pawnF: [
      { location: { row: 5, column: 5 } },
      { location: { row: 4, column: 5 } },
    ],
    pawnG: [
      { location: { row: 5, column: 6 } },
      { location: { row: 4, column: 6 } },
    ],
    pawnH: [
      { location: { row: 5, column: 7 } },
      { location: { row: 4, column: 7 } },
    ],
    rookA: [],
    rookB: [],
    knightA: [
      { location: { row: 5, column: 2 } },
      { location: { row: 5, column: 0 } },
    ],
    knightB: [
      { location: { row: 5, column: 7 } },
      { location: { row: 5, column: 5 } },
    ],
    bishopA: [],
    bishopB: [],
    queen: [],
    king: [],
  });
});

// probably not needed, saving just in case
// test("CalculatePossibleMoves controller returns correct possible moves for human for in-progress game", async () => {
//   const gameId = "00000000-0000-0000-0000-000000000001";

//   await postgresClient("game").insert({
//     game_id: gameId,
//     human_player_id: humanPlayerId,
//     human_player_color: humanColor,
//     ai_player_color: aiColor,
//   });

//   await postgresClient("one_time_only_move_flags").insert({
//     game_id: gameId,
//     human_pawn_a_initial_move_eligible: false,
//     human_pawn_b_initial_move_eligible: false,
//     human_pawn_c_initial_move_eligible: false,
//     human_pawn_d_initial_move_eligible: false,
//     human_pawn_e_initial_move_eligible: false,
//     human_pawn_f_initial_move_eligible: false,
//     human_pawn_g_initial_move_eligible: false,
//     human_pawn_h_initial_move_eligible: false,
//     ai_pawn_a_initial_move_eligible: false,
//     ai_pawn_b_initial_move_eligible: false,
//     ai_pawn_c_initial_move_eligible: false,
//     ai_pawn_d_initial_move_eligible: false,
//     ai_pawn_e_initial_move_eligible: false,
//     ai_pawn_f_initial_move_eligible: false,
//     ai_pawn_g_initial_move_eligible: false,
//     ai_pawn_h_initial_move_eligible: false,
//     human_castle_rook_a_eligible: false,
//     human_castle_rook_b_eligible: false,
//     ai_castle_rook_a_eligible: true,
//     ai_castle_rook_b_eligible: true,
//   });

//   const pieceLocations: PieceLocations = {
//     humanColor,
//     aiColor,
//     humanPawnA: { row: 6, column: 0, captured: true },
//     humanPawnB: { row: 6, column: 1, captured: true },
//     humanPawnC: { row: 6, column: 2, captured: true },
//     humanPawnD: { row: 4, column: 3, captured: false },
//     humanPawnE: { row: 5, column: 4, captured: false },
//     humanPawnF: { row: 6, column: 5, captured: true },
//     humanPawnG: { row: 4, column: 6, captured: false },
//     humanPawnH: { row: 3, column: 7, captured: false },
//     humanRookA: { row: 4, column: 0, captured: false },
//     humanRookB: { row: 4, column: 7, captured: false },
//     humanKnightA: { row: 5, column: 0, captured: false },
//     humanKnightB: { row: 7, column: 6, captured: true },
//     humanBishopA: { row: 6, column: 1, captured: false },
//     humanBishopB: { row: 7, column: 5, captured: true },
//     humanQueen: {
//       row: 7,
//       column: 3,
//       captured: true,
//     },
//     humanKing: {
//       row: 7,
//       column: 4,
//       captured: false,
//     },
//     aiPawnA: { row: 1, column: 0, captured: true },
//     aiPawnB: { row: 1, column: 1, captured: true },
//     aiPawnC: { row: 1, column: 2, captured: true },
//     aiPawnD: { row: 1, column: 3, captured: true },
//     aiPawnE: { row: 1, column: 4, captured: true },
//     aiPawnF: { row: 1, column: 5, captured: true },
//     aiPawnG: { row: 1, column: 6, captured: true },
//     aiPawnH: { row: 1, column: 7, captured: true },
//     aiRookA: { row: 0, column: 0, captured: false },
//     aiRookB: { row: 0, column: 7, captured: false },
//     aiKnightA: { row: 0, column: 1, captured: true },
//     aiKnightB: { row: 0, column: 6, captured: true },
//     aiBishopA: { row: 2, column: 4, captured: false },
//     aiBishopB: { row: 2, column: 7, captured: false },
//     aiQueen: {
//       row: 4,
//       column: 4,
//       captured: false,
//     },
//     aiKing: {
//       row: 0,
//       column: 3,
//       captured: false,
//     },
//     matrix: [
//       [true, false, false, true, false, false, false, true],
//       [false, false, false, false, false, false, false, false],
//       [false, false, false, false, true, false, false, true],
//       [false, false, false, false, false, false, false, true],
//       [true, false, false, true, true, false, true, true],
//       [true, false, false, false, true, false, false, false],
//       [false, true, false, false, false, false, false, false],
//       [false, false, false, false, true, false, false, false],
//     ],
//   };
//   console.log(
//     JSON.stringify(
//       await CalculatePossibleMovesController({
//         pieceLocations,
//         gameId,
//         db: postgresClient,
//         playerType: PlayerType.Human,
//       })
//     )
//   );
//   expect(
//     await CalculatePossibleMovesController({
//       pieceLocations,
//       gameId,
//       db: postgresClient,
//       playerType: PlayerType.Human,
//     })
//   ).toEqual({
//     pawnA: [
//       { location: { row: 5, column: 0 } },
//       { location: { row: 4, column: 0 } },
//     ],
//     pawnB: [
//       { location: { row: 5, column: 1 } },
//       { location: { row: 4, column: 1 } },
//     ],
//     pawnC: [
//       { location: { row: 5, column: 2 } },
//       { location: { row: 4, column: 2 } },
//     ],
//     pawnD: [
//       { location: { row: 5, column: 3 } },
//       { location: { row: 4, column: 3 } },
//     ],
//     pawnE: [
//       { location: { row: 5, column: 4 } },
//       { location: { row: 4, column: 4 } },
//     ],
//     pawnF: [
//       { location: { row: 5, column: 5 } },
//       { location: { row: 4, column: 5 } },
//     ],
//     pawnG: [
//       { location: { row: 5, column: 6 } },
//       { location: { row: 4, column: 6 } },
//     ],
//     pawnH: [
//       { location: { row: 5, column: 7 } },
//       { location: { row: 4, column: 7 } },
//     ],
//     rookA: [],
//     rookB: [],
//     knightA: [
//       { location: { row: 5, column: 2 } },
//       { location: { row: 5, column: 0 } },
//     ],
//     knightB: [
//       { location: { row: 5, column: 7 } },
//       { location: { row: 5, column: 5 } },
//     ],
//     bishopA: [],
//     bishopB: [],
//     queen: [],
//     king: [],
//   });
// });
