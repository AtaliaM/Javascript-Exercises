/*
    JavaScript - Primitive Data Types
​
    The following exercise contains the following subjects:
        * String
        * undefined
​
    Instructions:
        * String Tasks:
            1) Write the phrase "Welcome to Full-Stack Bootcamp" as a String in 5 different ways.
            2) Get the first letter of the word "Bootcamp" using two different ways.
            3) Write two string variables with the same word, in a way that when compared will result in false.
            4) Get the length of the String from the first task.
            5) Combine these two Strings "Hello" and "World" using as many different ways you can (at least 3).
​
        * undefined Tasks:
            1) Create an undefined variable in two differnet ways.
            2) Check if a variable is undefined in two differnet ways.
​
    Submit the file to Hive
*/

/*String Tasks*/

/* 1) */
let str = "Welcome to Full-Stack Bootcamp";
let str2 = 'Welcome to Full-Stack Bootcamp';
const str3 = `Welcome to Full-Stack Bootcamp`;
let str4 = "Welcome" + "to" + "Full-Stack" + "Bootcamp";

let bootcamp = "Bootcamp";
let str5 = `Welcome to the Full-stack ${bootcamp}`;

/* 2) */

console.log(bootcamp[0]);
console.log(bootcamp.charAt(0));

/* 3) */

let firstWord = "atalia";
let secondWord = "Atalia";

console.log(firstWord === secondWord);

/* 4) */

console.log(str.length);

/* 5) */

let hello = "Hello";
let world = "World!";
let helloWorld = hello + " " + world;
let helloWorld2 = "Hello " + "World!";
let helloWorld3 = `${hello} ${world}`;

console.log(helloWorld);
console.log(helloWorld2);
console.log(helloWorld3);

/*undefined Tasks*/

/*1) */

let cat;
let dog = undefined;

/* 2) */

console.log(cat === undefined);
console.log(typeof dog);