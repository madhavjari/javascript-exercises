const fibonacci = function(num) {
    if(num<0) return 'OOPS';
    let arr = []
    for(i = 0; i <= num; i++){
        if(i === 0 ) arr[i] = 0;
        else if(i === 1) arr[i] = 1;
        else{
            arr[i] = arr[i-1] + arr[i-2];
        }
    }
    return arr[num];
};

// Do not edit below this line
module.exports = fibonacci;
