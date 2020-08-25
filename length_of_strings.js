function returnArrOfStrLengths(arrOfStr) {

    let strLengths = [];

    for (let i = 0; i <arrOfStr.length; i++) {
        strLengths.push(arrOfStr[i].length);
    }

    return strLengths;
}

console.log(returnArrOfStrLengths(["boo", "doooo", "hoo","ro"]));
