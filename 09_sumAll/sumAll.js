const sumAll = function(arg1, arg2) {
    ans = 0;
    if(arg1 < 0 || arg2 < 0) ans = 'ERROR';
    else if(Number.isInteger(arg1) == false || Number.isInteger(arg2) == false) ans = 'ERROR';
    else{
        len = Math.abs(arg1 - arg2)
        if(arg1 > arg2){
            for(i = arg2; i <= arg1;i++){
                ans = ans + i;
            }
        }
        else{
            for(i = arg1; i <= arg2; i++){
                ans = ans + i;
            }
        }
        }
    return ans;
};

// Do not edit below this line
module.exports = sumAll;
