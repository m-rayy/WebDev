// Complete the below questions using this array:
const array = [
  {
    username: "john",
    team: "red",
    score: 5,
    items: ["ball", "book", "pen"]
  },
  {
    username: "becky",
    team: "blue",
    score: 10,
    items: ["tape", "backpack", "pen"]
  },
  {
    username: "susy",
    team: "red",
    score: 55,
    items: ["ball", "eraser", "pen"]
  },
  {
    username: "tyson",
    team: "green",
    score: 1,
    items: ["book", "pen"]
  },

];

//Create an array using forEach that has all the usernames with a "!" to each of the usernames
// array.forEach(username => names.push(array + '!'));
let names = [];
// i = user
array.forEach(user => {
	let { username } = user;
	names.push(username + "!");
});
names;


//Create an array using map that has all the usernames with a "? to each of the usernames
const mapNames = array.map(user => {
  let {username} = user;
  return username + "?";
});
mapNames;

//Filter the array to only include users who are on team: red
const filterTeam = array.filter(user => {
  return user.team === "red";
});
filterTeam;

//Find out the total score of all users using reduce
const reduceScore = array.reduce((acc, user) => {
  return acc + user.score;
}, 0);
reduceScore;


// (1), what is the value of i?
// (2), Make this map function pure:
const arrayNum = [1, 2, 4, 5, 8, 9];
const newArray = arrayNum.map((num, i) => {
	console.log(num, i);
	// alert(num);
	num;
	return num * 2;
});
newArray;
// i = index (length of array)
const mapArray = arrayNum.map(num => { // why (num, i) in solutions?
  return num * 2
});
mapArray;


//BONUS: create a new list with all user information, but add "!" to the end of each ITEMS they own.
const bonus = array.map(user => {
  user.items = user.items.map(i => i + '!');
  return user;
});
bonus;
