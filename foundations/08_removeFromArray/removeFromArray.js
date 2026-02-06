const removeFromArray = function(array, ...number) {
  let newArray = array;
  for (const element of number) {
    newArray = newArray.filter((value) => value !== element);
  }
  return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
