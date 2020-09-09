// Write two functions that use Promises that you can chain.
// The first function, makeAllCaps(), will take in an array of words and capitalize
// them, and then the second function, sortWords(), will sort the words in
// alphabetical order. If the array contains anything but strings, it should throw
// an error.
// Call the functions once with an array of words and call it once with an array
// that includes at least one item that is not a word. Print the resolve and reject
// in a .then, .catch.
function makeAllCaps(wordsArr) {
    const allCapsPromise = new Promise(function (resolve,reject) {
        for(let i =0; i < wordsArr.length; i++) {
            if (typeof wordsArr[i] === "string") {
                wordsArr[i] = wordsArr[i].toUpperCase();
            }
            else {
                reject("there is a no-stringer here!");
            }
        }
        resolve(wordsArr);
    });
    return allCapsPromise;
}

function sortWords(wordsArr) {
    const sortPromise = new Promise(function (resolve,reject) {
        if (true) {
            resolve(wordsArr.sort());
        }
        else {
            reject("there is a no-stringer!");
        }
    });
    return sortPromise;
}

const words = ["hi", "hello", "whatup", "k bye"];
const almostWords = ["hi", "hello",6 , "whatup", "k bye"];

const result1 = makeAllCaps(words).then(result => sortWords(result))
.then((result)=> console.log(result)).catch((error)=> console.log(error));


const result2 = makeAllCaps(almostWords).then(result => sortWords(result))
.then((result)=> console.log(result)).catch((error)=> console.log(error));

