// Pass by (primitive) value
var a = 5;
var b = a;
b++;

console.log(a);
console.log(b);


// Pass by (object) reference
let obj1 = {name: 'Yao',  password: '123'}
let obj2 = obj1; // Reference to object in memory (not copying)
obj2.password = 'easypeasy' // Accidental reassignments might happen

console.log(obj1);


var c = [1, 2, 3, 4, 5];
var d = [].concat(c); // Copy method (concat) to avoid reassignment issue
d.push(666)

console.log(c);
console.log(d);


let obj = {a: 'a', b: 'b', c: 'c', d: {deep: 'try and copy me'}};
// Clone to another memory location
let clone = Object.assign({}, obj);
let clone2 = {...obj}

obj.c = 5;  
console.log(obj);
console.log(clone);
console.log(clone2);
let superclone = JSON.parse(JSON.stringify(obj)); // Use JSON for deep clone (all layers)

obj.d.deep = 'hahahaha'; // Deeper layer overwritten! (Shallow clone, clones first layer)
console.log(obj);
console.log(clone);
console.log(clone2);
console.log(superclone);

// Warning: deep clones can have performance implications
