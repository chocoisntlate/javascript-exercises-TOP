const getTheTitles = function(bookDetails) {
    return bookDetails.reduce((array, obj) => {
      array.push(obj.title)
        return array;
    }, [])

};

// Do not edit below this line
module.exports = getTheTitles;
