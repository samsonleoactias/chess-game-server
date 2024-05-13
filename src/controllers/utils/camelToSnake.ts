const camelToSnake = (string: string): string => {
  let newString: string = "";

  const charArray: string[] = string.split("");

  charArray.forEach((char, index): void => {
    const lowerCaseChar = char.toLowerCase();

    if (char.toLowerCase() !== char && index > 0) {
      newString += `_${lowerCaseChar}`;
    } else {
      newString += lowerCaseChar;
    }
  });

  return newString;
};

export default camelToSnake;
