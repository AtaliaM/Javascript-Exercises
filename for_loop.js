const food = ["Noodle", "Pasta", "Ice-cream", "Meat", "Cucumber", "Olives"];
const food1 = ["Fries", "Ice-cream", "Pizza", "Olives", "Hamburgers"];

const food2 = ["Fries", "Pizza", "Hamburgers"];

function compareArrElements(arr1,arr2) {
    let identicalElements = [];

    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr2.length; j++) {
            if (arr1[i] === arr2[j]) {
                identicalElements.push(arr1[i]);
                break;
            }
        }
    }

    if (identicalElements.length>0) {
        return identicalElements;
    }
    return false;

}

console.log(compareArrElements(food, food1));

console.log(compareArrElements(food, food2));