const reverseString = function(stringToReverse) {
    let result = '';
    for (let idx = stringToReverse.length - 1; idx >= 0; --idx) {
        result += stringToReverse[idx];
    }
    return result;
};

// Do not edit below this line
module.exports = reverseString;
