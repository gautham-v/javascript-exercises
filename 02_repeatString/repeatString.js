const repeatString = function(str, num) {
    let newstr = '';
    if (num < 0){
        newstr += 'ERROR';
    }
    else {
        for (let i=0; i<num; i++) {
            newstr += str;
        }
    }
    
    return newstr;
};

// Do not edit below this line
module.exports = repeatString;
