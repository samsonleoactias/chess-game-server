import { Piece, PieceLocations, PossibleMove } from "../../../../../types";

const checkIfAMoveCreatesCheckOnHuman = (
  move: PossibleMove,
  pieceLocations: PieceLocations
) => {
  if (
    move.location.row === pieceLocations.humanKing.row &&
    move.location.column === pieceLocations.humanKing.column
  ) {
    return true;
  }

  move.sideEffects?.forEach((sideEffect) => {
    if (
      sideEffect.row === pieceLocations.humanKing.row &&
      sideEffect.column === pieceLocations.humanKing.column
    ) {
      return true;
    }
  });

  return false;
};

export default checkIfAMoveCreatesCheckOnHuman;
