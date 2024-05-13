import Piece from "./Piece.js";

// TODO change name to just Move?
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
  enPassantCapture?: Piece;
};

export default PossibleMove;
