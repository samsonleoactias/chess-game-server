import snakeToCamel from "./snakeToCamel.js";

const objectSnakeToCamel = (object: Object): Object => {
  const newObject: Object = {};

  const keys: string[] = Object.keys(object);

  keys.forEach((key): void => {
    (<any>newObject)[snakeToCamel(key)] = (<any>object)[key];
  });

  return newObject;
};

export default objectSnakeToCamel;
