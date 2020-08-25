let people = ["Greg", "Mary", "Devon", "James"];

//1

for (let i = 0; i < people.length; i++) {
    console.log(people[i]);
}

//2
//remove Greg
people.shift();
console.log(people);

//3
//remove James
people.pop();
console.log(people);

//4
//Adding Matt to the beggining
people.unshift("Matt");
console.log(people);

//5
//Adding Atalia to the end
people.push("Atalia");
console.log(people);

//6
//console.log Mary and break
for (let i = 0; i < people.length; i++) {
    if (people[i] === "Mary")
    {
        console.log(people[i]);
        break;
    }
    
}

//7
//copy of the people array without Matt and Mary
const mattIndex = people.findIndex(name =>
    {
        return name === "Matt";
    }
    );

const maryIndex = people.findIndex(name =>
    {
        return name === "Mary";
    }
    );
    
const peopleWithoutMattAndMary = [...people.slice(0, mattIndex), ...people.slice(maryIndex+1)];
console.log(peopleWithoutMattAndMary);

//8 
//Mary index
const maryIndex2 = people.indexOf("Mary");
console.log(maryIndex2);

//9
//foo index
const fooIndex = people.indexOf("Foo");
console.log(fooIndex);

//10
//redefining the people array, removing Devon and adding Elizabeth and Artie
people = ["Greg", "Mary", "Devon", "James"];

people.splice(2,1); //removing Devon
console.log(people);
people = [...people.slice(0,maryIndex2+1), "Elizabeth", "Artie", ...people.slice(maryIndex2+1)]; //adding Elizabeth and Artie at the middle
console.log(people);

//11
//concat with Bob
const withBob = people.concat("Bob");
const withBob2 = [...people, "Bob"];
console.log(withBob);
console.log(withBob2);


//trials with splice
// people.splice(1,1);
// console.log(people);