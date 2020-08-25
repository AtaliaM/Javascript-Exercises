//1//
const arr = [1,2,3,4,5,6];

const doubleValues = arr.map(function(num) {
    return num * num;
});

console.log(doubleValues);

//2//

function onlyEvenValues(arr) {
    const newArr = [];

    arr.forEach(element => {
        if (element % 2 === 0)
        {
            newArr.push(element);
        }
    });

    return newArr;
}

console.log(onlyEvenValues(arr));

//3//

function addKeyAndValue (objectArr, key, value) {
    objectArr.forEach(obj => {
        obj[key] = value;
    });
}

const data = [
    {
        name: "John",
        birthday: "1-1-1995",
        favoriteFoods: {
        meats: ["hamburgers", "sausages"],
        fish: ["salmon", "pike"],
        },
    },
    {
        name: "Mark",
        birthday: "10-5-1980",
        favoriteFoods: {
        meats: ["hamburgers", "steak", "lamb"],
        fish: ["tuna", "salmon", "barracuda"],
        },
    },
    {
        name: "Mary",
        birthday: "1-10-1977",
        favoriteFoods: {
        meats: ["ham", "chicken"],
        fish: ["pike"],
        },
    },
    {
        name: "Thomas",
        birthday: "1-10-1990",
        favoriteFoods: {
        meats: ["bird", "rooster"],
        fish: ["salmon"],
        },
    },
   ];

addKeyAndValue(data, "special key", "special value");
console.log(data);


//4//

let str1 = "atalia";

const shiftLetters = (str) => {
    return str.split("").map( letter => String.fromCharCode(letter.charCodeAt()-1)).join("");
}

console.log(shiftLetters(str1));

// function shiftLetters(str) {
//     str = str.split("");
//     let encodedStr = [];
    
//     encodedStr.push(str.map(function(letter) {
//         String.fromCharCode(str.charCodeAt(letter) -1);
//     }));

//     encodedStr = encodedStr.join("");
//     return encodedStr;
// } 
