var todos = [
    "clean room",
    "brush teeth",
    "exercise",
    "study javascript",
    "eat healthy"
];

var todosLength = todos.length

// FOR LOOPS
// for (var i=0; i < todos.length; i++) {
//     e.log(todos[i] + "!");
// }

for (i in todos) {
    todos[i] = todos[i] + "!";
    console.log(todos);
}

for (var i=0; i < todosLength; i ++) {
    todos.pop();
    console.log(todos);
}

// WHILE LOOPS
var counterOne = 0;
while (counterOne < 10) {
    console.log("while", counterOne);
    counterOne++;
}

// var counterOne = 10;
// while (counterOne > 0) {
//     console.log(counterOne);
//     counterOne--;
//     // infinite loop:
//     // counterOne++
// }

// DO WHILE LOOPS
var counterTwo = 10;
do {
    console.log("do while", counterTwo);
    counterTwo--;
} while (counterTwo > 0)

// forEACH LOOP
var todos = [
    "clean room",
    "brush teeth",
    "exercise",
    "study javascript",
    "eat healthy"
];

todos.forEach(function(i) {
    console.log(i + "!");
})

function logTodos(todo, i) {
    console.log(todo, i)
}

todos.forEach(logTodos);

function addExclamation(todo, i) {
    todos[i] = todo + "!";
}

todos.forEach(addExclamation);
console.log(todos)