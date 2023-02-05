import chooseColor from "./utils/chooseColor";
import { Color } from "../../types";
import PieceLocations from "../../types/PieceLocations";
import db from "../../db/postgresConnection";
import objectCamelToSnake from "../helpers/objectCamelToSnake";

type NewGameGeneratorController = {
  humanPlayerId: string;
};

const NewGameGeneratorController = async (
  params: NewGameGeneratorController
) => {
  const { humanPlayerId } = params;

  const humanColor = chooseColor();

  const aiColor = humanColor === Color.White ? Color.Black : Color.White;

  const gameId = await db("game").insert(
    {
      human_player_id: humanPlayerId,
      human_player_color: humanColor,
      ai_player_color: aiColor,
    },
    ["game_id"]
  );

  const newGamePieceLocations: PieceLocations = {
    humanPawnARow: 6,
    humanPawnAColumn: 0,
    humanPawnACaptured: false,
    humanPawnBRow: 6,
    humanPawnBColumn: 1,
    humanPawnBCaptured: false,
    humanPawnCRow: 6,
    humanPawnCColumn: 2,
    humanPawnCCaptured: false,
    humanPawnDRow: 6,
    humanPawnDColumn: 3,
    humanPawnDCaptured: false,
    humanPawnERow: 6,
    humanPawnEColumn: 4,
    humanPawnECaptured: false,
    humanPawnFRow: 6,
    humanPawnFColumn: 5,
    humanPawnFCaptured: false,
    humanPawnGRow: 6,
    humanPawnGColumn: 6,
    humanPawnGCaptured: false,
    humanPawnHRow: 6,
    humanPawnHColumn: 7,
    humanPawnHCaptured: false,
    humanRookARow: 7,
    humanRookAColumn: 0,
    humanRookACaptured: false,
    humanRookBRow: 7,
    humanRookBColumn: 7,
    humanRookBCaptured: false,
    humanKnightARow: 7,
    humanKnightAColumn: 1,
    humanKnightACaptured: false,
    humanKnightBRow: 7,
    humanKnightBColumn: 6,
    humanKnightBCaptured: false,
    humanBishopARow: 7,
    humanBishopAColumn: 2,
    humanBishopACaptured: false,
    humanBishopBRow: 7,
    humanBishopBColumn: 5,
    humanBishopBCaptured: false,
    humanQueenRow: 7,
    humanQueenColumn: humanColor === Color.Black ? 4 : 3,
    humanQueenCaptured: false,
    humanKingRow: 7,
    humanKingColumn: humanColor === Color.Black ? 3 : 4,
    humanKingCaptured: false,
    aiPawnARow: 1,
    aiPawnAColumn: 0,
    aiPawnACaptured: false,
    aiPawnBRow: 1,
    aiPawnBColumn: 1,
    aiPawnBCaptured: false,
    aiPawnCRow: 1,
    aiPawnCColumn: 2,
    aiPawnCCaptured: false,
    aiPawnDRow: 1,
    aiPawnDColumn: 3,
    aiPawnDCaptured: false,
    aiPawnERow: 1,
    aiPawnEColumn: 4,
    aiPawnECaptured: false,
    aiPawnFRow: 1,
    aiPawnFColumn: 5,
    aiPawnFCaptured: false,
    aiPawnGRow: 1,
    aiPawnGColumn: 6,
    aiPawnGCaptured: false,
    aiPawnHRow: 1,
    aiPawnHColumn: 7,
    aiPawnHCaptured: false,
    aiRookARow: 0,
    aiRookAColumn: 0,
    aiRookACaptured: false,
    aiRookBRow: 0,
    aiRookBColumn: 7,
    aiRookBCaptured: false,
    aiKnightARow: 0,
    aiKnightAColumn: 1,
    aiKnightACaptured: false,
    aiKnightBRow: 0,
    aiKnightBColumn: 6,
    aiKnightBCaptured: false,
    aiBishopARow: 0,
    aiBishopAColumn: 2,
    aiBishopACaptured: false,
    aiBishopBRow: 0,
    aiBishopBColumn: 5,
    aiBishopBCaptured: false,
    aiQueenRow: 0,
    aiQueenColumn: aiColor === Color.Black ? 4 : 3,
    aiQueenCaptured: false,
    aiKingRow: 0,
    aiKingColumn: aiColor === Color.Black ? 3 : 4,
    aiKingCaptured: false,
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
    ...objectCamelToSnake(newGamePieceLocations),
  });

  return newGamePieceLocations;
};

export default NewGameGeneratorController;
