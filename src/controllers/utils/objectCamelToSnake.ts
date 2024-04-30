import camelToSnake from "./camelToSnake.js";

const objectCamelToSnake = (object: any): any => {
  const newObject: any = {};

  const keys: string[] = Object.keys(object);
  const values: string[] = Object.values(object);

  keys.forEach((key, index): void => {
    newObject[camelToSnake(key)] = values[index];
  });

  return newObject;
};

export default objectCamelToSnake;
