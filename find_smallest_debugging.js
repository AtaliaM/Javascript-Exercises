function findSmallest(a, b, c){
    if (c < a && c < b){
        console.log("c is smallest");
        return c;
    } else if (a < b && a < c) {
        console.log("a is smellest");
        return a;
   } else {
       console.log("b is smallest");
        return b;
    }
}
findSmallest(52,66, 2);
findSmallest(2,66, 23);
findSmallest(66,2, 23);

// What is wrong with this code?
// 1. First find the line that contains the problem. Write it down.
// * typo in the function call.
// * the conditions are not right (if (a > b > c), else if (a > c > b)....)

// 2. Which debug method did you use to find the bug?
// * console.log()

// 3. Explain the bug in your own words.
// * the typo- pretty obvious bug. You can't call a function that doesn't exist.
// * the conditions: they don't cover all the possible cases. For example, in the if and the else if,
// you checked only if b and c are smaller than a, and on the else you imidiatelly returned b as the smallest.
// if 'a' is the smallest, there was no way to return it on any case.

// 4. Fix the code and submit it all.
// * Fixed.
