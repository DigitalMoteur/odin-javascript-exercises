const palindromes = function (input) {
    let temp = input.split('')
        .filter((char) => {
            return char != '!' && char != ' ' && char != '.' && char != ',';
        })
        .join('');
    let reverse = temp.split('').reverse().join('');
    return reverse.toLowerCase() == temp.toLowerCase();
};

// Do not edit below this line
module.exports = palindromes;
