const snakeToCamel = (string: string): string => {
  let newString: string = "";

  const charArray: string[] = string.split("");

  let upperCaseFlag: boolean = false;

  charArray.forEach((char, index): void => {
    const lowerCaseChar = char.toLowerCase();

    if (char !== "_" && !upperCaseFlag) {
      newString += lowerCaseChar;
    } else if (char === "_") {
      upperCaseFlag = true;
    } else {
      newString += lowerCaseChar.toUpperCase();
      upperCaseFlag = false;
    }
  });

  return newString;
};

export default snakeToCamel;
