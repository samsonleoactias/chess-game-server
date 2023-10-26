import { PieceLocations, PossibleMove } from "../../../../types";

const checkIfAMoveCreatesCheckOnHuman = (
  move: PossibleMove,
  pieceLocations: PieceLocations
): boolean => {
  if (
    move.location.row === pieceLocations.humanKing.row &&
    move.location.column === pieceLocations.humanKing.column
  ) {
    return true;
  }

  let sideEffectCreatesCheck: boolean = false;

  move.sideEffects?.forEach((sideEffect): void => {
    if (
      sideEffect.row === pieceLocations.humanKing.row &&
      sideEffect.column === pieceLocations.humanKing.column
    ) {
      sideEffectCreatesCheck = true;
    }
  });

  return sideEffectCreatesCheck;
};

export default checkIfAMoveCreatesCheckOnHuman;
