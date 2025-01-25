const reverseString = function(string) {
    let returnString = '';
    const stringArray = string.split("");
    for (let i =0;i < string.length;i++) {
        returnString += stringArray[string.length-1-i];
        
    }
    return returnString
};

// Do not edit below this line
module.exports = reverseString;
