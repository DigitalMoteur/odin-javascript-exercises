const removeFromArray = function(originalArray, ...elementsToRemove) {
    let result = [];
    for (const element in originalArray) {
        const value = originalArray[element];
        if (elementsToRemove.includes(value))
            continue;
        result.push(value);
    }
    return result;
};

// Do not edit below this line
module.exports = removeFromArray;
