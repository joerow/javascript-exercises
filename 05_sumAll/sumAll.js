const sumAll = function (num1, num2) {
    let result = 0; let high = 0;
    let low = 0;
    if (typeof (num1) === "number" && typeof (num2) === "number") {
        if (num1 < 0 || num2 < 0) {
            return "ERROR";
        }
        else if (num1 > num2) {
            high = num1;
            low = num2
        } else {
            high = num2;
            low = num1;
        }
        for (i = high; i >= low; i--) {
            result += i;
        }
        return result;
    } else {
        return "ERROR";
    };
}

// Do not edit below this line
module.exports = sumAll;
