// New ES2020 features!

// BigInt (typeof bigint) 
console.log(typeof 4);
console.log(typeof 'text');
console.log(typeof 6666666666666666666666666666);
console.log(typeof 1n);

// JS has a max integer value:
console.log(Number.MAX_SAFE_INTEGER);
// There is also a min integer value:
console.log(Number.MIN_SAFE_INTEGER);
// Reference: https://stackoverflow.com/questions/307179/what-is-javascripts-highest-integer-value-that-a-number-can-go-to-without-losin

// This works:
console.log(Number.MAX_SAFE_INTEGER + 1);
// This fails:
console.log(Number.MAX_SAFE_INTEGER + 10);

// Use bigint if you want to use integers larger/smaller than the max/min JS integer values:
console.log(9007199254741000n + 1n);
console.log(9007199254741000n + 10n);


// Optional Chaining Operator (?.)
let will_pokemon = {
    pikachu: {
        species: 'Mouse Pokemon',
        height: 0.4,
        weight: 6
    }
}

let andrei_pokemon = {
    raichu: {
        species: 'Mouse Pokemon',
        height: 0.8,
        weight: 30,
        // power: false
        // power: ''
        power: 0
    }
}

let weight = will_pokemon.pikachu.weight;
console.log('weight:', weight);

// Reference error - Andrei doesn't have pikachu:
// let weight2 = andrei_pokemon.pikachu.weight;
// console.log('weight2:', weight2);

// Old solution - if statement:
if (andrei_pokemon.pikachu && andrei_pokemon_pokemon.pikachu.weight) {
    let weight2 = andrei_pokemon.pikachu.weight;
    console.log('weight2:', weight2);
} else {
    let weight2 = undefined; // To avoid errors
    console.log('weight2:', weight2);
}

// New solution - optional chaining:
let weight3 = andrei_pokemon?.pikachu?.weight;
console.log('weight3:', weight3)

let weight4 = andrei_pokemon?.raichu?.weight;
console.log('weight4:', weight4)


// Nullish Coalescing Operation (??)
let andrei_pokemon2 = {
    raichu: {
        species: 'Mouse Pokemon',
        height: 0.8,
        weight: 30,
        power: 'lightning'
    }
}

// When you're not sure if you have 'power' property:
// OR operator checks if power exists || false || ''
let power = andrei_pokemon2?.raichu?.power || 'no power'
console.log('power:', power);

let power2 = andrei_pokemon?.raichu?.power || 'no power'
console.log('power2:', power2);

// Accept nullish values (false, 0 or '') using ?? operator:
let power3 = andrei_pokemon?.raichu?.power ?? 'no power'
console.log('power3:', power3);


// Covered in later subjects:
// * Promise.allSettled
// * globalThis
