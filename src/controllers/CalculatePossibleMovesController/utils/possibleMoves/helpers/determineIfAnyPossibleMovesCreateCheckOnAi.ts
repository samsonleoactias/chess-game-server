import {
  OneTimeOnlyMoveFlags,
  Piece,
  PieceLocations,
  PossibleMove,
} from "../../../../../types";
import calculateHumanBishopPossibleMoves from "../bishop/calculateHumanBishopPossibleMoves";
import calculateHumanKingPossibleMoves from "../king/calculateHumanKingPossibleMoves";
import calculateHumanKnightPossibleMoves from "../knight/calculateHumanKnightPossibleMoves";
import calculateHumanPawnPossibleMoves from "../pawn/calculateHumanPawnPossibleMoves";
import calculateHumanQueenPossibleMoves from "../queen/calculateHumanQueenPossibleMoves";
import calculateHumanRookPossibleMoves from "../rook/calculateHumanRookPossibleMoves";
import checkIfAMoveCreatesCheckOnAi from "./checkIfAMoveCreatesCheckOnAi";
import findWhatPieceIsOnASquare from "../../../../helpers/findWhatPieceIsOnASquare";

const determineIfAnyPossibleMovesCreateCheckOnAi = (
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

  if (pieceLocations.humanPawnA.captured === false) {
    calculateHumanPawnPossibleMoves(
      pieceLocations.humanPawnA.row,
      pieceLocations.humanPawnA.column,
      pieceLocations,
      Piece.HumanPawnA,
      oneTimeOnlyMoveFlags.humanPawnAInitialMoveEligible,
      oneTimeOnlyMoveFlags,
      false
    ).forEach((move) => {
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
      pieceLocations,
      Piece.HumanPawnB,
      oneTimeOnlyMoveFlags.humanPawnBInitialMoveEligible,
      oneTimeOnlyMoveFlags,
      false
    ).forEach((move) => {
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
      pieceLocations,
      Piece.HumanPawnC,
      oneTimeOnlyMoveFlags.humanPawnCInitialMoveEligible,
      oneTimeOnlyMoveFlags,
      false
    ).forEach((move) => {
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
      pieceLocations,
      Piece.HumanPawnD,
      oneTimeOnlyMoveFlags.humanPawnDInitialMoveEligible,
      oneTimeOnlyMoveFlags,
      false
    ).forEach((move) => {
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
      pieceLocations,
      Piece.HumanPawnE,
      oneTimeOnlyMoveFlags.humanPawnEInitialMoveEligible,
      oneTimeOnlyMoveFlags,
      false
    ).forEach((move) => {
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
      pieceLocations,
      Piece.HumanPawnF,
      oneTimeOnlyMoveFlags.humanPawnFInitialMoveEligible,
      oneTimeOnlyMoveFlags,
      false
    ).forEach((move) => {
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
      pieceLocations,
      Piece.HumanPawnG,
      oneTimeOnlyMoveFlags.humanPawnGInitialMoveEligible,
      oneTimeOnlyMoveFlags,
      false
    ).forEach((move) => {
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
      pieceLocations,
      Piece.HumanPawnH,
      oneTimeOnlyMoveFlags.humanPawnHInitialMoveEligible,
      oneTimeOnlyMoveFlags,
      false
    ).forEach((move) => {
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
    ).forEach((move) => {
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
    ).forEach((move) => {
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
    ).forEach((move) => {
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
    ).forEach((move) => {
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
    ).forEach((move) => {
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
    ).forEach((move) => {
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
    ).forEach((move) => {
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
    ).forEach((move) => {
      isCheck = checkIfAMoveCreatesCheckOnAi(move, pieceLocations);
    });

    if (isCheck) {
      return true;
    }
  }

  return false;
};

export default determineIfAnyPossibleMovesCreateCheckOnAi;
