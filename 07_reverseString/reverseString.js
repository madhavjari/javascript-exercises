const reverseString = function(word) {
    const len = word.length-1;
    let string = "";
    for (let i = 0; i <= len; i++){
        string = word[i]+string;
    }
    return string;
};

// Do not edit below this line
module.exports = reverseString;
