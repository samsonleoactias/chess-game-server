import {
  OneTimeOnlyMoveFlags,
  Piece,
  PieceLocations,
  PossibleMove,
} from "../../../../types/index.js";
import calculateAiBishopPossibleMoves from "./bishop/calculateAiBishopPossibleMoves.js";
import calculateAiKingPossibleMoves from "./king/calculateAiKingPossibleMoves.js";
import calculateAiKnightPossibleMoves from "./knight/calculateAiKnightPossibleMoves.js";
import calculateAiPawnPossibleMoves from "./pawn/calculateHumanPawnPossibleMoves.js";
import calculateAiQueenPossibleMoves from "./queen/calculateAiQueenPossibleMoves.js";
import calculateAiRookPossibleMoves from "./rook/calculateAiRookPossibleMoves.js";
import checkIfAMoveCapturesHumanKing from "./checkIfAMoveCapturesHumanKing.js";
import findWhatPieceIsOnASquare from "../../../utils/findWhatPieceIsOnASquare.js";

const determineIfAnyPossibleMovesCreateCheckOnHuman = (
  pieceLocations: PieceLocations,
  movingPiece: Piece,
  possibleMove: PossibleMove,
  oneTimeOnlyMoveFlags: OneTimeOnlyMoveFlags
): boolean => {
  if (movingPiece === Piece.None) {
    throw Error("Moving piece cannot be Piece.None"); // TODO better errors
  }

  const theoreticalPieceLocations = JSON.parse(JSON.stringify(pieceLocations));

  const pieceOnSquareCurrently = findWhatPieceIsOnASquare(
    theoreticalPieceLocations,
    possibleMove.location.row,
    possibleMove.location.column
  );

  if (pieceOnSquareCurrently !== Piece.None) {
    theoreticalPieceLocations[pieceOnSquareCurrently].captured = true;
  }

  theoreticalPieceLocations[movingPiece].row = possibleMove.location.row;
  theoreticalPieceLocations[movingPiece].column = possibleMove.location.column;

  let isCheck = false;

  if (theoreticalPieceLocations.aiPawnA.captured === false) {
    calculateAiPawnPossibleMoves(
      theoreticalPieceLocations.aiPawnA.row,
      theoreticalPieceLocations.aiPawnA.column,
      theoreticalPieceLocations,
      Piece.AiPawnA,
      oneTimeOnlyMoveFlags.aiPawnAInitialMoveEligible,
      oneTimeOnlyMoveFlags,
      false
    ).forEach((move): void => {
      isCheck = checkIfAMoveCapturesHumanKing(move, theoreticalPieceLocations);
    });

    if (isCheck) {
      return true;
    }
  }

  if (theoreticalPieceLocations.aiPawnB.captured === false) {
    calculateAiPawnPossibleMoves(
      theoreticalPieceLocations.aiPawnB.row,
      theoreticalPieceLocations.aiPawnB.column,
      theoreticalPieceLocations,
      Piece.AiPawnB,
      oneTimeOnlyMoveFlags.aiPawnBInitialMoveEligible,
      oneTimeOnlyMoveFlags,
      false
    ).forEach((move): void => {
      isCheck = checkIfAMoveCapturesHumanKing(move, theoreticalPieceLocations);
    });

    if (isCheck) {
      return true;
    }
  }

  if (theoreticalPieceLocations.aiPawnC.captured === false) {
    calculateAiPawnPossibleMoves(
      theoreticalPieceLocations.aiPawnC.row,
      theoreticalPieceLocations.aiPawnC.column,
      theoreticalPieceLocations,
      Piece.AiPawnC,
      oneTimeOnlyMoveFlags.aiPawnCInitialMoveEligible,
      oneTimeOnlyMoveFlags,
      false
    ).forEach((move): void => {
      isCheck = checkIfAMoveCapturesHumanKing(move, theoreticalPieceLocations);
    });

    if (isCheck) {
      return true;
    }
  }

  if (theoreticalPieceLocations.aiPawnD.captured === false) {
    calculateAiPawnPossibleMoves(
      theoreticalPieceLocations.aiPawnD.row,
      theoreticalPieceLocations.aiPawnD.column,
      theoreticalPieceLocations,
      Piece.AiPawnD,
      oneTimeOnlyMoveFlags.aiPawnDInitialMoveEligible,
      oneTimeOnlyMoveFlags,
      false
    ).forEach((move): void => {
      isCheck = checkIfAMoveCapturesHumanKing(move, theoreticalPieceLocations);
    });

    if (isCheck) {
      return true;
    }
  }

  if (theoreticalPieceLocations.aiPawnE.captured === false) {
    calculateAiPawnPossibleMoves(
      theoreticalPieceLocations.aiPawnE.row,
      theoreticalPieceLocations.aiPawnE.column,
      theoreticalPieceLocations,
      Piece.AiPawnE,
      oneTimeOnlyMoveFlags.aiPawnEInitialMoveEligible,
      oneTimeOnlyMoveFlags,
      false
    ).forEach((move): void => {
      isCheck = checkIfAMoveCapturesHumanKing(move, theoreticalPieceLocations);
    });

    if (isCheck) {
      return true;
    }
  }

  if (theoreticalPieceLocations.aiPawnF.captured === false) {
    calculateAiPawnPossibleMoves(
      theoreticalPieceLocations.aiPawnF.row,
      theoreticalPieceLocations.aiPawnF.column,
      theoreticalPieceLocations,
      Piece.AiPawnF,
      oneTimeOnlyMoveFlags.aiPawnFInitialMoveEligible,
      oneTimeOnlyMoveFlags,
      false
    ).forEach((move): void => {
      isCheck = checkIfAMoveCapturesHumanKing(move, theoreticalPieceLocations);
    });

    if (isCheck) {
      return true;
    }
  }

  if (theoreticalPieceLocations.aiPawnG.captured === false) {
    calculateAiPawnPossibleMoves(
      theoreticalPieceLocations.aiPawnG.row,
      theoreticalPieceLocations.aiPawnG.column,
      theoreticalPieceLocations,
      Piece.AiPawnG,
      oneTimeOnlyMoveFlags.aiPawnGInitialMoveEligible,
      oneTimeOnlyMoveFlags,
      false
    ).forEach((move): void => {
      isCheck = checkIfAMoveCapturesHumanKing(move, theoreticalPieceLocations);
    });

    if (isCheck) {
      return true;
    }
  }

  if (theoreticalPieceLocations.aiPawnH.captured === false) {
    calculateAiPawnPossibleMoves(
      theoreticalPieceLocations.aiPawnH.row,
      theoreticalPieceLocations.aiPawnH.column,
      theoreticalPieceLocations,
      Piece.AiPawnH,
      oneTimeOnlyMoveFlags.aiPawnHInitialMoveEligible,
      oneTimeOnlyMoveFlags,
      false
    ).forEach((move): void => {
      isCheck = checkIfAMoveCapturesHumanKing(move, theoreticalPieceLocations);
    });

    if (isCheck) {
      return true;
    }
  }

  if (theoreticalPieceLocations.aiRookA.captured === false) {
    calculateAiRookPossibleMoves(
      theoreticalPieceLocations.aiRookA.row,
      theoreticalPieceLocations.aiRookA.column,
      theoreticalPieceLocations,
      Piece.AiRookA,
      oneTimeOnlyMoveFlags,
      false
    ).forEach((move): void => {
      isCheck = checkIfAMoveCapturesHumanKing(move, theoreticalPieceLocations);
    });

    if (isCheck) {
      return true;
    }
  }

  if (theoreticalPieceLocations.aiRookB.captured === false) {
    calculateAiRookPossibleMoves(
      theoreticalPieceLocations.aiRookB.row,
      theoreticalPieceLocations.aiRookB.column,
      theoreticalPieceLocations,
      Piece.AiRookB,
      oneTimeOnlyMoveFlags,
      false
    ).forEach((move): void => {
      isCheck = checkIfAMoveCapturesHumanKing(move, theoreticalPieceLocations);
    });

    if (isCheck) {
      return true;
    }
  }

  if (theoreticalPieceLocations.aiKnightA.captured === false) {
    calculateAiKnightPossibleMoves(
      theoreticalPieceLocations.aiKnightA.row,
      theoreticalPieceLocations.aiKnightA.column,
      theoreticalPieceLocations,
      Piece.AiKnightA,
      oneTimeOnlyMoveFlags,
      false
    ).forEach((move): void => {
      isCheck = checkIfAMoveCapturesHumanKing(move, theoreticalPieceLocations);
    });

    if (isCheck) {
      return true;
    }
  }

  if (theoreticalPieceLocations.aiKnightB.captured === false) {
    calculateAiKnightPossibleMoves(
      theoreticalPieceLocations.aiKnightB.row,
      theoreticalPieceLocations.aiKnightB.column,
      theoreticalPieceLocations,
      Piece.AiKnightB,
      oneTimeOnlyMoveFlags,
      false
    ).forEach((move): void => {
      isCheck = checkIfAMoveCapturesHumanKing(move, theoreticalPieceLocations);
    });

    if (isCheck) {
      return true;
    }
  }

  if (theoreticalPieceLocations.aiBishopA.captured === false) {
    calculateAiBishopPossibleMoves(
      theoreticalPieceLocations.aiBishopA.row,
      theoreticalPieceLocations.aiBishopA.column,
      theoreticalPieceLocations,
      Piece.AiBishopA,
      oneTimeOnlyMoveFlags,
      false
    ).forEach((move): void => {
      isCheck = checkIfAMoveCapturesHumanKing(move, theoreticalPieceLocations);
    });

    if (isCheck) {
      return true;
    }
  }

  if (theoreticalPieceLocations.aiBishopB.captured === false) {
    calculateAiBishopPossibleMoves(
      theoreticalPieceLocations.aiBishopB.row,
      theoreticalPieceLocations.aiBishopB.column,
      theoreticalPieceLocations,
      Piece.AiBishopB,
      oneTimeOnlyMoveFlags,
      false
    ).forEach((move): void => {
      isCheck = checkIfAMoveCapturesHumanKing(move, theoreticalPieceLocations);
    });

    if (isCheck) {
      return true;
    }
  }

  if (theoreticalPieceLocations.aiQueen.captured === false) {
    calculateAiQueenPossibleMoves(
      theoreticalPieceLocations.aiQueen.row,
      theoreticalPieceLocations.aiQueen.column,
      theoreticalPieceLocations,
      oneTimeOnlyMoveFlags,
      false
    ).forEach((move): void => {
      isCheck = checkIfAMoveCapturesHumanKing(move, theoreticalPieceLocations);
    });

    if (isCheck) {
      return true;
    }
  }

  if (theoreticalPieceLocations.aiKing.captured === false) {
    calculateAiKingPossibleMoves(
      theoreticalPieceLocations.aiKing.row,
      theoreticalPieceLocations.aiKing.column,
      theoreticalPieceLocations,
      oneTimeOnlyMoveFlags,
      false
    ).forEach((move): void => {
      isCheck = checkIfAMoveCapturesHumanKing(move, theoreticalPieceLocations);
    });

    if (isCheck) {
      return true;
    }
  }

  return false;
};

export default determineIfAnyPossibleMovesCreateCheckOnHuman;
