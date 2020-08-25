
let mostOccurancesLetter;
let mostOccurancesCount = 0;

function returnLetterCounterObj(strArr) {
    const strLetterCount = {};

    for (let i = 0; i < strArr.length; i++) {
        for (let j = 0; j < strArr[i].length; j++) {
            if (strLetterCount.hasOwnProperty(strArr[i][j].toLowerCase())) {
                    strLetterCount[strArr[i][j].toLowerCase()] +=1;
                }
            else if (strArr[i][j] === " ") {
                
                }
            else {
                strLetterCount[strArr[i][j].toLowerCase()] = 1;
                }
            //checking for most occurences
            if (strLetterCount[strArr[i][j].toLowerCase()] > mostOccurancesCount) {
                mostOccurancesCount = strLetterCount[strArr[i][j].toLowerCase()];
                mostOccurancesLetter = strArr[i][j].toLowerCase();
                }
        }
    }
    return strLetterCount;
}


const array = ["Hello", "Good Day", "Your Welcome", "hotdog", "hamburgers"];
console.log(returnLetterCounterObj(array));

//extra -  letter with the most occurrences
console.log(`The letter with the most occurences is: ${mostOccurancesLetter}`);