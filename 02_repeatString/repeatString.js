const repeatString = function (text, numOf) {
    let finalString = "";
    if (numOf > 0) {
        for (let i = 0; i < numOf; i++) {
            finalString += text;
        }
        return finalString;
    } else if (numOf === 0) {
        return finalString;
    }
    else {
        finalString = "ERROR";
        return finalString;
    }
};

// Do not edit below this line
module.exports = repeatString;
