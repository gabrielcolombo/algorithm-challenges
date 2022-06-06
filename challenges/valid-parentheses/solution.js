/**
 * @param {string} str
 * @return {boolean}
 */

const isValid = (str) => {
  if (!str || str.length % 2 > 0 || "}])".includes(str.at(0))) {
    return false;
  }

  const bracketMap = { "{": "}", "[": "]", "(": ")" };
  const matchingBrackets = [];

  for (let bracket of str) {
    if (bracketMap[bracket]) {
      matchingBrackets.push(bracketMap[bracket]);
    } else if (
      matchingBrackets.length > 0 &&
      matchingBrackets.at(-1) === bracket
    ) {
      matchingBrackets.pop();
    } else {
      return false;
    }
  }

  return matchingBrackets.length === 0;
};
