// .flat() on arrays
const array = [1, 2, 3, 4, 5];
console.log(array.flat()); // No effect

const array2 = [1, [2, 3], [4, 5]];
console.log(array2.flat()); // From lists of lists to list (with depth of 1)

const array3 = [1, [2, 3], [4, [5]]];
console.log(array3.flat(1)); // Flattens up to 1 level by default
console.log(array3.flat(2)); // Now flattens 2 levels

const entries = ['Bob',,,'Sally'];
console.log(entries.flat()); // Removes empty entries
console.log(entries.flatMap(entry => entry + '!')); // Map flattened items


// .trimStart() and .trimEnd() -> same as trim but with direction
let eg = 'M-Ray'
eg = eg.padStart(8)
eg = eg.padEnd(11);
eg;

console.log(eg.trimStart());
console.log(eg.trimEnd());
// TODO: only works for whitespace? (no symbols)


// .fromEntries()
userProfiles = [['user1', 1], ['user2', 2], ['user3', 3]];

console.log(Object.fromEntries(userProfiles));

// reverse Object.entries(obj)
const obj = Object.fromEntries(userProfiles);
console.log(Object.entries(obj));


// Exception handling
try {
    dummy_variable + 'hi'
} catch {
    console.log('you messed up!');
}

// Save error message:
try {
    dummy_variable + 'hi'
} catch (e){
    console.log('you messed up with ' + e);
}


// Exercise9 (ES10)
// #1 Turn this array into a new array: [1,2,3,[4],[5]]. Bonus if you can do it on one line
const exc_array = [[1],[2],[3],[[[4]]],[[[5]]]];
console.log(exc_array.flat(2));

// #2 Turn this array into a new array: [ 'Hello young grasshopper!', 'you are', 'learning fast!' ]
const greeting = [["Hello", "young", "grasshopper!"], ["you", "are"], ["learning", "fast!"]];
console.log(greeting.map(greeting => greeting.join(' ')));
// console.log(greeting.flatMap(x => x.join(' ')))

//#3 Turn the greeting array above into a string: 'Hello young grasshopper you are learning fast!'
console.log(greeting.map(greeting => greeting.join(' ')).join(' '));
// console.log(greeting.flatMap(x => x.join(' ')).join(' '))

//#4 Turn the trapped 3 number into: [3]
const trapped = [[[[[[[[[[[[[[[[[[[[[[[[[[3]]]]]]]]]]]]]]]]]]]]]]]]]];
console.log(trapped.flat(Infinity));
// Infintiy is actually a LARGE number in JavaScipt. It represents the maximum amount of memory that we can hold for a number!
// Learn more here: https://riptutorial.com/javascript/example/2337/infinity-and--infinity

//#5 Clean up this email to have no whitespaces. Make the answer be in a single line (return a new string):
const userEmail3 = '     cannotfillemailformcorrectly@gmail.com   ';
console.log(userEmail3.trim());
// console.log(userEmail3.trimEnd().trimStart())

//#6 Turn the below users (value is their ID number) into an array: [ [ 'user1', 18273 ], [ 'user2', 92833 ], [ 'user3', 90315 ] ]
const users = { user1: 18273, user2: 92833, user3: 90315 }
// console.log(Object.entries(users));
const usersArray = Object.entries(users)
console.log(usersArray);

//#7 change the output array of the above to have the user's IDs multiplied by 2 -- Should output:[ [ 'user1', 36546 ], [ 'user2', 185666 ], [ 'user3', 180630 ] ]
// console.log(Object.entries(users).map(entry => {
//     entry[1] = entry[1] * 2;
//     return entry;
// }));
updatedUsersArray = usersArray.map((user) => [user[0], user[1] * 2])

//#8 change the output array of question #7 back into an object with all the users IDs updated to their new version. Should output: { user1: 36546, user2: 185666, user3: 180630 }
// console.log(Object.entries(users).map(entry => {
//     entry[1] = entry[1] * 2;
//     return entry;
// }));
console.log(Object.fromEntries(updatedUsersArray));
