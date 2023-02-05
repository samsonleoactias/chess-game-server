import {
  OneTimeOnlyMoveFlags,
  Piece,
  PieceLocations,
  PossibleMove,
} from "../../../../../types";
import calculateAiBishopPossibleMoves from "../bishop/calculateAiBishopPossibleMoves";
import calculateAiKingPossibleMoves from "../king/calculateAiKingPossibleMoves";
import calculateAiKnightPossibleMoves from "../knight/calculateAiKnightPossibleMoves";
import calculateAiPawnPossibleMoves from "../pawn/calculateAiPawnPossibleMoves";
import calculateAiQueenPossibleMoves from "../queen/calculateAiQueenPossibleMoves";
import calculateAiRookPossibleMoves from "../rook/calculateAiRookPossibleMoves";
import checkIfAMoveCreatesCheckOnHuman from "./checkIfAMoveCreatesCheckOnHuman";
import findWhatPieceIsOnASquare from "./findWhatPieceIsOnASquare";

const determineIfAnyPossibleMovesCreateCheckOnHuman = (
  pieceLocations: PieceLocations,
  movingPiece: Piece,
  possibleMove: PossibleMove,
  oneTimeOnlyMoveFlags: OneTimeOnlyMoveFlags
) => {
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
      oneTimeOnlyMoveFlags.aiPawnAInitialMoveEligible,
      pieceLocations
    ).forEach((move) => {
      isCheck = checkIfAMoveCreatesCheckOnHuman(move, pieceLocations);
    });

    if (isCheck) {
      return true;
    }
  }

  if (pieceLocations.aiPawnB.captured === false) {
    calculateAiPawnPossibleMoves(
      pieceLocations.aiPawnB.row,
      pieceLocations.aiPawnB.column,
      oneTimeOnlyMoveFlags.aiPawnBInitialMoveEligible,
      pieceLocations
    ).forEach((move) => {
      isCheck = checkIfAMoveCreatesCheckOnHuman(move, pieceLocations);
    });

    if (isCheck) {
      return true;
    }
  }

  if (pieceLocations.aiPawnC.captured === false) {
    calculateAiPawnPossibleMoves(
      pieceLocations.aiPawnC.row,
      pieceLocations.aiPawnC.column,
      oneTimeOnlyMoveFlags.aiPawnCInitialMoveEligible,
      pieceLocations
    ).forEach((move) => {
      isCheck = checkIfAMoveCreatesCheckOnHuman(move, pieceLocations);
    });

    if (isCheck) {
      return true;
    }
  }

  if (pieceLocations.aiPawnD.captured === false) {
    calculateAiPawnPossibleMoves(
      pieceLocations.aiPawnD.row,
      pieceLocations.aiPawnD.column,
      oneTimeOnlyMoveFlags.aiPawnDInitialMoveEligible,
      pieceLocations
    ).forEach((move) => {
      isCheck = checkIfAMoveCreatesCheckOnHuman(move, pieceLocations);
    });

    if (isCheck) {
      return true;
    }
  }

  if (pieceLocations.aiPawnE.captured === false) {
    calculateAiPawnPossibleMoves(
      pieceLocations.aiPawnE.row,
      pieceLocations.aiPawnE.column,
      oneTimeOnlyMoveFlags.aiPawnEInitialMoveEligible,
      pieceLocations
    ).forEach((move) => {
      isCheck = checkIfAMoveCreatesCheckOnHuman(move, pieceLocations);
    });

    if (isCheck) {
      return true;
    }
  }

  if (pieceLocations.aiPawnF.captured === false) {
    calculateAiPawnPossibleMoves(
      pieceLocations.aiPawnF.row,
      pieceLocations.aiPawnF.column,
      oneTimeOnlyMoveFlags.aiPawnFInitialMoveEligible,
      pieceLocations
    ).forEach((move) => {
      isCheck = checkIfAMoveCreatesCheckOnHuman(move, pieceLocations);
    });

    if (isCheck) {
      return true;
    }
  }

  if (pieceLocations.aiPawnG.captured === false) {
    calculateAiPawnPossibleMoves(
      pieceLocations.aiPawnG.row,
      pieceLocations.aiPawnG.column,
      oneTimeOnlyMoveFlags.aiPawnGInitialMoveEligible,
      pieceLocations
    ).forEach((move) => {
      isCheck = checkIfAMoveCreatesCheckOnHuman(move, pieceLocations);
    });

    if (isCheck) {
      return true;
    }
  }

  if (pieceLocations.aiPawnH.captured === false) {
    calculateAiPawnPossibleMoves(
      pieceLocations.aiPawnH.row,
      pieceLocations.aiPawnH.column,
      oneTimeOnlyMoveFlags.aiPawnHInitialMoveEligible,
      pieceLocations
    ).forEach((move) => {
      isCheck = checkIfAMoveCreatesCheckOnHuman(move, pieceLocations);
    });

    if (isCheck) {
      return true;
    }
  }

  if (pieceLocations.aiRookA.captured === false) {
    calculateAiRookPossibleMoves(
      pieceLocations.aiRookA.row,
      pieceLocations.aiRookA.column,
      pieceLocations
    ).forEach((move) => {
      isCheck = checkIfAMoveCreatesCheckOnHuman(move, pieceLocations);
    });

    if (isCheck) {
      return true;
    }
  }

  if (pieceLocations.aiRookB.captured === false) {
    calculateAiRookPossibleMoves(
      pieceLocations.aiRookB.row,
      pieceLocations.aiRookB.column,
      pieceLocations
    ).forEach((move) => {
      isCheck = checkIfAMoveCreatesCheckOnHuman(move, pieceLocations);
    });

    if (isCheck) {
      return true;
    }
  }

  if (pieceLocations.aiKnightA.captured === false) {
    calculateAiKnightPossibleMoves(
      pieceLocations.aiKnightA.row,
      pieceLocations.aiKnightA.column,
      pieceLocations
    ).forEach((move) => {
      isCheck = checkIfAMoveCreatesCheckOnHuman(move, pieceLocations);
    });

    if (isCheck) {
      return true;
    }
  }

  if (pieceLocations.aiKnightB.captured === false) {
    calculateAiKnightPossibleMoves(
      pieceLocations.aiKnightB.row,
      pieceLocations.aiKnightB.column,
      pieceLocations
    ).forEach((move) => {
      isCheck = checkIfAMoveCreatesCheckOnHuman(move, pieceLocations);
    });

    if (isCheck) {
      return true;
    }
  }

  if (pieceLocations.aiBishopA.captured === false) {
    calculateAiBishopPossibleMoves(
      pieceLocations.aiBishopA.row,
      pieceLocations.aiBishopA.column,
      pieceLocations
    ).forEach((move) => {
      isCheck = checkIfAMoveCreatesCheckOnHuman(move, pieceLocations);
    });

    if (isCheck) {
      return true;
    }
  }

  if (pieceLocations.aiBishopB.captured === false) {
    calculateAiBishopPossibleMoves(
      pieceLocations.aiBishopB.row,
      pieceLocations.aiBishopB.column,
      pieceLocations
    ).forEach((move) => {
      isCheck = checkIfAMoveCreatesCheckOnHuman(move, pieceLocations);
    });

    if (isCheck) {
      return true;
    }
  }

  if (pieceLocations.aiQueen.captured === false) {
    calculateAiQueenPossibleMoves(
      pieceLocations.aiQueen.row,
      pieceLocations.aiQueen.column,
      pieceLocations
    ).forEach((move) => {
      isCheck = checkIfAMoveCreatesCheckOnHuman(move, pieceLocations);
    });

    if (isCheck) {
      return true;
    }
  }

  if (pieceLocations.aiKing.captured === false) {
    calculateAiKingPossibleMoves(
      pieceLocations.aiKing.row,
      pieceLocations.aiKing.column,
      oneTimeOnlyMoveFlags.aiCastleRookAEligible,
      oneTimeOnlyMoveFlags.aiCastleRookBEligible,
      pieceLocations
    ).forEach((move) => {
      isCheck = checkIfAMoveCreatesCheckOnHuman(move, pieceLocations);
    });

    if (isCheck) {
      return true;
    }
  }

  return false;
};

export default determineIfAnyPossibleMovesCreateCheckOnHuman;
