// ITERATING (only arrays & strings have iterrable property)
const basket = ['apples', 'oranges', 'grapes'];
const detailedBasket = {
    apples: 5,
    oranges: 10,
    grapes: 1000
}

// Method 1
for (let i = 0; i < basket.length; i++) {
    console.log(basket[i]);
}


// Method 2
basket.forEach(item => {
    console.log(item);
})


// Method 3 & 4: While, Do While loops


// New method 5: for of
for (item of basket) {
    console.log(item);
}

for (item of 'basket') {
    console.log(item);
}


// New method 6: for in - loop over and see object properties
// detailedBasket is not iterable! -> ENUMERATING
for (item in detailedBasket) {
    console.log(item);
}

// This works because arrays are an JS object:
// basket = {
//     1: 'apples', 
//     2: 'oranges',
//     3: 'grapes'
// }
for (item in basket) {
    console.log(item);
}
