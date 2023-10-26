const schema = `#graphql
  type Color {
    WHITE: white,
    BLACK: black
  }

  type Piece {
    HUMAN_PAWN_A: humanPawnA,
    HUMAN_PAWN_B: humanPawnB,
    HUMAN_PAWN_C: humanPawnC,
    HUMAN_PAWN_D: humanPawnD,
    HUMAN_PAWN_E: humanPawnE,
    HUMAN_PAWN_F: humanPawnF,
    HUMAN_PAWN_G: humanPawnG,
    HUMAN_PAWN_H: humanPawnH,
    HUMAN_KING: humanKing,
    HUMAN_QUEEN: humanQueen,
    HUMAN_ROOK_A: humanRookA,
    HUMAN_ROOK_B: humanRookB,
    HUMAN_KNIGHT_A: humanKnightA,
    HUMAN_KNIGHT_B: humanKnightB,
    HUMAN_BISHOP_A: humanBishopA,
    HUMAN_BISHOP_B: humanBishopB,
    AI_PAWN_A: aiPawnA,
    AI_PAWN_B: aiPawnB,
    AI_PAWN_C: aiPawnC,
    AI_PAWN_D: aiPawnD,
    AI_PAWN_E: aiPawnE,
    AI_PAWN_F: aiPawnF,
    AI_PAWN_G: aiPawnG,
    AI_PAWN_H: aiPawnH,
    AI_KING: aiKing,
    AI_QUEEN: aiQueen,
    AI_ROOK_A: aiRookA,
    AI_ROOK_B: aiRookB,
    AI_KNIGHT_A: aiKnightA,
    AI_KNIGHT_B: aiKnightB,
    AI_BISHOP_A: aiBishopA,
    AI_BISHOP_B: aiBishopB,
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
    pawnA: [PossibleMove!];
    pawnB: [PossibleMove!];
    pawnC: [PossibleMove!];
    pawnD: [PossibleMove!];
    pawnE: [PossibleMove!];
    pawnF: [PossibleMove!];
    pawnG: [PossibleMove!];
    pawnH: [PossibleMove!];
    rookA: [PossibleMove!];
    rookB: [PossibleMove!];
    knightA: [PossibleMove!];
    knightB: [PossibleMove!];
    bishopA: [PossibleMove!];
    bishopB: [PossibleMove!];
    queen: [PossibleMove!];
    king: [PossibleMove!];
  }

  type Game {
    pieceLocations: PieceLocations!,
    possibleMoves: PossibleMovesAssignedToPieces!
    humanWinner: Boolean!,
    aiWinner: Boolean!,
    humanColor: Color!,
  }

  type Query {
    getGame(humanPlayerId: String!): Game!, 
  }

  type Mutation {
    createGame(humanPlayerId: String!): Game!,
    doTurn(humanPlayerId: String!, piece: Piece!, move: PossibleMove!):  Game!
  }
`;

export default schema;
