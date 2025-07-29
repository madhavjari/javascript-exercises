const palindromes = function (str) {
    const trimStr = str.trim();
    const noPunch = trimStr.replace(/[^a-zA-Z0-9 ]/g, '');
    const noSpace = noPunch.replaceAll(' ', '');
    const cleanStr = noSpace.toLowerCase();
    const reverseStr = cleanStr.split('').reverse().join('');
    return reverseStr === cleanStr;
};

// Do not edit below this line
module.exports = palindromes;
