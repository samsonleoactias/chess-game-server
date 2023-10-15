import { buildSchema } from "graphql";

const gameSchema = buildSchema(`
  type Color {
    WHITE: { value: "white" },
    BLACK: { value: "black" },
  }

  type PieceStatus {
    row: Int!,
    column: Int!,
    captured: Boolean!,
  }

  type PieceLocations {
    humanColor: Color!,
    aiColor: Color!,
    humanPawnA: PieceStatus!,
    humanPawnB: PieceStatus!,
    humanPawnC: PieceStatus!,
    humanPawnD: PieceStatus!,
    humanPawnE: PieceStatus!,
    humanPawnF: PieceStatus!,
    humanPawnG: PieceStatus!,
    humanPawnH: PieceStatus!,
    humanKing: PieceStatus!,
    humanQueen: PieceStatus!,
    humanRookA: PieceStatus!,
    humanRookB: PieceStatus!,
    humanKnightA: PieceStatus!,
    humanKnightB: PieceStatus!,
    humanBishopA: PieceStatus!,
    humanBishopB: PieceStatus!,
    aiPawnA: PieceStatus!,
    aiPawnB: PieceStatus!,
    aiPawnC: PieceStatus!,
    aiPawnD: PieceStatus!,
    aiPawnE: PieceStatus!,
    aiPawnF: PieceStatus!,
    aiPawnG: PieceStatus!,
    aiPawnH: PieceStatus!,
    aiKing: PieceStatus!,
    aiQueen: PieceStatus!,
    aiRookA: PieceStatus!,
    aiRookB: PieceStatus!,
    aiKnightA: PieceStatus!,
    aiKnightB: PieceStatus!,
    aiBishopA: PieceStatus!,
    aiBishopB: PieceStatus!,
    matrix: [[Boolean!]!]!
  }

  type Query {
    getGame(humanPlayerId: String!): PieceLocations!,
  }

  type Mutation {
    createGame(humanPlayerId: String!): PieceLocations!,
  }
`);

export default gameSchema;
