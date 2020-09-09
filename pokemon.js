function Pokemon(pokemonName, pokemonType, pokemonAttackList) {
    this.name = pokemonName;
    this.type = pokemonType;
    this.attackList = pokemonAttackList;
}

// 1. Create three instances of the Pokemon and save them in a variable.

let pikachu = new Pokemon("Pikachu", "Electric", ["Charge", "Electro Ball", "Volt Tackle"]);
let jigglypuff = new Pokemon("Jigglypuff", "Fairy", ["Sing", "Moon Kick", "Mumble"]);
let eevee = new Pokemon("Eeve", "Normal", ["Bite", "Tackle"]);

let pokemons = [pikachu, jigglypuff, eevee];

// 2. Using prototype properties, add the following methods:
// • A method called callPokemon that will print the following: “I choose
// you, <pokemon name>

Pokemon.prototype.callPokemon = function() {
    console.log(`I choose you, ${this.name}!`);
}

// • A method called attack that takes one parameter, an attack number,
// that will print the specific attack method from the pokemonAttackList
// array as the following: “<pokemon name> used <attack method>”

Pokemon.prototype.attack = function(attackNum) {
    if (this.attackList[attackNum]) {

        console.log(`${this.name} used ${this.attackList[attackNum]}`);
    }
    else {
        console.log(`${this.name} doesn't have any attack with this number!`);
    }
}

// Call each pokemon with the 2 methods you created.
///////////////1////////////////
pokemons.forEach(element => {
    element.callPokemon();
    element.attack(0);
}) 
//////////////2/////////////////
// pikachu.callPokemon();
// pikachu.attack(0);
// jigglypuff.callPokemon();
// jigglypuff.attack(1);
// eevee.callPokemon();
// eevee.attack(0);
// eevee.attack(4);