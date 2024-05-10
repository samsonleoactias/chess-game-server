import {
  OneTimeOnlyMoveFlags,
  PieceLocations,
  PossibleMove,
  PossibleMovesAssignedToPieces,
  Piece,
} from "../../../types/index.js";

const chooseAiMove = (
  pieceLocations: PieceLocations,
  possibleMovesAssignedToPieces: PossibleMovesAssignedToPieces
): { piece: string; move: PossibleMove } => {
  var pieceNames = [
    Piece.AiPawnA,
    Piece.AiPawnB,
    Piece.AiPawnC,
    Piece.AiPawnD,
    Piece.AiPawnE,
    Piece.AiPawnF,
    Piece.AiPawnG,
    Piece.AiPawnH,
    Piece.AiRookA,
    Piece.AiRookB,
    Piece.AiKnightA,
    Piece.AiKnightB,
    Piece.AiBishopA,
    Piece.AiBishopB,
    Piece.AiQueen,
    Piece.AiKing,
  ];

  let possibleMovesThatCapture: PossibleMovesAssignedToPieces = {
    aiPawnA: [],
    aiPawnB: [],
    aiPawnC: [],
    aiPawnD: [],
    aiPawnE: [],
    aiPawnF: [],
    aiPawnG: [],
    aiPawnH: [],
    aiRookA: [],
    aiRookB: [],
    aiKnightA: [],
    aiKnightB: [],
    aiBishopA: [],
    aiBishopB: [],
    aiQueen: [],
    aiKing: [],
  };

  let usePossibleMovesThatCapture: boolean = false;

  pieceNames.forEach((pieceName) => {
    if (pieceName !== Piece.None) {
      possibleMovesAssignedToPieces[pieceName]?.forEach((move) => {
        if (pieceLocations.matrix[move.location.row][move.location.column]) {
          possibleMovesThatCapture[pieceName]?.push(move);
          usePossibleMovesThatCapture = true;
        }
      });
    }
  });

  if (usePossibleMovesThatCapture) {
    let pieceNamesWithMoves: Piece[] = [];

    let possibleMovesAsArray = Object.entries(possibleMovesThatCapture);

    possibleMovesAsArray.forEach(([key, value]) => {
      if (value.length > 0) {
        pieceNamesWithMoves.push(key as Piece);
      }
    });

    var pickedPiece =
      pieceNamesWithMoves[
        Math.floor(Math.random() * pieceNamesWithMoves.length)
      ];

    var pickedMove: PossibleMove = (<any>possibleMovesThatCapture)[pickedPiece][
      Math.floor(
        Math.random() * (<any>possibleMovesThatCapture)[pickedPiece].length
      )
    ];

    return { piece: pickedPiece, move: pickedMove };
  }
  let pieceNamesWithMoves: Piece[] = [];

  let possibleMovesAsArray = Object.entries(possibleMovesAssignedToPieces);

  possibleMovesAsArray.forEach(([key, value]) => {
    if (value.length > 0) {
      pieceNamesWithMoves.push(key as Piece);
    }
  });

  var pickedPiece =
    pieceNamesWithMoves[Math.floor(Math.random() * pieceNamesWithMoves.length)];

  var pickedMove: PossibleMove = (<any>possibleMovesAssignedToPieces)[
    pickedPiece
  ][
    Math.floor(
      Math.random() * (<any>possibleMovesAssignedToPieces)[pickedPiece].length
    )
  ];

  return { piece: pickedPiece, move: pickedMove };
};

export default chooseAiMove;
