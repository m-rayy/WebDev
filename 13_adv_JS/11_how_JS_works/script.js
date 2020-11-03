// JS is a single threaded language that can be non-blocking
// (Multithreaded languages can have have "deadlocks")
// (Deadlock: a situation where two or more threads are blocked forever, waiting for each other)

// The JS engine (V8 in Chrome) has a Memory Heap and a Call Stack

// Memory Heap:
const a = 1;
const b = 10;
const c = 100;

// Call Stack:
// (FILO (First In, Last Out))
console.log('1');
console.log('2');
console.log('3');

// Memory Heap:
const one = () => {
    const two = () => {
        console.log('4')
    }
    two();
}

// Call Stack:
console.log('4');
// two();
one();


// Create a STACK OVERFLOW :)
// function foo() {
//     foo(); // "Maximum call stack size exceeded"
// }

// foo();


// How to "unblock" threads? Asynchronous to the rescue

// Call Stack:
console.log('1');
setTimeout(() => {
    console.log('2');
}, 2000); // 
console.log('3');


// JS Run-Time Environment

// Run order 1, 3, 2:

// CALL STACK
// WEB API
// CALLBACK QUEUE (onClick, onLoad, onDone)
// EVENT LOOP

// CALL STACK
console.log('1');
// WEB API
// CALLBACK QUEUE
// EVENT LOOP

// CALL STACK
    setTimeout(() => {
        console.log('2');
    }, 2000);
// WEB API
// CALLBACK QUEUE
// EVENT LOOP

// CALL STACK
// WEB API
    setTimeout(() => {
        console.log('2');
    }, 2000);
// CALLBACK QUEUE
// EVENT LOOP

// CALL STACK
console.log('3');
// WEB API
    setTimeout(() => {
        console.log('2');
    }, 2000);
// CALLBACK QUEUE
// EVENT LOOP

// CALL STACK
// WEB API
    setTimeout(() => {
        console.log('2');
    }, 2000);
// CALLBACK QUEUE
// EVENT LOOP

// CALL STACK
// WEB API
// CALLBACK QUEUE -> callback()
// EVENT LOOP

// CALL STACK
// WEB API
// CALLBACK QUEUE
// EVENT LOOP -> callback()

// CALL STACK -> callback()
console.log('2');
// WEB API
// CALLBACK QUEUE
// EVENT LOOP

// CALL STACK
// WEB API
// CALLBACK QUEUE
// EVENT LOOP


// What if setTimeout is 0?
// Order is still 1, 3, 2 due to above Run-time environment order
