const findTheOldest = function(array) {

    let age = 0;
    let currentYear = new Date().getFullYear();
    let oldest = 0;

    array.forEach(element => {
        if ('yearOfDeath' in element){
            age = element.yearOfDeath - element.yearOfBirth;
        }
        else{
            age = currentYear - element.yearOfBirth;
        }
        element.age = age;
        if (age > oldest){
            oldest = age;
        }
    });
    return array.find(element => element.age === oldest);
}

// Do not edit below this line
module.exports = findTheOldest;
