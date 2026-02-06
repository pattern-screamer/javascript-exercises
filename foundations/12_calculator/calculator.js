const add = function(num1, num2) {
  return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(numbers) {
	return numbers.reduce((acc, number) => acc + number, 0);
};

const multiply = function(numbers) {
  return numbers.reduce((acc, number) => acc * number, 1);
};

const power = function(base, exp) {
	return base**exp;
};

const factorial = function(number) {
  let factorial = 1;
  for (let i = 2; i < number + 1; i++) {
    factorial *= i;
  }
  return factorial;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
