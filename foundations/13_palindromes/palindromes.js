const palindromes = function (string) {
  const regex = /\w|\d/g;
  const stringArray = string.toLowerCase().match(regex);

  const cleanString = stringArray.join('');
  const cleanStringReversed = stringArray.reverse().join('');

  return cleanString === cleanStringReversed;
};

// Do not edit below this line
module.exports = palindromes;
