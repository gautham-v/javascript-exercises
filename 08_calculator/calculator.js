const add = function(a,b) {
	return a + b;
};

const subtract = function(a,b) {
	return a-b;
};

const sum = function(array) {
	return array.reduce(function(sum,item){
    if (array.length === 0){
      return 0;
    }
    else {
      return sum += item;
    }
  }, 0)
};

const multiply = function(array) {
  return array.reduce(function(product,item){
    if (array.length === 0){
      console.log(array.length);
      return 0;
    }
    else {
      return product *= item;
    }
  }, 1)
};

const power = function(a,b) {
	let array = [];
  for (let i = 1; i <= b; i++){
    array.push(a);
  }
  return multiply(array);
};

const factorial = function(a) {
	if (a === 0) {
    return 1;
  }
  else {
    let array = [];
    for (let i = a; i >= 1; i--){
      array.push(i);
    }
    return multiply(array);
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
