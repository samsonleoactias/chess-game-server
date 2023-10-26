import camelToSnake from "./camelToSnake";

const objectCamelToSnake = (object: Object): Object => {
  const newObject: Object = {};

  const keys: string[] = Object.keys(object);

  keys.forEach((key): void => {
    (<any>newObject)[camelToSnake(key)] = (<any>object)[key];
  });

  return newObject;
};

export default objectCamelToSnake;
