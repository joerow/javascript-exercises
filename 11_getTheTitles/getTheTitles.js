const getTheTitles = function (mainArray) {
  let myArray = [];
  mainArray.forEach((book) => {
    myArray.push(book["title"]);
  });
  return myArray;
};

// Do not edit below this line
module.exports = getTheTitles;
