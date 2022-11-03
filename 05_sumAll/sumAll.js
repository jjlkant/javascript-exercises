const sumAll = function(valueOne, valueTwo) {
    if (valueOne < 0 || valueTwo < 0) {
        return "ERROR"
    }
    if (!(typeof valueOne === "number") || !(typeof valueTwo === "number")) {
        return "ERROR"
    }
    let start, end;
    if (valueOne < valueTwo) {
        start = valueOne;
        end = valueTwo
    } else {
        start = valueTwo;
        end = valueOne;
    }
    let sum = 0;
    for (let i = start; i < end + 1; i++) {
        sum += i;
    }
    return sum
};

// Do not edit below this line
module.exports = sumAll;
