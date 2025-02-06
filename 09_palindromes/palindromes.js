const palindromes = function (string) {
    const alphanumerical = 'abcdefghijklmnopqrstuvwxyz0123456789';
    let cleanedString = string.toLowerCase().split('').filter((char) => {
        return alphanumerical.includes(char);
    }).join('');
    const reversedString = cleanedString.split('').reverse().join('');
    
    
    return reversedString === cleanedString;
};

// Do not edit below this line
module.exports = palindromes;


  