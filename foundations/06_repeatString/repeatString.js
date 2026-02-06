const repeatString = function(string, count) {
  let repeatedString = '';
  for (let i = 0; i < count; i++) {
    repeatedString += string;
  }
  return count >= 0 ? repeatedString : 'ERROR';
};

// Do not edit below this line
module.exports = repeatString;
