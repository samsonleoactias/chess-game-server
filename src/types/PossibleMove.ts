type PossibleMove = {
  location: {
    row: number;
    column: number;
  };
  sideEffects?: [
    {
      piece: string; // TODO make enum?
      row: number;
      column: number;
    }
  ];
};

export default PossibleMove;
