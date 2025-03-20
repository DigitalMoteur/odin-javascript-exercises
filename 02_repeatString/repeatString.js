const repeatString = function(stringToRepeat, numTimes) {
    if (numTimes < 0) {
        return "ERROR";
    }
    let result = "";
    for (let idx = 0; idx < numTimes; ++idx) {
        result += stringToRepeat;
    }
    return result;
};

// Do not edit below this line
module.exports = repeatString;
