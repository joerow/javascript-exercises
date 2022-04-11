const fibonacci = function (val) {
  if (val < 0) {
    return "OOPS";
  }
  if (val == 1) {
    return 1;
  }
  let n1 = 0,
    n2 = 1,
    nextTerm;
  for (let index = 1; index < val; index++) {
    nextTerm = n1 + n2;
    n1 = n2;
    n2 = nextTerm;
  }
  console.log(nextTerm);
  return nextTerm;
};

// Do not edit below this line
module.exports = fibonacci;
