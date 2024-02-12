import { Color } from "../../../../../types/index.js";

const chooseColor = (): Color => {
  const colors = [Color.BLACK, Color.WHITE];

  const randomNumber = Math.floor(Math.random() * 2);

  return colors[randomNumber];
};

export default chooseColor;
