// CLOSURES
// Child scope always has access to parent scope
// Parent scope does not have access to child scope

const first = () => {
    const greet = 'Hi';
    const second = () => {
        const name = "Bobby";
        // alert(greet);
        console.log(greet);
    }
    return second;
}

var newFunc = first();
newFunc();


// CURRYING
const multiply = (a, b) => a * b;

// Function accepting one parameter at a time:
const curriedMultiply = (a) => (b) => a * b;
console.log(curriedMultiply(3)(3));

// Chain curried function:
const multiplyBy5 = curriedMultiply(5);
console.log(multiplyBy5(7));
console.log(multiplyBy5(8));
console.log(multiplyBy5(9));


// COMPOSE
// Chain two functions where the output of one function is the input of another:
const compose = (f, g) => (a) => f(g(a));

const sum = (num) => num +1;
console.log(compose(sum, sum)(5));


// Avoid SIDE EFFECTS
// Aim for FUNCTIONAL PURITY

var a = 1;

function b() {
    a = 2; // This is a side effect
}

// Determinism: always returns the same result
function addOne() {
    return a + 1 // Better to return
}
