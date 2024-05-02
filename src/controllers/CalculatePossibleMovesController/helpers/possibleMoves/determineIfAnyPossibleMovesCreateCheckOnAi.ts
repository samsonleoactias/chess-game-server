import {
  OneTimeOnlyMoveFlags,
  Piece,
  PieceLocations,
  PossibleMove,
} from "../../../../types/index.js";
import calculateHumanBishopPossibleMoves from "./bishop/calculateHumanBishopPossibleMoves.js";
import calculateHumanKingPossibleMoves from "./king/calculateHumanKingPossibleMoves.js";
import calculateHumanKnightPossibleMoves from "./knight/calculateHumanKnightPossibleMoves.js";
import calculateHumanPawnPossibleMoves from "./pawn/calculateAiPawnPossibleMoves.js";
import calculateHumanQueenPossibleMoves from "./queen/calculateHumanQueenPossibleMoves.js";
import calculateHumanRookPossibleMoves from "./rook/calculateHumanRookPossibleMoves.js";
import checkIfAMoveCreatesCheckOnAi from "./checkIfAMoveCreatesCheckOnAi.js";
import findWhatPieceIsOnASquare from "../../../utils/findWhatPieceIsOnASquare.js";

// TODO rename to determineIfAnyPossibleMovesCapturesKing
const determineIfAnyPossibleMovesCreateCheckOnAi = (
  pieceLocations: PieceLocations,
  movingPiece: Piece,
  possibleMove: PossibleMove,
  oneTimeOnlyMoveFlags: OneTimeOnlyMoveFlags
): boolean => {
  // TODO why?
  const theoreticalPieceLocations = JSON.parse(JSON.stringify(pieceLocations));

  const pieceOnSquareCurrently: Piece = findWhatPieceIsOnASquare(
    theoreticalPieceLocations,
    possibleMove.location.row,
    possibleMove.location.column
  );

  if (movingPiece === Piece.None) {
    throw Error("Moving piece cannot be Piece.None"); // TODO better errors
  }

  if (pieceOnSquareCurrently !== Piece.None) {
    theoreticalPieceLocations[pieceOnSquareCurrently].captured = true;
  }

  theoreticalPieceLocations[movingPiece].row = possibleMove.location.row;
  theoreticalPieceLocations[movingPiece].column = possibleMove.location.column;

  let isCheck = false;

  if (theoreticalPieceLocations.humanPawnA.captured === false) {
    calculateHumanPawnPossibleMoves(
      theoreticalPieceLocations.humanPawnA.row,
      theoreticalPieceLocations.humanPawnA.column,
      oneTimeOnlyMoveFlags.humanPawnAInitialMoveEligible,
      theoreticalPieceLocations,
      Piece.HumanPawnA,
      oneTimeOnlyMoveFlags,
      false
    ).forEach((move): void => {
      isCheck = checkIfAMoveCreatesCheckOnAi(move, theoreticalPieceLocations);
    });

    if (isCheck) {
      return true;
    }
  }

  if (theoreticalPieceLocations.humanPawnB.captured === false) {
    calculateHumanPawnPossibleMoves(
      theoreticalPieceLocations.humanPawnB.row,
      theoreticalPieceLocations.humanPawnB.column,
      oneTimeOnlyMoveFlags.humanPawnBInitialMoveEligible,
      theoreticalPieceLocations,
      Piece.HumanPawnB,
      oneTimeOnlyMoveFlags,
      false
    ).forEach((move): void => {
      isCheck = checkIfAMoveCreatesCheckOnAi(move, theoreticalPieceLocations);
    });

    if (isCheck) {
      return true;
    }
  }

  if (theoreticalPieceLocations.humanPawnC.captured === false) {
    calculateHumanPawnPossibleMoves(
      theoreticalPieceLocations.humanPawnC.row,
      theoreticalPieceLocations.humanPawnC.column,
      oneTimeOnlyMoveFlags.humanPawnCInitialMoveEligible,
      theoreticalPieceLocations,
      Piece.HumanPawnC,
      oneTimeOnlyMoveFlags,
      false
    ).forEach((move): void => {
      isCheck = checkIfAMoveCreatesCheckOnAi(move, theoreticalPieceLocations);
    });

    if (isCheck) {
      return true;
    }
  }

  if (theoreticalPieceLocations.humanPawnD.captured === false) {
    calculateHumanPawnPossibleMoves(
      theoreticalPieceLocations.humanPawnD.row,
      theoreticalPieceLocations.humanPawnD.column,
      oneTimeOnlyMoveFlags.humanPawnDInitialMoveEligible,
      theoreticalPieceLocations,
      Piece.HumanPawnD,
      oneTimeOnlyMoveFlags,
      false
    ).forEach((move): void => {
      isCheck = checkIfAMoveCreatesCheckOnAi(move, theoreticalPieceLocations);
    });

    if (isCheck) {
      return true;
    }
  }

  if (theoreticalPieceLocations.humanPawnE.captured === false) {
    calculateHumanPawnPossibleMoves(
      theoreticalPieceLocations.humanPawnE.row,
      theoreticalPieceLocations.humanPawnE.column,
      oneTimeOnlyMoveFlags.humanPawnEInitialMoveEligible,
      theoreticalPieceLocations,
      Piece.HumanPawnE,
      oneTimeOnlyMoveFlags,
      false
    ).forEach((move): void => {
      isCheck = checkIfAMoveCreatesCheckOnAi(move, theoreticalPieceLocations);
    });

    if (isCheck) {
      return true;
    }
  }

  if (theoreticalPieceLocations.humanPawnF.captured === false) {
    calculateHumanPawnPossibleMoves(
      theoreticalPieceLocations.humanPawnF.row,
      theoreticalPieceLocations.humanPawnF.column,
      oneTimeOnlyMoveFlags.humanPawnFInitialMoveEligible,
      theoreticalPieceLocations,
      Piece.HumanPawnF,
      oneTimeOnlyMoveFlags,
      false
    ).forEach((move): void => {
      isCheck = checkIfAMoveCreatesCheckOnAi(move, theoreticalPieceLocations);
    });

    if (isCheck) {
      return true;
    }
  }

  if (theoreticalPieceLocations.humanPawnG.captured === false) {
    calculateHumanPawnPossibleMoves(
      theoreticalPieceLocations.humanPawnG.row,
      theoreticalPieceLocations.humanPawnG.column,
      oneTimeOnlyMoveFlags.humanPawnGInitialMoveEligible,
      theoreticalPieceLocations,
      Piece.HumanPawnG,
      oneTimeOnlyMoveFlags,
      false
    ).forEach((move): void => {
      isCheck = checkIfAMoveCreatesCheckOnAi(move, theoreticalPieceLocations);
    });

    if (isCheck) {
      return true;
    }
  }

  if (theoreticalPieceLocations.humanPawnH.captured === false) {
    calculateHumanPawnPossibleMoves(
      theoreticalPieceLocations.humanPawnH.row,
      theoreticalPieceLocations.humanPawnH.column,
      oneTimeOnlyMoveFlags.humanPawnHInitialMoveEligible,
      theoreticalPieceLocations,
      Piece.HumanPawnH,
      oneTimeOnlyMoveFlags,
      false
    ).forEach((move): void => {
      isCheck = checkIfAMoveCreatesCheckOnAi(move, theoreticalPieceLocations);
    });

    if (isCheck) {
      return true;
    }
  }

  if (theoreticalPieceLocations.humanRookA.captured === false) {
    calculateHumanRookPossibleMoves(
      theoreticalPieceLocations.humanRookA.row,
      theoreticalPieceLocations.humanRookA.column,
      theoreticalPieceLocations,
      Piece.HumanRookA,
      oneTimeOnlyMoveFlags,
      false
    ).forEach((move): void => {
      isCheck = checkIfAMoveCreatesCheckOnAi(move, theoreticalPieceLocations);
    });

    if (isCheck) {
      return true;
    }
  }

  if (theoreticalPieceLocations.humanRookB.captured === false) {
    calculateHumanRookPossibleMoves(
      theoreticalPieceLocations.humanRookB.row,
      theoreticalPieceLocations.humanRookB.column,
      theoreticalPieceLocations,
      Piece.HumanRookB,
      oneTimeOnlyMoveFlags,
      false
    ).forEach((move): void => {
      isCheck = checkIfAMoveCreatesCheckOnAi(move, theoreticalPieceLocations);
    });

    if (isCheck) {
      return true;
    }
  }

  if (theoreticalPieceLocations.humanKnightA.captured === false) {
    calculateHumanKnightPossibleMoves(
      theoreticalPieceLocations.humanKnightA.row,
      theoreticalPieceLocations.humanKnightA.column,
      theoreticalPieceLocations,
      Piece.HumanKnightA,
      oneTimeOnlyMoveFlags,
      false
    ).forEach((move): void => {
      isCheck = checkIfAMoveCreatesCheckOnAi(move, theoreticalPieceLocations);
    });

    if (isCheck) {
      return true;
    }
  }

  if (theoreticalPieceLocations.humanKnightB.captured === false) {
    calculateHumanKnightPossibleMoves(
      theoreticalPieceLocations.humanKnightB.row,
      theoreticalPieceLocations.humanKnightB.column,
      theoreticalPieceLocations,
      Piece.HumanKnightB,
      oneTimeOnlyMoveFlags,
      false
    ).forEach((move): void => {
      isCheck = checkIfAMoveCreatesCheckOnAi(move, theoreticalPieceLocations);
    });

    if (isCheck) {
      return true;
    }
  }

  if (theoreticalPieceLocations.humanBishopA.captured === false) {
    calculateHumanBishopPossibleMoves(
      theoreticalPieceLocations.humanBishopA.row,
      theoreticalPieceLocations.humanBishopA.column,
      theoreticalPieceLocations,
      Piece.HumanBishopA,
      oneTimeOnlyMoveFlags,
      false
    ).forEach((move): void => {
      isCheck = checkIfAMoveCreatesCheckOnAi(move, theoreticalPieceLocations);
    });

    if (isCheck) {
      return true;
    }
  }

  if (theoreticalPieceLocations.humanBishopB.captured === false) {
    calculateHumanBishopPossibleMoves(
      theoreticalPieceLocations.humanBishopB.row,
      theoreticalPieceLocations.humanBishopB.column,
      theoreticalPieceLocations,
      Piece.HumanBishopB,
      oneTimeOnlyMoveFlags,
      false
    ).forEach((move): void => {
      isCheck = checkIfAMoveCreatesCheckOnAi(move, theoreticalPieceLocations);
    });

    if (isCheck) {
      return true;
    }
  }

  if (theoreticalPieceLocations.humanQueen.captured === false) {
    calculateHumanQueenPossibleMoves(
      theoreticalPieceLocations.humanQueen.row,
      theoreticalPieceLocations.humanQueen.column,
      theoreticalPieceLocations,
      oneTimeOnlyMoveFlags,
      false
    ).forEach((move): void => {
      isCheck = checkIfAMoveCreatesCheckOnAi(move, theoreticalPieceLocations);
    });

    if (isCheck) {
      return true;
    }
  }

  if (theoreticalPieceLocations.humanKing.captured === false) {
    calculateHumanKingPossibleMoves(
      theoreticalPieceLocations.humanKing.row,
      theoreticalPieceLocations.humanKing.column,
      theoreticalPieceLocations,
      oneTimeOnlyMoveFlags,
      false
    ).forEach((move): void => {
      isCheck = checkIfAMoveCreatesCheckOnAi(move, theoreticalPieceLocations);
    });

    if (isCheck) {
      return true;
    }
  }

  return false;
};

export default determineIfAnyPossibleMovesCreateCheckOnAi;
