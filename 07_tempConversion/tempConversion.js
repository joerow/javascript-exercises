const ftoc = function(farenheit) {
  let celcius = ((farenheit - 32) * (5/9));
  return parseFloat(celcius.toFixed(1)); 
};

const ctof = function(celcius) {
  let farenheit = ((celcius * (9/5)) + 32);
  return parseFloat(farenheit.toFixed(1));
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
