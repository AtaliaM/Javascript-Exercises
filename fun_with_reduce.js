const arr = [100, 12, 40, 44, 555, 20, 13, 5, 1];

function max(currMax, value) {
    // console.log("curr max:" +currMax);
    // console.log("value:" +value);
    if (value > currMax) {
        return value;
    }
    return currMax;
}

const maxNum = arr.reduce(max, 0);
console.log(`The max num in the array is ${maxNum}`);

/////////////////////////////////////////

function sumOfEven(currSum, value) {
    if (value % 2 === 0) {
        return currSum+value;
    }
    return currSum;
}

const evenSum = arr.reduce(sumOfEven,0);
console.log(`The sum of the array's even elements: ${evenSum}`);

/////////////////////////////////////////

const arrAverage = (arr.reduce(function (currSum, value) {
    return currSum+value;
}, 0) / arr.length).toFixed(2);

console.log(`Array average: ${arrAverage}`);