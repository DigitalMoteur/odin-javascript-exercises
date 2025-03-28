const fibonacci = function(index) {
    index = parseInt(index);
    if (index < 0)
        return "OOPS";
    const sequence = [0, 1];
    for (let idx = 2; sequence.length < index + 1; idx++) {
        sequence[idx] = sequence[idx - 1] + sequence[idx - 2];
    }
    console.log(sequence);
    return sequence[index];
};

// Do not edit below this line
module.exports = fibonacci;
