// includes()
console.log('Helllllooo'.includes('o'));

const pets = ['cat', 'dog', 'bat']
console.log(pets.includes('dog'));
console.log(pets.includes('bird'));


// exponential operator **
const square = (x) => x**2;
console.log(square(2));
console.log(square(5));

const cube = (x) => x**3;
console.log(cube(2));
console.log(cube(5));


// Exercise7
// #1) Check if this array includes the name "John".
const dragons = ['Tim', 'Johnathan', 'Sandy', 'Sarah'];
console.log(dragons.includes('John'));

// #2) Check if the dragons array includes any name that has "John" inside of it. If it does, return that
// name or names in an array.
dragons.forEach(name => {
    if (name.includes('John')) {
        return console.log(name);
    };
});
// Better alternative from solutions:
console.log(dragons.filter(name => name.includes('John')));

// #3) Create a function that calulates the power of 100 of a number entered as a parameter
const powerof100 = (x) => x**100;
console.log(powerof100(2));
console.log(powerof100(5));

// #4) Using your function from #3, put in the paramter 10000. What is the result?
// Research for yourself why you get this result
console.log(powerof100(10000));
// Infinity is displayed when a number exceeds the upper limit of the floating point numbers, which is 1.797693134862315E+308.
// -Infinity is displayed when a number exceeds the lower limit of the floating point numbers, which is -1.797693134862316E+308.

// Babel comparison:
// https://babeljs.io/repl/#?browsers=defaults%2C%20not%20ie%2011%2C%20not%20ie_mob%2011&build=&builtIns=false&spec=false&loose=false&code_lz=Q&debug=false&forceAllTransforms=false&shippedProposals=false&circleciRepo=&evaluate=false&fileSize=false&timeTravel=false&sourceType=module&lineWrap=true&presets=env%2Creact%2Cstage-2%2Cenv&prettier=false&targets=&version=7.11.5&externalPlugins=
