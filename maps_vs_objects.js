let newObj = {}
let newMap = new Map();

let names=["Spongebob", "Patrick", "Crab", "Garry", "Sandy", "Squidward", "Pearl", "groot", "Rocket", "Thanos"];

for (let i = 0; i <names.length; i++) {
    newMap.set(names[i], names[i]);
    newObj[names[i]] = names[i];
}

console.log("Object:");
console.time("object time");
for (let key in newObj) {
    if (newObj[key] === "Thanos") {
        console.log(`${key}:${newObj[key]}`);
        console.timeEnd("object time");
        break;
    }
}


console.log("Map:");
console.time("map time");


  newMap.forEach((value, key) =>{
    if (value === "Thanos")
    {
        console.log(`${key}:${value}`);
        console.timeEnd("map time");
        
    }
  })

  //another way

  // for (let [key,value] of newMap.entries()) {
//     if (value === "Thanos")
//     {
//         console.log(`${key}:${value}`);
//         console.timeEnd("map time");
//         break;
//     }
//   }

//   console.log(newMap);
//   console.log(newObj);
