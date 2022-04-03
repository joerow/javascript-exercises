const reverseString = function (textToSplit) {

    let textArray = Array.from(textToSplit);
    let finalChar = (textArray.length - 1);
    let reversedText = "";
    for (let i=finalChar; i>=0; i--) {
        reversedText += textArray[i];
    }
    return reversedText;
    //return textArray[finalChar-1];
};

// Do not edit below this line
module.exports = reverseString;
