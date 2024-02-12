import Piece from "./Piece.js";

type PossibleMove = {
  location: {
    row: number;
    column: number;
  };
  sideEffects?: [
    {
      piece: Piece;
      row: number;
      column: number;
    }
  ];
};

export default PossibleMove;
