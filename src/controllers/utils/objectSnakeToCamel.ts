import snakeToCamel from "./snakeToCamel.js";

const objectSnakeToCamel = (object: any): any => {
  const newObject: any = {};

  const keys: string[] = Object.keys(object);
  const values: string[] = Object.values(object);

  keys.forEach((key, index): void => {
    newObject[snakeToCamel(key)] = values[index];
  });

  return newObject;
};

export default objectSnakeToCamel;
