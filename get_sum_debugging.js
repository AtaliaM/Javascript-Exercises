function getSum(arr1, arr2){
    let sum = 0;

    for (let i=0; i < arr1.length; i++){
        sum += arr1[i];
    }
    for (let i=0; i < arr2.length; i++){
        sum += arr2[i];
    }
}

getSum([1,2,3],[5,66,23]);

// What is wrong with this code?
// 1. First find the line that contains the problem. Write it down:
// * getSum([1,2,3][5,66,23])
// * const sum = 0;

// 2. Which debug method did you use to find the bug?
// * console.log()

// 3. Explain the bug in your own words.
// * The problem with sum: it was declared as const, so it cannot be changed throughout the code.
// * The problem with the function call: there is no comma between the arguments.

// 4. Fix the code and submit it all.
// * Fixed.