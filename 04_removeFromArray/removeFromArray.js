const removeFromArray = function(array, ...elements) {
    let newArray = [];
    return array.filter(function(elementToCheck) {
        let dontRemove = true;
        for (const element of elements) {
            if (typeof(element) != typeof(elementToCheck)) {
                continue
            }
            if (elementToCheck == element) {
                dontRemove = false;
            }
        }
        return dontRemove;
    })
};

// Do not edit below this line
module.exports = removeFromArray;
