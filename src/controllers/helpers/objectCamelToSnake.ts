import camelToSnake from "./camelToSnake";

const objectCamelToSnake = (object: Object) => {
  const newObject: Object = {};

  const keys: string[] = Object.keys(object);

  keys.forEach((key) => {
    newObject[camelToSnake(key)] = object[key];
  });

  return newObject;
};

export default objectCamelToSnake;
