import { afterAll, beforeAll, test, expect } from "@jest/globals";
import NewGameController from "../../src/controllers/NewGameController";
import { PostgreSqlContainer } from "@testcontainers/postgresql";
import knex, { Knex } from "knex";
import { Color } from "../../src/types";
import setup from "../db/setup";
import teardown from "../db/teardown";

let postgresClient: Knex;

beforeAll(async () => {
  const postgresContainer = await new PostgreSqlContainer().start();

  postgresClient = knex({
    client: "pg",
    connection: postgresContainer.getConnectionUri(),
  });

  await setup(postgresClient);
});

afterAll(async () => {
  await teardown(postgresClient);
  await postgresClient.destroy();
});

test("NewGameController return PieceLocations from NewGameGeneratorController", async () => {
  const newGameResult = await NewGameController({
    db: postgresClient,
    humanPlayerId: "test_test",
  });

  const humanColor = newGameResult.humanColor;
  const aiColor = humanColor === Color.White ? Color.Black : Color.White;

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
      column: humanColor === Color.Black ? 4 : 3,
      captured: false,
    },
    humanKing: {
      row: 7,
      column: humanColor === Color.Black ? 3 : 4,
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
      column: aiColor === Color.Black ? 4 : 3,
      captured: false,
    },
    aiKing: {
      row: 0,
      column: aiColor === Color.Black ? 3 : 4,
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
