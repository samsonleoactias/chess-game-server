import {
  OneTimeOnlyMoveFlags,
  Piece,
  PieceLocations,
  PossibleMove,
} from "../../../../types";
import calculateAiBishopPossibleMoves from "./bishop/calculateAiBishopPossibleMoves";
import calculateAiKingPossibleMoves from "./king/calculateAiKingPossibleMoves";
import calculateAiKnightPossibleMoves from "./knight/calculateAiKnightPossibleMoves";
import calculateAiPawnPossibleMoves from "./pawn/calculateHumanPawnPossibleMoves";
import calculateAiQueenPossibleMoves from "./queen/calculateAiQueenPossibleMoves";
import calculateAiRookPossibleMoves from "./rook/calculateAiRookPossibleMoves";
import checkIfAMoveCapturesHumanKing from "./checkIfAMoveCapturesHumanKing";
import findWhatPieceIsOnASquare from "../../../helpers/findWhatPieceIsOnASquare";

const determineIfAnyPossibleMovesCreateCheckOnHuman = (
  pieceLocations: PieceLocations,
  movingPiece: Piece,
  possibleMove: PossibleMove,
  oneTimeOnlyMoveFlags: OneTimeOnlyMoveFlags
) => {
  if (movingPiece != Piece.None) {
    const pieceOnSquareCurrently = findWhatPieceIsOnASquare(
      pieceLocations,
      possibleMove.location.row,
      possibleMove.location.column
    );

    if (pieceOnSquareCurrently !== Piece.None) {
      pieceLocations[pieceOnSquareCurrently].captured = true;
    }

    pieceLocations[movingPiece].row = possibleMove.location.row;
    pieceLocations[movingPiece].column = possibleMove.location.column;

    let isCheck = false;

    if (pieceLocations.aiPawnA.captured === false) {
      calculateAiPawnPossibleMoves(
        pieceLocations.aiPawnA.row,
        pieceLocations.aiPawnA.column,
        pieceLocations,
        Piece.AiPawnA,
        oneTimeOnlyMoveFlags.aiPawnAInitialMoveEligible,
        oneTimeOnlyMoveFlags,
        false
      ).forEach((move) => {
        isCheck = checkIfAMoveCapturesHumanKing(move, pieceLocations);
      });

      if (isCheck) {
        return true;
      }
    }

    if (pieceLocations.aiPawnB.captured === false) {
      calculateAiPawnPossibleMoves(
        pieceLocations.aiPawnB.row,
        pieceLocations.aiPawnB.column,
        pieceLocations,
        Piece.AiPawnB,
        oneTimeOnlyMoveFlags.aiPawnBInitialMoveEligible,
        oneTimeOnlyMoveFlags,
        false
      ).forEach((move) => {
        isCheck = checkIfAMoveCapturesHumanKing(move, pieceLocations);
      });

      if (isCheck) {
        return true;
      }
    }

    if (pieceLocations.aiPawnC.captured === false) {
      calculateAiPawnPossibleMoves(
        pieceLocations.aiPawnC.row,
        pieceLocations.aiPawnC.column,
        pieceLocations,
        Piece.AiPawnC,
        oneTimeOnlyMoveFlags.aiPawnCInitialMoveEligible,
        oneTimeOnlyMoveFlags,
        false
      ).forEach((move) => {
        isCheck = checkIfAMoveCapturesHumanKing(move, pieceLocations);
      });

      if (isCheck) {
        return true;
      }
    }

    if (pieceLocations.aiPawnD.captured === false) {
      calculateAiPawnPossibleMoves(
        pieceLocations.aiPawnD.row,
        pieceLocations.aiPawnD.column,
        pieceLocations,
        Piece.AiPawnD,
        oneTimeOnlyMoveFlags.aiPawnDInitialMoveEligible,
        oneTimeOnlyMoveFlags,
        false
      ).forEach((move) => {
        isCheck = checkIfAMoveCapturesHumanKing(move, pieceLocations);
      });

      if (isCheck) {
        return true;
      }
    }

    if (pieceLocations.aiPawnE.captured === false) {
      calculateAiPawnPossibleMoves(
        pieceLocations.aiPawnE.row,
        pieceLocations.aiPawnE.column,
        pieceLocations,
        Piece.AiPawnE,
        oneTimeOnlyMoveFlags.aiPawnEInitialMoveEligible,
        oneTimeOnlyMoveFlags,
        false
      ).forEach((move) => {
        isCheck = checkIfAMoveCapturesHumanKing(move, pieceLocations);
      });

      if (isCheck) {
        return true;
      }
    }

    if (pieceLocations.aiPawnF.captured === false) {
      calculateAiPawnPossibleMoves(
        pieceLocations.aiPawnF.row,
        pieceLocations.aiPawnF.column,
        pieceLocations,
        Piece.AiPawnF,
        oneTimeOnlyMoveFlags.aiPawnFInitialMoveEligible,
        oneTimeOnlyMoveFlags,
        false
      ).forEach((move) => {
        isCheck = checkIfAMoveCapturesHumanKing(move, pieceLocations);
      });

      if (isCheck) {
        return true;
      }
    }

    if (pieceLocations.aiPawnG.captured === false) {
      calculateAiPawnPossibleMoves(
        pieceLocations.aiPawnG.row,
        pieceLocations.aiPawnG.column,
        pieceLocations,
        Piece.AiPawnG,
        oneTimeOnlyMoveFlags.aiPawnGInitialMoveEligible,
        oneTimeOnlyMoveFlags,
        false
      ).forEach((move) => {
        isCheck = checkIfAMoveCapturesHumanKing(move, pieceLocations);
      });

      if (isCheck) {
        return true;
      }
    }

    if (pieceLocations.aiPawnH.captured === false) {
      calculateAiPawnPossibleMoves(
        pieceLocations.aiPawnH.row,
        pieceLocations.aiPawnH.column,
        pieceLocations,
        Piece.AiPawnH,
        oneTimeOnlyMoveFlags.aiPawnHInitialMoveEligible,
        oneTimeOnlyMoveFlags,
        false
      ).forEach((move) => {
        isCheck = checkIfAMoveCapturesHumanKing(move, pieceLocations);
      });

      if (isCheck) {
        return true;
      }
    }

    if (pieceLocations.aiRookA.captured === false) {
      calculateAiRookPossibleMoves(
        pieceLocations.aiRookA.row,
        pieceLocations.aiRookA.column,
        pieceLocations,
        Piece.AiRookA,
        oneTimeOnlyMoveFlags,
        false
      ).forEach((move) => {
        isCheck = checkIfAMoveCapturesHumanKing(move, pieceLocations);
      });

      if (isCheck) {
        return true;
      }
    }

    if (pieceLocations.aiRookB.captured === false) {
      calculateAiRookPossibleMoves(
        pieceLocations.aiRookB.row,
        pieceLocations.aiRookB.column,
        pieceLocations,
        Piece.AiRookB,
        oneTimeOnlyMoveFlags,
        false
      ).forEach((move) => {
        isCheck = checkIfAMoveCapturesHumanKing(move, pieceLocations);
      });

      if (isCheck) {
        return true;
      }
    }

    if (pieceLocations.aiKnightA.captured === false) {
      calculateAiKnightPossibleMoves(
        pieceLocations.aiKnightA.row,
        pieceLocations.aiKnightA.column,
        pieceLocations,
        Piece.AiKnightA,
        oneTimeOnlyMoveFlags,
        false
      ).forEach((move) => {
        isCheck = checkIfAMoveCapturesHumanKing(move, pieceLocations);
      });

      if (isCheck) {
        return true;
      }
    }

    if (pieceLocations.aiKnightB.captured === false) {
      calculateAiKnightPossibleMoves(
        pieceLocations.aiKnightB.row,
        pieceLocations.aiKnightB.column,
        pieceLocations,
        Piece.AiKnightB,
        oneTimeOnlyMoveFlags,
        false
      ).forEach((move) => {
        isCheck = checkIfAMoveCapturesHumanKing(move, pieceLocations);
      });

      if (isCheck) {
        return true;
      }
    }

    if (pieceLocations.aiBishopA.captured === false) {
      calculateAiBishopPossibleMoves(
        pieceLocations.aiBishopA.row,
        pieceLocations.aiBishopA.column,
        pieceLocations,
        Piece.AiBishopA,
        oneTimeOnlyMoveFlags,
        false
      ).forEach((move) => {
        isCheck = checkIfAMoveCapturesHumanKing(move, pieceLocations);
      });

      if (isCheck) {
        return true;
      }
    }

    if (pieceLocations.aiBishopB.captured === false) {
      calculateAiBishopPossibleMoves(
        pieceLocations.aiBishopB.row,
        pieceLocations.aiBishopB.column,
        pieceLocations,
        Piece.AiBishopB,
        oneTimeOnlyMoveFlags,
        false
      ).forEach((move) => {
        isCheck = checkIfAMoveCapturesHumanKing(move, pieceLocations);
      });

      if (isCheck) {
        return true;
      }
    }

    if (pieceLocations.aiQueen.captured === false) {
      calculateAiQueenPossibleMoves(
        pieceLocations.aiQueen.row,
        pieceLocations.aiQueen.column,
        pieceLocations,
        oneTimeOnlyMoveFlags,
        false
      ).forEach((move) => {
        isCheck = checkIfAMoveCapturesHumanKing(move, pieceLocations);
      });

      if (isCheck) {
        return true;
      }
    }

    if (pieceLocations.aiKing.captured === false) {
      calculateAiKingPossibleMoves(
        pieceLocations.aiKing.row,
        pieceLocations.aiKing.column,
        pieceLocations,
        oneTimeOnlyMoveFlags,
        false
      ).forEach((move) => {
        isCheck = checkIfAMoveCapturesHumanKing(move, pieceLocations);
      });

      if (isCheck) {
        return true;
      }
    }

    return false;
  }
};

export default determineIfAnyPossibleMovesCreateCheckOnHuman;
