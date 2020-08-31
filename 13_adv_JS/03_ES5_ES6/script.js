// let + const
const player = 'Bobby'; // fixed variable (cannot reassign but you can change properties)
let experience = 100;
let wizardLevel = false; // new scope inside each {}

if  (experience > 90) {
    let wizardLevel = true;
    console.log('inside: ' + wizardLevel);
}

console.log('outside: ' + wizardLevel);


// Destructuring
const obj = {
    new_player: 'Sally',
    new_experience: 100,
    new_wizardLevel: false
}

// const new_player = obj.new_player;
// const new_experience = obj.new_experience;
// let new_wizardLevel = obj.new_wizardLevel;

// Even cleaner:
const { new_player, new_experience } = obj;
let {new_wizardLevel} = obj;

console.log(new_player);
console.log(new_experience);
console.log(new_wizardLevel);


// Object properties
const name = 'John Snow';

const obj2 = {
    [name]: 'hello',
    ['Ray' + ' ' + 'Smith']: 'hihi'
}

obj2

const a = "Simon";
const b = true;
const c = {};

const obj3 = {
    // a: a,
    // b: b,
    // c: c
    a, b, c // Faster decleration if the parameters have the same name
}

obj3


// Template strings
const greeting = "Hello" + name + ", you seem to be doing fine!";
console.log(greeting);

const greetingClean = `Hello ${name}, you seem to be doing fine!`;
console.log(greetingClean);

function greet(new_name='M-Ray', age=32, pet='T-rex') {
    return `Hello ${new_name}, you ${age} year old fart. How is your ${pet}?`;
}
// You can use function parameters to set previously undeclared variables:
console.log(greet());
// Enter new arguments:
console.log(greet('Max', 42, 'Smilodon'));


// Symbols <- unqiue types to avoid conflicts
let sym1 = Symbol();
let sym2 = Symbol('foo');
let sym3 = Symbol('foo');

console.log(sym1);
console.log(sym2);
console.log(sym2 === sym3);


// Arrow functions
function add(a2, b2) {
    return a2 + b2;
}
console.log(add(2, 2));

// Cleaner? Hmm...
const add2 = (a2, b2) => a2 + b2;
console.log(add2(2, 2));
