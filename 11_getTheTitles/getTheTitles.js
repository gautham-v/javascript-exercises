const getTheTitles = function(array) {
    
    let listOfBooks = [];
    array.forEach(element => {
        listOfBooks.push(element.title);
    });

    return listOfBooks;
};

// Do not edit below this line
module.exports = getTheTitles;
