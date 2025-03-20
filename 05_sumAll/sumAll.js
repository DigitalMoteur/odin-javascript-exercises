const sumAll = function(first, second) {
    if (!Number.isInteger(first) || !Number.isInteger(second)
        || first < 0 || second < 0)
    {
        return "ERROR";
    }
    if (second < first) {
        const temp = second;
        second = first;
        first = temp;
    }
    let sum = 0;
    for (let idx = first; idx <= second; ++idx) {
        sum += idx;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
