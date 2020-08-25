let animal1 = {
    name : "cat",
}

let animal2 = {
    name : "dog",
}

let animal3 = {
    name : "bird",
}

const animals = new Map();

animals.set(animal1,"123");
animals.set(animal2,"456");
animals.set(animal3,"789");

//for of
for (const[animal, id] of animals) {
    console.log(animal.name, id);
}


//for each

animals.forEach((animal, id) =>{
    console.log(`${animal.name} ${id}`);
  })


// function logMapElements(value, key) {
//     console.log(`${key.name} ${value}`);
//   }
// animals.forEach(entry=> {
//     console.log(entry);
// })


