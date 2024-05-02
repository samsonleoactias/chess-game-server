import {
  OneTimeOnlyMoveFlags,
  PieceLocations,
  PossibleMove,
  PossibleMovesAssignedToPieces,
  Piece,
} from "../../../types/index.js";

const chooseAiMove = (
  pieceLocations: PieceLocations,
  oneTimeOnlyMoveFlags: OneTimeOnlyMoveFlags,
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

  var pickedPiece = pieceNames[Math.floor(Math.random() * pieceNames.length)];

  // TODO do we neeed both checks here?
  if (
    !(<any>possibleMovesAssignedToPieces)[pickedPiece] ||
    (<any>possibleMovesAssignedToPieces)[pickedPiece].length === 0
  ) {
    return chooseAiMove(
      pieceLocations,
      oneTimeOnlyMoveFlags,
      possibleMovesAssignedToPieces
    );
  }

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
