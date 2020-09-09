// Write a function that takes a number as an argument and returns a Promise
// that tests if the value is less than or greater than the value 10.
// If it is greater than 10 it is resolved, if it is less than 10 it is rejected.
// Call the function and print the resolve and reject in a .then, .catch.

function isNumberGreaterThanTen(num) {
    const myPromise = new Promise(function (resolve,reject) {
        if(num>10) {
            resolve("cool!");
        }
        else {
            reject("boooo");
        }
    });
    return myPromise;
}

const num1 = isNumberGreaterThanTen(20);
num1.then((success)=> {
    console.log("yay :) number is greater than 10");
    console.log(success);
}).catch(error=> {
    console.log("nay :( number isn't greater than 10");
    console.log(error);
})

const num2 = isNumberGreaterThanTen(5).then((success)=> {
    console.log("yay :) number is greater than 10");
    console.log(success);
}).catch(error=> {
    console.log("nay :( number isn't greater than 10");
    console.log(error);
})


