const add = function (a, b) {
  let add = a + b;
  return add;
};

const subtract = function (a, b) {
  let subtract = a - b;
  return subtract;
};

const sum = function (summable) {
  let sumTotal = 0;
  summable.forEach(element => {
    sumTotal += element;
  });
  return sumTotal;
};

const multiply = function (multiples) {
  let total =1;
  multiples.forEach(element => {
    total = total * element;
  });
  return total;

};

const power = function (a,b) {
  let result = a ** b;
  return result;
};

const factorial = function (a) {
  let result = 1;
  while (a>0) {
    result = result * a;
    --a ;   
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
