import chooseColor from "./helpers/chooseColor.js";
import { Color, PieceLocations } from "../../../../types/index.js";
import pieceLocationsObjectToDb from "../../../utils/dbMaps/pieceLocationsObjectToDb.js";
import lodash from "lodash";
import { Knex } from "knex";

type NewGameGeneratorParams = {
  db: Knex;
  humanPlayerId?: string;
};

const newGameGenerator = async (
  params: NewGameGeneratorParams
): Promise<[string, PieceLocations, Color]> => {
  const { db, humanPlayerId } = params;

  const humanColor = chooseColor();

  const aiColor = humanColor === Color.WHITE ? Color.BLACK : Color.WHITE;

  try {
    const humanIdDbResult: any = lodash.first(
      await db("human_player").insert({}, ["human_player_id"])
    );

    if (!humanIdDbResult) {
      throw new Error(); // TODO better error
    } else {
      const gameIdDbResult: any = lodash.first(
        await db("game").insert(
          {
            human_player_id: (<any>humanIdDbResult)["human_player_id"],
            human_player_color: humanColor === Color.WHITE ? "white" : "black",
            ai_player_color: aiColor === Color.WHITE ? "white" : "black",
          },
          ["game_id"]
        )
      );

      if (!gameIdDbResult) {
        throw new Error(); // TODO better error
      } else {
        const gameId: string = (<any>gameIdDbResult)["game_id"];

        const newGamePieceLocations: PieceLocations = {
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
            column: aiColor === Color.BLACK ? 3 : 4,
            captured: false,
          },
          humanKing: {
            row: 7,
            column: aiColor === Color.BLACK ? 4 : 3,
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
            column: aiColor === Color.BLACK ? 3 : 4,
            captured: false,
          },
          aiKing: {
            row: 0,
            column: aiColor === Color.BLACK ? 4 : 3,
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

        await db("piece_locations").insert({
          game_id: gameId,
          ...pieceLocationsObjectToDb(newGamePieceLocations),
        });

        await db("one_time_only_move_flags").insert({
          game_id: gameId,
        });

        return [gameId, newGamePieceLocations, humanColor];
      }
    }
  } catch (e: any) {
    throw new Error(e); // TODO better error
  }
};

export default newGameGenerator;
