// Advanced Arrays
const array = [1, 2, 10, 16];

const double = [];
const newArray = array.forEach((num) => {
    double.push(num * 2); //append
});

double;


// Map
// const mapArray = array.map(num => {
//     return num * 2;
// });

// Refactor:
// No need for brackets if there is only a single parameter
// No need to 'return' with map (didn't work in exercise)
const mapArray = array.map(num => num * 2);

mapArray;


// Filter
const filterArray = array.filter(num => num > 5);

filterArray;


// Reduce (shrink array)
const reduceArray = array.reduce((acc, num) => {
    return acc + num
}, 0); // set accumulator (acc) value inside reduce function

reduceArray;
