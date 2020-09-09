const wonderWoman = {
    name: "Diana Prince"
}
const batman = {
    name: "Bruce Wayne"
}
const superHeroes = [wonderWoman, batman];


function printName() {
    console.log(`my name is ${this.name}`);
}

//  We want to print the heroes names. Implement the printHeroes function:
//  Note: you cannot change the super heroes objects
function printHeroes(heroes, printFunc) {
    for (let i = 0; i <heroes.length; i++) {

        printFunc.call(heroes[i]);
    }
}

printHeroes(superHeroes,printName);

// let printName1 = printName.bind(wonderWoman);
// let printName2 = printName.bind(batman);
// printHeroes(superHeroes[0],printName1);
// printHeroes(superHeroes[1],printName2);