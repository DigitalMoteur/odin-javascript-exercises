const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(input) {
  if (input == undefined || input.length == 0)
    return 0;
	return input.reduce((total, current) => {
    return total + current;
  });
};

const multiply = function(input) {
  if (input == undefined || input.length == 0)
    return 0;
  return input.reduce((total, current) => {
    return total * current;
  });
};

const power = function(input, power) {
  let result = 1;
  for (let i = 0; i < power; i++)
  {
    result *= input;
  }
  return result;
};

const factorial = function(input) {
	let result = 1;
  for (let i = 1; i < input + 1; i++)
  {
    result *= i;
  }
  return result;
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
