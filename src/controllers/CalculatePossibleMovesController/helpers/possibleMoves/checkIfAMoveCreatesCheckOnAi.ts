import { PieceLocations, PossibleMove } from "../../../../types/index.js";

const checkIfAMoveCreatesCheckOnAi = (
  move: PossibleMove,
  pieceLocations: PieceLocations
): boolean => {
  if (
    move.location.row === pieceLocations.aiKing.row &&
    move.location.column === pieceLocations.aiKing.column
  ) {
    return true;
  }

  let sideEffectCreatesCheck: boolean = false;

  move.sideEffects?.forEach((sideEffect): void => {
    if (
      sideEffect.row === pieceLocations.aiKing.row &&
      sideEffect.column === pieceLocations.aiKing.column
    ) {
      sideEffectCreatesCheck = true;
    }
  });

  return sideEffectCreatesCheck;
};

export default checkIfAMoveCreatesCheckOnAi;
