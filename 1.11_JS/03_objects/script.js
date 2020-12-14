var user = {
    name: "John",
    age: 34,
    hobby: "Soccer",
    isMarried: false,
    spells: ["abrakadra", "shazam", "boo"],
    // function inside an object is a method:
    shout: function() {
        console.log("AHHHHHHH!")
    }
}

console.log(user.name)

user.isMarried = true
console.log(user.isMarried)

var list = [
    {
        username: "user1",
        password: "secret"
    },
    {
        username: "user2",
        password: "pass"
    }
]

console.log(list[0].password)

user.shout()