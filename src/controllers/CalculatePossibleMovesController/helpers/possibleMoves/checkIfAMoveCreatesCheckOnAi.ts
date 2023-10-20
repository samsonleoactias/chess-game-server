import { Piece, PieceLocations, PossibleMove } from "../../../../types";

const checkIfAMoveCreatesCheckOnAi = (
  move: PossibleMove,
  pieceLocations: PieceLocations
) => {
  if (
    move.location.row === pieceLocations.aiKing.row &&
    move.location.column === pieceLocations.aiKing.column
  ) {
    return true;
  }

  move.sideEffects?.forEach((sideEffect) => {
    if (
      sideEffect.row === pieceLocations.aiKing.row &&
      sideEffect.column === pieceLocations.aiKing.column
    ) {
      return true;
    }
  });

  return false;
};

export default checkIfAMoveCreatesCheckOnAi;
