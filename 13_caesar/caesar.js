const caesar = function (message, bigshiftKey) {
  if (bigshiftKey > 26) {
    shiftKey = bigshiftKey % 26;
  } else if (bigshiftKey < -26) {
    shiftKey = bigshiftKey % -26;
  } else {
    shiftKey = bigshiftKey;
  }

  let outputMessage = [];
  let inputMessage = [...message];
  console.log(inputMessage);
  inputMessage.forEach((character) => {
    uniVal = character.charCodeAt(0);
    if (32 <= uniVal && uniVal <= 47) {
      let char = String.fromCharCode(uniVal);
      outputMessage.push(char);
    } else if (65 <= uniVal && uniVal <= 90) {
      uniVal += shiftKey;
      if (uniVal > 90) {
        uniVal -= 26;
        let char = String.fromCharCode(uniVal);
        outputMessage.push(char);
      } else if (uniVal < 65) {
        uniVal += 26;
        let char = String.fromCharCode(uniVal);
        outputMessage.push(char);
      } else {
        let char = String.fromCharCode(uniVal);
        outputMessage.push(char);
      }
    } else if (97 <= uniVal && uniVal <= 122) {
      uniVal += shiftKey;
      if (uniVal > 122) {
        uniVal -= 26;
        let char = String.fromCharCode(uniVal);
        outputMessage.push(char);
      } else if (uniVal < 97) {
        uniVal += 26;
        let char = String.fromCharCode(uniVal);
        outputMessage.push(char);
      } else {
        let char = String.fromCharCode(uniVal);
        outputMessage.push(char);
      }
    }
  });
  console.log(outputMessage);
  return outputMessage.join("");
};

// Do not edit below this line
module.exports = caesar;
