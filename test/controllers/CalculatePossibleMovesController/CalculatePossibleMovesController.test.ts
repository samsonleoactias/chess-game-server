import { afterAll, beforeAll, test, expect, fit } from "@jest/globals";
import NewGameController from "../../../src/controllers/NewGameController";
import { PostgreSqlContainer } from "@testcontainers/postgresql";
import knex, { Knex } from "knex";
import { Color, PieceLocations, PlayerType } from "../../../src/types";
import setup from "../../db/setup";
import teardown from "../../db/teardown";
import first from "lodash/first";
import pieceLocationsObjectToDb from "../../../src/controllers/helpers/pieceLocationsObjectToDb";
import CalculatePossibleMovesController from "../../../src/controllers/CalculatePossibleMovesController/CalculatePossibleMovesController";

let postgresClient: Knex;

const humanPlayerId = "00000000-0000-0000-0000-000000000000";
const gameId = "00000000-0000-0000-0000-000000000000";
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

    await postgresClient("game").insert({
      game_id: gameId,
      human_player_id: humanPlayerId,
      human_player_color: humanColor,
      ai_player_color: aiColor,
    });

    const newGamePieceLocations: PieceLocations = {
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

    await postgresClient("piece_locations").insert({
      game_id: gameId,
      ...pieceLocationsObjectToDb(newGamePieceLocations),
    });

    await postgresClient("one_time_only_move_flags").insert({
      game_id: gameId,
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
