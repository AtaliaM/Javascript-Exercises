// Create an object with a name property. The object should also have a function
// that prints its name, and another function that prints its name after a second.
// in this exercise, you are not allowed to use arrow functions.

const person = {
    name: "atalia",
    printName: function () {
        console.log(`My name is ${this.name}`);
    },

    printNameAfterSecond: function () {
        setTimeout(this.printName.bind(this)
        ,1000);
    },
}

person.printName();
person.printNameAfterSecond();

