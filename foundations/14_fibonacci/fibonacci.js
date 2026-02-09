const fibonacci = function(index) {
  if (index < 0) {
    return "OOPS";
  }

  const fibonacciSequence = [0, 1];
  for (let i = 1; i < index; i++) {
    fibonacciSequence.push(fibonacciSequence[i - 1] + fibonacciSequence[i]);
  }
  return fibonacciSequence[index];
};

// Do not edit below this line
module.exports = fibonacci;
