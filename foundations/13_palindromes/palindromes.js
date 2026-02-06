const palindromes = function (string) {
  return string.split().toReversed().join('');
  // return string === string.split().toReversed().join('');
};

// Do not edit below this line
module.exports = palindromes;
