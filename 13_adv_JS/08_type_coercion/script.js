// Type coercion

// == https://dorey.github.io/JavaScript-Equality-Table/
console.log(1 == '1');
// str '1' converted to int before comparison -> unpredictable
// Use === instead


// IF comparison https://dorey.github.io/JavaScript-Equality-Table/
if (1) {
    console.log('1 converted to true');
};

if (0) {
    console.log("won't log as 0 converted to false");
};

// Object.is (new to JS)
console.log(+0 === -0);
console.log(Object.is(+0, -0)); // technically different objects in JS

console.log(NaN === NaN);
console.log(Object.is(NaN, NaN));
