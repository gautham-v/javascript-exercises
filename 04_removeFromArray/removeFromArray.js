const removeFromArray = function(array, discard) {
    
    const args = Array.from(arguments);

    for (i=1; i<=args.length-1; i++){
        array = array.filter(function (item) {return item !== args[i];});
    }
    return array;
};



//checks if other arguments are in the first array argument
//removes it

// Do not edit below this line
module.exports = removeFromArray;
