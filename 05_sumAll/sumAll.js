const sumAll = function(start, end) {

    if ((start < 0) || (end < 0) || (typeof start != "number") || (typeof end != "number")){
        return 'ERROR';
    }
    else {
        let finalSum = 0;
        if (start > end){
            [start, end] = [end, start];
        }
        for (let i = start; i <= end; i++){
            finalSum += i;
        }
        return finalSum;
    }
};

// Do not edit below this line
module.exports = sumAll;
