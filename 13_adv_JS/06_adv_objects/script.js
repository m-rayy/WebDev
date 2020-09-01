// Reference type
console.log([] === []);
console.log([1] === [1]);

var object1 = {value: 10}
var object2 = object1
var object3 = {value: 10}

console.log(object1 === object2);
console.log(object1 === object3);

object1.value = 15;
console.log(object2.value);
console.log(object3.value);


// Context vs Scope
// TODO: not very clear
function b() {
    let a =4;
};
// console.log(a); // Not in scope

const object4 = {
    a: function() {
        console.log(this); // The JavaScript 'this' keyword refers to the object it belongs to.
    }
};
object4;


// Instantiation
// Create instances for multiple copies of an object
class Player {
    constructor(name, type) {
        console.log('Player: ', this);
        this.name = name;
        this.type = type;
    }
    introduce() {
        console.log(`Hi I'm ${this.name}, I'm a ${this.type}`);
    }
};

// New syntax:
class Wizard extends Player {
    constructor(name, type) {
        super(name, type)
        console.log('Wizard: ', this);
    }
    play() {
        console.log(`WEEEEE I'm a ${this.type}`);
    }
};

const mage1 = new Wizard('Podniebienie', 'Paper Mage');
const mage2 = new Wizard('Taburess', 'Carton Mage');

// Classical inheritance - not recommended:
// var ClassicalPlayer = function(name, type) {
//     this.name = name;
//     this.type = type;
// }

// ClassicalPlayer.prototype.introduce = function() {
//     console.log(`Hi I'm ${this.name}, I'm a ${this.type}`);
// }

// const classical_mage1 = new ClassicalPlayer('Podniebienie', 'Paper Mage');
// const classical_mage2 = new ClassicalPlayer('Taburess', 'Carton Mage');

// classical_mage1.play = function() {
//     console.log(`WEEEEE I'm a ${this.type}`);
// }

// classical_mage2.play = function() {
//     console.log(`WEEEEE I'm a ${this.type}`);
// }

// console.log(classical_mage1);
// console.log(classical_mage2);
