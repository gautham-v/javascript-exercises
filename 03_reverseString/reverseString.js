const reverseString = function(string) {
    let array = string.split('');
    var reverse = '';
    console.log(array);
    while (array.length>0) {
        reverse += array.pop();
    }
    return reverse;
};

// Do not edit below this line
module.exports = reverseString;
