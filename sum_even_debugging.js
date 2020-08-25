function getSumOfEven(arr){
    return arr[1] + arr[3] + arr[5] + arr[7] + arr[9];
}

console.log(getSumOfEven([1,2,3,4,5,6,7,8,9,10]));


//What is wrong with this code?
// 1. First find the line that contains the problem. Write it down.
// * return arr[2] + arr[4] + arr[6] + arr[8] + arr[10];

// 2. Which debug method did you use to find the bug?
// * console.log()

// 3. Explain the bug in your own words.
// * You try to access a value on an index that doesn't exist in the array.
// Array indices start from 0, so array of 10 elements will have indices of 0-9.
// To sum the numbers on the even cells, you have to start summing from index 1, 3, 5, 7 and 9.

// 4. Fix the code and submit it all.
// * Fixed.
// we want to sum all numbers in even cells in arrays of size 10:
// [1,2,3,4,5,6,7,8,9,10] => 2+4+6+8+10 = 30