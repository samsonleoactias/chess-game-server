const schema = `#graphql
  enum Color {
    WHITE,
    BLACK
  }

  enum Piece {
    HUMAN_PAWN_A,
    HUMAN_PAWN_B,
    HUMAN_PAWN_C,
    HUMAN_PAWN_D,
    HUMAN_PAWN_E,
    HUMAN_PAWN_F,
    HUMAN_PAWN_G,
    HUMAN_PAWN_H,
    HUMAN_KING,
    HUMAN_QUEEN,
    HUMAN_ROOK_A,
    HUMAN_ROOK_B,
    HUMAN_KNIGHT_A,
    HUMAN_KNIGHT_B,
    HUMAN_BISHOP_A,
    HUMAN_BISHOP_B,
    AI_PAWN_A,
    AI_PAWN_B,
    AI_PAWN_C,
    AI_PAWN_D,
    AI_PAWN_E,
    AI_PAWN_F,
    AI_PAWN_G,
    AI_PAWN_H,
    AI_KING,
    AI_QUEEN,
    AI_ROOK_A,
    AI_ROOK_B,
    AI_KNIGHT_A,
    AI_KNIGHT_B,
    AI_BISHOP_A,
    AI_BISHOP_B,
  }

  type PieceStatus {
    row: Int!,
    column: Int!,
    captured: Boolean!
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

  type Location {
    row: Int!,
    column: Int!
  }

  type SideEffect {
    piece: Piece!,
    row: Int!,
    column: Int!
  }

  type PossibleMove {
    location: Location!,
    sideEffects: [SideEffect!]
  }

  type PossibleMovesAssignedToPieces {
    humanPawnA: [PossibleMove!],
    humanPawnB: [PossibleMove!],
    humanPawnC: [PossibleMove!],
    humanPawnD: [PossibleMove!],
    humanPawnE: [PossibleMove!],
    humanPawnF: [PossibleMove!],
    humanPawnG: [PossibleMove!],
    humanPawnH: [PossibleMove!],
    humanRookA: [PossibleMove!],
    humanRookB: [PossibleMove!],
    humanKnightA: [PossibleMove!],
    humanKnightB: [PossibleMove!],
    humanBishopA: [PossibleMove!],
    humanBishopB: [PossibleMove!],
    humanQueen: [PossibleMove!],
    humanKing: [PossibleMove!],
  }

  type Game {
    pieceLocations: PieceLocations,
    possibleMoves: PossibleMovesAssignedToPieces
    humanWinner: Boolean,
    aiWinner: Boolean,
    humanColor: Color,
    humanPlayerId: String!
  }

  type Query {
    getGame(humanPlayerId: String!): Game!, 
  }

  type Mutation {
    createGame(humanPlayerId: String): Game!,
    doTurn(humanPlayerId: String!, piece: String!, move: String!):  Game!
  }
`;

export default schema;
