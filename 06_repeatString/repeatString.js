const repeatString = function(words,n) {
    let string = "";
    if(n == 0 || words == "")return string;
    if(n<0) return "ERROR";
    for(let i = 0; i < n; i++){
        string = string+words;
    }
    return string;
};
// Do not edit below this line
module.exports = repeatString;
