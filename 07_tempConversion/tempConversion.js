function finalizeResult(result) {
  if (result % 1 != 0)
    return parseFloat(result.toFixed(1));
  else
    return result;
}

const convertToCelsius = function(fahrenheit) {
  const result = (fahrenheit - 32) / (9/5);
  return finalizeResult(result);
};

const convertToFahrenheit = function(celsius) {
  const result = 32 + (celsius * (9/5));
  return finalizeResult(result);
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
