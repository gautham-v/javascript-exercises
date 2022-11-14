const fibonacci = function(index) {

    if (index < 1){
        return 'OOPS';
    }
    if (typeof(index) === 'string')
    {
        index = Number(index);
    }
    let array = [1,1];
    let firstNum = array[array.length-2];
    let secondNum = array[array.length-1];
    
    while (array.length <= index){
        array.push(firstNum+secondNum);
        firstNum = array[array.length-2];
        secondNum = array[array.length-1]; 
    }

    return firstNum;
};

console.log(fibonacci(4));
// Do not edit below this line
module.exports = fibonacci;
