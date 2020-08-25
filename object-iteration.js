function returnNewObject(obj) {

    let person2 = {}

    for ([key, value] of Object.entries(obj)) {
        person2[value] = key;
    }

    return person2;

}

let person = {
    name: "Atalia",
    age: 29,
    pets: "Cat and Dog",
    faveColor: "Purple"
}

console.log(returnNewObject(person));