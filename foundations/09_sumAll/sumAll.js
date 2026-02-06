const sumAll = function(num1, num2) {
  if (typeof num1 !== 'number' || !Number.isInteger(num1) || num1 < 0 || 
    typeof num2 !== 'number' || !Number.isInteger(num2) || num2 < 0) {
    return 'ERROR';
  }

  let smallerNumber = num1;
  let largerNumber = num2;
  if (num1 > num2) {
    smallerNumber = num2;
    largerNumber = num1;
  }

  let sum = 0;
  do {
    sum += smallerNumber++;
  } while (smallerNumber <= largerNumber);

  return sum;
};

// Do not edit below this line
module.exports = sumAll;
