import { Color } from "../../../types";

const chooseColor = () => {
  const colors = [Color.Black, Color.White];

  const randomNumber = Math.floor(Math.random() * 2);

  return colors[randomNumber];
};

export default chooseColor;
