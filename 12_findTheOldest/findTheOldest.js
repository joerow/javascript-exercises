const findTheOldest = function (people) {
  let myArray = [];

  //calculate their ages and add to original array
  people.forEach((person) => {
    if (person.hasOwnProperty("yearOfDeath") === true) {
      person.age = person["yearOfDeath"] - person["yearOfBirth"];
    } else {
      person.age = new Date().getFullYear() - person["yearOfBirth"];
    }
  });

  // sort by oldest to youngest
  myArray = people.sort(function (firstPerson, secondPerson) {
    if (firstPerson.age > secondPerson.age) {
      return -1;
    } else {
      return 1;
    }
  });
  return myArray[0];
};

// Do not edit below this line
module.exports = findTheOldest;
