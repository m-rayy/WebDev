// First try!
var list = ["tiger", "cat", "bear", "bird"];
console.log(list[0]);

// List of numbers
var numbers = [1, 2, 3, 4];
console.log(numbers[0]);

// List of booleans
var booleans = [true, true, false ,false];
console.log(booleans[0]);

// List of functions
var functionList = [
    function apple() {
        return "apple";
    },
    function orange() {
        return "orange";
    }
];

console.log(functionList[0]);

// Mixed list
var mixedList = ["apples", 3, undefined, true, function apple() {
    return "apple";
}];

console.log(mixedList[0]);

// List within a list
var listCeption = [
    ["leonardo", "di", "caprio"]
];

console.log(listCeption[0][0])

// Shift list (removes first instance -> "tiger")
console.log("original list:", list);
list.shift();
console.log("shifted list:", list);

// Pop list (removes last instance -> "bird")
list.pop();
console.log("popped list:", list);

// Push item to list (adds new instance -> "elephant")
list.push("elephant")
console.log("pushed list:", list);

// Concatenate list (add arrays)
// This creates a new list, so you need to assign to variable!
var list = list.concat(["bee", "deer"]);
console.log("concatenated list:", list);

// Sort list
list.sort()
console.log("sorted list:", list)

// For more methods: https://www.w3schools.com/jsref/jsref_obj_array.asp
