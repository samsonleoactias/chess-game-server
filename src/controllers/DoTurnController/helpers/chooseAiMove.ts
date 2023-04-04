import {
  OneTimeOnlyMoveFlags,
  PieceLocations,
  PossibleMove,
  PossibleMovesAssignedToPieces,
} from "../../../types";
import calculateAiPossibleMoves from "../../CalculatePossibleMovesController/utils/possibleMoves/calculateAiPossibleMoves";

const chooseAiMove = (
  pieceLocations: PieceLocations,
  oneTimeOnlyMoveFlags: OneTimeOnlyMoveFlags,
  possibleMovesAssignedToPieces: PossibleMovesAssignedToPieces
) => {
  var pieceNames = [
    "pawnA",
    "pawnB",
    "pawnC",
    "pawnD",
    "pawnE",
    "pawnF",
    "pawnG",
    "pawnH",
    "rookA",
    "rookB",
    "knightA",
    "knightB",
    "bishopA",
    "bishopB",
    "queen",
    "king",
  ];

  var pickedPiece = pieceNames[Math.floor(Math.random() * pieceNames.length)];

  if (possibleMovesAssignedToPieces[pickedPiece].length === 0) {
    chooseAiMove(
      pieceLocations,
      oneTimeOnlyMoveFlags,
      possibleMovesAssignedToPieces
    );
  }

  var pickedMove: PossibleMove =
    possibleMovesAssignedToPieces[pickedPiece][
      Math.floor(
        Math.random() * possibleMovesAssignedToPieces[pickedPiece].length
      )
    ];

  return { piece: pickedPiece, move: pickedMove };
};

export default chooseAiMove;
