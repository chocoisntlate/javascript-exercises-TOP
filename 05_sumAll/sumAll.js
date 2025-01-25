const sumAll = function(num1, num2) {
    let total = 0;
    if (Number.isInteger(num1) && Number.isInteger(num2) && num1 >= 0 && num2 >= 0) {
        if (num1 > num2) {
            const temp = num2;
            num2 = num1;
            num1 = temp;
        }
        for (;num1 <= num2;num1++) {
            total += num1;
        }
        return total;
    }
    return "ERROR";


};

// Do not edit below this line
module.exports = sumAll;
