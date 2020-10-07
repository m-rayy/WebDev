// Object spread operator
// Example 1:
const array = [1, 2, 3, 4, 5];

function sum(a, b, c, d, e) {
    return a + b + c + d + e;
}

console.log(sum(array));
console.log(sum(...array));

// Example 2:
const animals = {
    tiger: 23,
    lion: 5,
    monkey: 2,
    bird: 40
}

const { tiger, lion, ...rest} = animals;

console.log(tiger);
console.log(lion);
console.log(rest);

// Example 3:
function objectSpread(p1, p2, p3) {
    console.log(p1);
    console.log(p2);
    console.log(p3);
}

objectSpread(tiger, lion, rest);
