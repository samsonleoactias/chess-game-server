import {
  OneTimeOnlyMoveFlags,
  Piece,
  PieceLocations,
  PossibleMove,
} from "../../../../types/index.js";
import calculateHumanBishopPossibleMoves from "./bishop/calculateHumanBishopPossibleMoves.js";
import calculateHumanKingPossibleMoves from "./king/calculateHumanKingPossibleMoves.js";
import calculateHumanKnightPossibleMoves from "./knight/calculateHumanKnightPossibleMoves.js";
import calculateHumanPawnPossibleMoves from "./pawn/calculateHumanPawnPossibleMoves.js";
import calculateHumanQueenPossibleMoves from "./queen/calculateHumanQueenPossibleMoves.js";
import calculateHumanRookPossibleMoves from "./rook/calculateHumanRookPossibleMoves.js";
import checkIfAMoveCreatesCheckOnAi from "./checkIfAMoveCreatesCheckOnAi.js";
import findWhatPieceIsOnASquare from "../../../utils/findWhatPieceIsOnASquare.js";

const determineIfAnyPossibleMovesCaptureAiKing = (
  pieceLocations: PieceLocations,
  oneTimeOnlyMoveFlags: OneTimeOnlyMoveFlags,
  movingPiece?: Piece,
  possibleMove?: PossibleMove,
  aiCastleCheck?: boolean
): boolean => {
  // TODO why?
  let theoreticalPieceLocations: PieceLocations = JSON.parse(
    JSON.stringify(pieceLocations)
  );

  if (movingPiece && possibleMove && movingPiece !== Piece.None) {
    const pieceOnSquareCurrently: Piece = findWhatPieceIsOnASquare(
      theoreticalPieceLocations,
      possibleMove.location.row,
      possibleMove.location.column
    );

    if (pieceOnSquareCurrently !== Piece.None) {
      theoreticalPieceLocations[pieceOnSquareCurrently].captured = true;
    }

    theoreticalPieceLocations.matrix[
      theoreticalPieceLocations[movingPiece].row
    ][theoreticalPieceLocations[movingPiece].column] = false;
    theoreticalPieceLocations[movingPiece].row = possibleMove.location.row;
    theoreticalPieceLocations[movingPiece].column =
      possibleMove.location.column;
    theoreticalPieceLocations.matrix[possibleMove.location.row][
      possibleMove.location.column
    ] = true;
  } else if (
    (!movingPiece && possibleMove) ||
    (movingPiece && !possibleMove) ||
    movingPiece === Piece.None
  ) {
    throw Error("Moving piece cannot be Piece.None"); // TODO better errors
  }

  let isCheck = false;

  if (!theoreticalPieceLocations.humanPawnA.captured) {
    calculateHumanPawnPossibleMoves(
      theoreticalPieceLocations.humanPawnA.row,
      theoreticalPieceLocations.humanPawnA.column,
      theoreticalPieceLocations,
      Piece.HumanPawnA,
      oneTimeOnlyMoveFlags.humanPawnAInitialMoveEligible,
      oneTimeOnlyMoveFlags,
      false
    ).forEach((move): void => {
      if (checkIfAMoveCreatesCheckOnAi(move, theoreticalPieceLocations)) {
        isCheck = true;
      }
    });

    if (isCheck) {
      return true;
    }
  }

  if (!theoreticalPieceLocations.humanPawnB.captured) {
    calculateHumanPawnPossibleMoves(
      theoreticalPieceLocations.humanPawnB.row,
      theoreticalPieceLocations.humanPawnB.column,
      theoreticalPieceLocations,
      Piece.HumanPawnB,
      oneTimeOnlyMoveFlags.humanPawnAInitialMoveEligible,
      oneTimeOnlyMoveFlags,
      false
    ).forEach((move): void => {
      if (checkIfAMoveCreatesCheckOnAi(move, theoreticalPieceLocations)) {
        isCheck = true;
      }
    });

    if (isCheck) {
      return true;
    }
  }

  if (!theoreticalPieceLocations.humanPawnC.captured) {
    calculateHumanPawnPossibleMoves(
      theoreticalPieceLocations.humanPawnC.row,
      theoreticalPieceLocations.humanPawnC.column,
      theoreticalPieceLocations,
      Piece.HumanPawnC,
      oneTimeOnlyMoveFlags.humanPawnAInitialMoveEligible,
      oneTimeOnlyMoveFlags,
      false
    ).forEach((move): void => {
      if (checkIfAMoveCreatesCheckOnAi(move, theoreticalPieceLocations)) {
        isCheck = true;
      }
    });

    if (isCheck) {
      return true;
    }
  }

  if (!theoreticalPieceLocations.humanPawnD.captured) {
    calculateHumanPawnPossibleMoves(
      theoreticalPieceLocations.humanPawnD.row,
      theoreticalPieceLocations.humanPawnD.column,
      theoreticalPieceLocations,
      Piece.HumanPawnD,
      oneTimeOnlyMoveFlags.humanPawnAInitialMoveEligible,
      oneTimeOnlyMoveFlags,
      false
    ).forEach((move): void => {
      if (checkIfAMoveCreatesCheckOnAi(move, theoreticalPieceLocations)) {
        isCheck = true;
      }
    });

    if (isCheck) {
      return true;
    }
  }

  if (!theoreticalPieceLocations.humanPawnE.captured) {
    calculateHumanPawnPossibleMoves(
      theoreticalPieceLocations.humanPawnE.row,
      theoreticalPieceLocations.humanPawnE.column,
      theoreticalPieceLocations,
      Piece.HumanPawnE,
      oneTimeOnlyMoveFlags.humanPawnAInitialMoveEligible,
      oneTimeOnlyMoveFlags,
      false
    ).forEach((move): void => {
      if (checkIfAMoveCreatesCheckOnAi(move, theoreticalPieceLocations)) {
        isCheck = true;
      }
    });

    if (isCheck) {
      return true;
    }
  }

  if (!theoreticalPieceLocations.humanPawnF.captured) {
    calculateHumanPawnPossibleMoves(
      theoreticalPieceLocations.humanPawnF.row,
      theoreticalPieceLocations.humanPawnF.column,
      theoreticalPieceLocations,
      Piece.HumanPawnF,
      oneTimeOnlyMoveFlags.humanPawnAInitialMoveEligible,
      oneTimeOnlyMoveFlags,
      false
    ).forEach((move): void => {
      if (checkIfAMoveCreatesCheckOnAi(move, theoreticalPieceLocations)) {
        isCheck = true;
      }
    });

    if (isCheck) {
      return true;
    }
  }

  if (!theoreticalPieceLocations.humanPawnG.captured) {
    calculateHumanPawnPossibleMoves(
      theoreticalPieceLocations.humanPawnG.row,
      theoreticalPieceLocations.humanPawnG.column,
      theoreticalPieceLocations,
      Piece.HumanPawnG,
      oneTimeOnlyMoveFlags.humanPawnAInitialMoveEligible,
      oneTimeOnlyMoveFlags,
      false
    ).forEach((move): void => {
      if (checkIfAMoveCreatesCheckOnAi(move, theoreticalPieceLocations)) {
        isCheck = true;
      }
    });

    if (isCheck) {
      return true;
    }
  }

  if (!theoreticalPieceLocations.humanPawnH.captured) {
    calculateHumanPawnPossibleMoves(
      theoreticalPieceLocations.humanPawnH.row,
      theoreticalPieceLocations.humanPawnH.column,
      theoreticalPieceLocations,
      Piece.HumanPawnH,
      oneTimeOnlyMoveFlags.humanPawnAInitialMoveEligible,
      oneTimeOnlyMoveFlags,
      false
    ).forEach((move): void => {
      if (checkIfAMoveCreatesCheckOnAi(move, theoreticalPieceLocations)) {
        isCheck = true;
      }
    });

    if (isCheck) {
      return true;
    }
  }

  if (!theoreticalPieceLocations.humanRookA.captured) {
    calculateHumanRookPossibleMoves(
      theoreticalPieceLocations.humanRookA.row,
      theoreticalPieceLocations.humanRookA.column,
      theoreticalPieceLocations,
      Piece.HumanRookA,
      oneTimeOnlyMoveFlags,
      false
    ).forEach((move): void => {
      if (checkIfAMoveCreatesCheckOnAi(move, theoreticalPieceLocations)) {
        isCheck = true;
      }
    });

    if (isCheck) {
      return true;
    }
  }

  if (!theoreticalPieceLocations.humanRookB.captured) {
    calculateHumanRookPossibleMoves(
      theoreticalPieceLocations.humanRookB.row,
      theoreticalPieceLocations.humanRookB.column,
      theoreticalPieceLocations,
      Piece.HumanRookB,
      oneTimeOnlyMoveFlags,
      false
    ).forEach((move): void => {
      if (checkIfAMoveCreatesCheckOnAi(move, theoreticalPieceLocations)) {
        isCheck = true;
      }
    });

    if (isCheck) {
      return true;
    }
  }

  if (!theoreticalPieceLocations.humanKnightA.captured) {
    calculateHumanKnightPossibleMoves(
      theoreticalPieceLocations.humanKnightA.row,
      theoreticalPieceLocations.humanKnightA.column,
      theoreticalPieceLocations,
      Piece.HumanKnightA,
      oneTimeOnlyMoveFlags,
      false
    ).forEach((move): void => {
      if (checkIfAMoveCreatesCheckOnAi(move, theoreticalPieceLocations)) {
        isCheck = true;
      }
    });

    if (isCheck) {
      return true;
    }
  }

  if (!theoreticalPieceLocations.humanKnightB.captured) {
    calculateHumanKnightPossibleMoves(
      theoreticalPieceLocations.humanKnightB.row,
      theoreticalPieceLocations.humanKnightB.column,
      theoreticalPieceLocations,
      Piece.HumanKnightB,
      oneTimeOnlyMoveFlags,
      false
    ).forEach((move): void => {
      if (checkIfAMoveCreatesCheckOnAi(move, theoreticalPieceLocations)) {
        isCheck = true;
      }
    });

    if (isCheck) {
      return true;
    }
  }

  if (!theoreticalPieceLocations.humanBishopA.captured) {
    calculateHumanBishopPossibleMoves(
      theoreticalPieceLocations.humanBishopA.row,
      theoreticalPieceLocations.humanBishopA.column,
      theoreticalPieceLocations,
      Piece.HumanBishopA,
      oneTimeOnlyMoveFlags,
      false
    ).forEach((move): void => {
      if (checkIfAMoveCreatesCheckOnAi(move, theoreticalPieceLocations)) {
        isCheck = true;
      }
    });

    if (isCheck) {
      return true;
    }
  }

  if (!theoreticalPieceLocations.humanBishopB.captured) {
    calculateHumanBishopPossibleMoves(
      theoreticalPieceLocations.humanBishopB.row,
      theoreticalPieceLocations.humanBishopB.column,
      theoreticalPieceLocations,
      Piece.HumanBishopB,
      oneTimeOnlyMoveFlags,
      false
    ).forEach((move): void => {
      if (checkIfAMoveCreatesCheckOnAi(move, theoreticalPieceLocations)) {
        isCheck = true;
      }
    });

    if (isCheck) {
      return true;
    }
  }

  if (!theoreticalPieceLocations.humanQueen.captured) {
    calculateHumanQueenPossibleMoves(
      theoreticalPieceLocations.humanQueen.row,
      theoreticalPieceLocations.humanQueen.column,
      theoreticalPieceLocations,
      oneTimeOnlyMoveFlags,
      false
    ).forEach((move): void => {
      if (checkIfAMoveCreatesCheckOnAi(move, theoreticalPieceLocations)) {
        isCheck = true;
      }
    });

    if (isCheck) {
      return true;
    }
  }

  if (!theoreticalPieceLocations.humanKing.captured) {
    calculateHumanKingPossibleMoves(
      theoreticalPieceLocations.humanKing.row,
      theoreticalPieceLocations.humanKing.column,
      theoreticalPieceLocations,
      oneTimeOnlyMoveFlags,
      false,
      aiCastleCheck
    ).forEach((move): void => {
      if (checkIfAMoveCreatesCheckOnAi(move, theoreticalPieceLocations)) {
        isCheck = true;
      }
    });

    if (isCheck) {
      return true;
    }
  }

  return false;
};

export default determineIfAnyPossibleMovesCaptureAiKing;
