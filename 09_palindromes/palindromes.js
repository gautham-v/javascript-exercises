const palindromes = function (str) {
    let firstHalf = [];
    let secondHalf = [];

    // remove punctuation, whitespace and to lower case
    str = str.replaceAll(' ', '');
    str = str.replaceAll(',', '');
    str = str.replaceAll('!', '');
    str = str.replaceAll('.', '');
    str = str.toLowerCase();

    console.log(str);

    const length = str.length;
    const midpoint = length/2;

    if (length%2 === 1){ //odd
        firstHalf = Array.from(str.slice(0,Math.floor(midpoint)));
        secondHalf = Array.from(str.slice(Math.ceil(midpoint)));
    }
    else{ //even
        firstHalf = Array.from(str.slice(0,midpoint));
        secondHalf = Array.from(str.slice(midpoint));
    }

    console.log(firstHalf);
    console.log(secondHalf);
    for (let i = 0; i<= midpoint-1; i++){
        console.log(firstHalf[i]);
        console.log(secondHalf[Math.floor(midpoint)-1-i]);
        if (firstHalf[i] !== secondHalf[Math.floor(midpoint)-1-i]){
            return false;
        }
    }
    return true;
};

//palindromes('ZZZZ car, a man, a maracaz.')

// Do not edit below this line
module.exports = palindromes;
