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

const determineIfAnyPossibleMovesCreateCheckOnAi = (
  pieceLocations: PieceLocations,
  movingPiece: Piece,
  possibleMove: PossibleMove,
  oneTimeOnlyMoveFlags: OneTimeOnlyMoveFlags
): boolean => {
  const pieceOnSquareCurrently: Piece = findWhatPieceIsOnASquare(
    pieceLocations,
    possibleMove.location.row,
    possibleMove.location.column
  );

  if (movingPiece === Piece.None) {
    throw Error("Moving piece cannot be Piece.None"); // TODO better errors
  }

  if (pieceOnSquareCurrently !== Piece.None) {
    pieceLocations[pieceOnSquareCurrently].captured = true;
  }

  pieceLocations[movingPiece].row = possibleMove.location.row;
  pieceLocations[movingPiece].column = possibleMove.location.column;

  let isCheck = false;

  if (pieceLocations.humanPawnA.captured === false) {
    calculateHumanPawnPossibleMoves(
      pieceLocations.humanPawnA.row,
      pieceLocations.humanPawnA.column,
      oneTimeOnlyMoveFlags.humanPawnAInitialMoveEligible,
      pieceLocations,
      Piece.HumanPawnA,
      oneTimeOnlyMoveFlags,
      false
    ).forEach((move): void => {
      isCheck = checkIfAMoveCreatesCheckOnAi(move, pieceLocations);
    });

    if (isCheck) {
      return true;
    }
  }

  if (pieceLocations.humanPawnB.captured === false) {
    calculateHumanPawnPossibleMoves(
      pieceLocations.humanPawnB.row,
      pieceLocations.humanPawnB.column,
      oneTimeOnlyMoveFlags.humanPawnBInitialMoveEligible,
      pieceLocations,
      Piece.HumanPawnB,
      oneTimeOnlyMoveFlags,
      false
    ).forEach((move): void => {
      isCheck = checkIfAMoveCreatesCheckOnAi(move, pieceLocations);
    });

    if (isCheck) {
      return true;
    }
  }

  if (pieceLocations.humanPawnC.captured === false) {
    calculateHumanPawnPossibleMoves(
      pieceLocations.humanPawnC.row,
      pieceLocations.humanPawnC.column,
      oneTimeOnlyMoveFlags.humanPawnCInitialMoveEligible,
      pieceLocations,
      Piece.HumanPawnC,
      oneTimeOnlyMoveFlags,
      false
    ).forEach((move): void => {
      isCheck = checkIfAMoveCreatesCheckOnAi(move, pieceLocations);
    });

    if (isCheck) {
      return true;
    }
  }

  if (pieceLocations.humanPawnD.captured === false) {
    calculateHumanPawnPossibleMoves(
      pieceLocations.humanPawnD.row,
      pieceLocations.humanPawnD.column,
      oneTimeOnlyMoveFlags.humanPawnDInitialMoveEligible,
      pieceLocations,
      Piece.HumanPawnD,
      oneTimeOnlyMoveFlags,
      false
    ).forEach((move): void => {
      isCheck = checkIfAMoveCreatesCheckOnAi(move, pieceLocations);
    });

    if (isCheck) {
      return true;
    }
  }

  if (pieceLocations.humanPawnE.captured === false) {
    calculateHumanPawnPossibleMoves(
      pieceLocations.humanPawnE.row,
      pieceLocations.humanPawnE.column,
      oneTimeOnlyMoveFlags.humanPawnEInitialMoveEligible,
      pieceLocations,
      Piece.HumanPawnE,
      oneTimeOnlyMoveFlags,
      false
    ).forEach((move): void => {
      isCheck = checkIfAMoveCreatesCheckOnAi(move, pieceLocations);
    });

    if (isCheck) {
      return true;
    }
  }

  if (pieceLocations.humanPawnF.captured === false) {
    calculateHumanPawnPossibleMoves(
      pieceLocations.humanPawnF.row,
      pieceLocations.humanPawnF.column,
      oneTimeOnlyMoveFlags.humanPawnFInitialMoveEligible,
      pieceLocations,
      Piece.HumanPawnF,
      oneTimeOnlyMoveFlags,
      false
    ).forEach((move): void => {
      isCheck = checkIfAMoveCreatesCheckOnAi(move, pieceLocations);
    });

    if (isCheck) {
      return true;
    }
  }

  if (pieceLocations.humanPawnG.captured === false) {
    calculateHumanPawnPossibleMoves(
      pieceLocations.humanPawnG.row,
      pieceLocations.humanPawnG.column,
      oneTimeOnlyMoveFlags.humanPawnGInitialMoveEligible,
      pieceLocations,
      Piece.HumanPawnG,
      oneTimeOnlyMoveFlags,
      false
    ).forEach((move): void => {
      isCheck = checkIfAMoveCreatesCheckOnAi(move, pieceLocations);
    });

    if (isCheck) {
      return true;
    }
  }

  if (pieceLocations.humanPawnH.captured === false) {
    calculateHumanPawnPossibleMoves(
      pieceLocations.humanPawnH.row,
      pieceLocations.humanPawnH.column,
      oneTimeOnlyMoveFlags.humanPawnHInitialMoveEligible,
      pieceLocations,
      Piece.HumanPawnH,
      oneTimeOnlyMoveFlags,
      false
    ).forEach((move): void => {
      isCheck = checkIfAMoveCreatesCheckOnAi(move, pieceLocations);
    });

    if (isCheck) {
      return true;
    }
  }

  if (pieceLocations.humanRookA.captured === false) {
    calculateHumanRookPossibleMoves(
      pieceLocations.humanRookA.row,
      pieceLocations.humanRookA.column,
      pieceLocations,
      Piece.HumanRookA,
      oneTimeOnlyMoveFlags,
      false
    ).forEach((move): void => {
      isCheck = checkIfAMoveCreatesCheckOnAi(move, pieceLocations);
    });

    if (isCheck) {
      return true;
    }
  }

  if (pieceLocations.humanRookB.captured === false) {
    calculateHumanRookPossibleMoves(
      pieceLocations.humanRookB.row,
      pieceLocations.humanRookB.column,
      pieceLocations,
      Piece.HumanRookB,
      oneTimeOnlyMoveFlags,
      false
    ).forEach((move): void => {
      isCheck = checkIfAMoveCreatesCheckOnAi(move, pieceLocations);
    });

    if (isCheck) {
      return true;
    }
  }

  if (pieceLocations.humanKnightA.captured === false) {
    calculateHumanKnightPossibleMoves(
      pieceLocations.humanKnightA.row,
      pieceLocations.humanKnightA.column,
      pieceLocations,
      Piece.HumanKnightA,
      oneTimeOnlyMoveFlags,
      false
    ).forEach((move): void => {
      isCheck = checkIfAMoveCreatesCheckOnAi(move, pieceLocations);
    });

    if (isCheck) {
      return true;
    }
  }

  if (pieceLocations.humanKnightB.captured === false) {
    calculateHumanKnightPossibleMoves(
      pieceLocations.humanKnightB.row,
      pieceLocations.humanKnightB.column,
      pieceLocations,
      Piece.HumanKnightB,
      oneTimeOnlyMoveFlags,
      false
    ).forEach((move): void => {
      isCheck = checkIfAMoveCreatesCheckOnAi(move, pieceLocations);
    });

    if (isCheck) {
      return true;
    }
  }

  if (pieceLocations.humanBishopA.captured === false) {
    calculateHumanBishopPossibleMoves(
      pieceLocations.humanBishopA.row,
      pieceLocations.humanBishopA.column,
      pieceLocations,
      Piece.HumanBishopA,
      oneTimeOnlyMoveFlags,
      false
    ).forEach((move): void => {
      isCheck = checkIfAMoveCreatesCheckOnAi(move, pieceLocations);
    });

    if (isCheck) {
      return true;
    }
  }

  if (pieceLocations.humanBishopB.captured === false) {
    calculateHumanBishopPossibleMoves(
      pieceLocations.humanBishopB.row,
      pieceLocations.humanBishopB.column,
      pieceLocations,
      Piece.HumanBishopB,
      oneTimeOnlyMoveFlags,
      false
    ).forEach((move): void => {
      isCheck = checkIfAMoveCreatesCheckOnAi(move, pieceLocations);
    });

    if (isCheck) {
      return true;
    }
  }

  if (pieceLocations.humanQueen.captured === false) {
    calculateHumanQueenPossibleMoves(
      pieceLocations.humanQueen.row,
      pieceLocations.humanQueen.column,
      pieceLocations,
      oneTimeOnlyMoveFlags,
      false
    ).forEach((move): void => {
      isCheck = checkIfAMoveCreatesCheckOnAi(move, pieceLocations);
    });

    if (isCheck) {
      return true;
    }
  }

  if (pieceLocations.humanKing.captured === false) {
    calculateHumanKingPossibleMoves(
      pieceLocations.humanKing.row,
      pieceLocations.humanKing.column,
      pieceLocations,
      oneTimeOnlyMoveFlags,
      false
    ).forEach((move): void => {
      isCheck = checkIfAMoveCreatesCheckOnAi(move, pieceLocations);
    });

    if (isCheck) {
      return true;
    }
  }

  return false;
};

export default determineIfAnyPossibleMovesCreateCheckOnAi;
