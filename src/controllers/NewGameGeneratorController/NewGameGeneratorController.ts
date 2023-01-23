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
    humanPawnARow: 7,
    humanPawnAColumn: 1,
    humanPawnACaptured: false,
    humanPawnBRow: 7,
    humanPawnBColumn: 2,
    humanPawnBCaptured: false,
    humanPawnCRow: 7,
    humanPawnCColumn: 3,
    humanPawnCCaptured: false,
    humanPawnDRow: 7,
    humanPawnDColumn: 4,
    humanPawnDCaptured: false,
    humanPawnERow: 7,
    humanPawnEColumn: 5,
    humanPawnECaptured: false,
    humanPawnFRow: 7,
    humanPawnFColumn: 6,
    humanPawnFCaptured: false,
    humanPawnGRow: 7,
    humanPawnGColumn: 7,
    humanPawnGCaptured: false,
    humanPawnHRow: 7,
    humanPawnHColumn: 8,
    humanPawnHCaptured: false,
    humanRookARow: 8,
    humanRookAColumn: 1,
    humanRookACaptured: false,
    humanRookBRow: 8,
    humanRookBColumn: 8,
    humanRookBCaptured: false,
    humanKnightARow: 8,
    humanKnightAColumn: 2,
    humanKnightACaptured: false,
    humanKnightBRow: 8,
    humanKnightBColumn: 7,
    humanKnightBCaptured: false,
    humanBishopARow: 8,
    humanBishopAColumn: 3,
    humanBishopACaptured: false,
    humanBishopBRow: 8,
    humanBishopBColumn: 6,
    humanBishopBCaptured: false,
    humanQueenRow: 8,
    humanQueenColumn: humanColor === Color.Black ? 5 : 4,
    humanQueenCaptured: false,
    humanKingRow: 8,
    humanKingColumn: humanColor === Color.Black ? 4 : 5,
    humanKingCaptured: false,
    aiPawnARow: 2,
    aiPawnAColumn: 1,
    aiPawnACaptured: false,
    aiPawnBRow: 2,
    aiPawnBColumn: 2,
    aiPawnBCaptured: false,
    aiPawnCRow: 2,
    aiPawnCColumn: 3,
    aiPawnCCaptured: false,
    aiPawnDRow: 2,
    aiPawnDColumn: 4,
    aiPawnDCaptured: false,
    aiPawnERow: 2,
    aiPawnEColumn: 5,
    aiPawnECaptured: false,
    aiPawnFRow: 2,
    aiPawnFColumn: 6,
    aiPawnFCaptured: false,
    aiPawnGRow: 2,
    aiPawnGColumn: 7,
    aiPawnGCaptured: false,
    aiPawnHRow: 2,
    aiPawnHColumn: 8,
    aiPawnHCaptured: false,
    aiRookARow: 1,
    aiRookAColumn: 1,
    aiRookACaptured: false,
    aiRookBRow: 1,
    aiRookBColumn: 8,
    aiRookBCaptured: false,
    aiKnightARow: 1,
    aiKnightAColumn: 2,
    aiKnightACaptured: false,
    aiKnightBRow: 1,
    aiKnightBColumn: 7,
    aiKnightBCaptured: false,
    aiBishopARow: 1,
    aiBishopAColumn: 3,
    aiBishopACaptured: false,
    aiBishopBRow: 1,
    aiBishopBColumn: 6,
    aiBishopBCaptured: false,
    aiQueenRow: 1,
    aiQueenColumn: aiColor === Color.Black ? 5 : 4,
    aiQueenCaptured: false,
    aiKingRow: 1,
    aiKingColumn: aiColor === Color.White ? 5 : 4,
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
