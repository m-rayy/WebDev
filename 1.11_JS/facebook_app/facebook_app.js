var database = [
    {
        username: "m-ray",
        password: "secret"
    },
    {
        username: "Sally",
        password: "secret"
    },
    {
        username: "Ingrid",
        password: "secret"
    }
];

var newsFeed = [
    feed1 = {
        username: "Bobby",
        timeline: "Hellloooo friends!"
    },
    feed2 = {
        username: "Sally",
        timeline: "JS is SO cool!"
    }
];

var userNamePrompt = prompt("What's your username?");
var passwordPrompt = prompt("What's your password?");

function isUserValid(username, password) {
    for (var i=0; i < database.length; i++) {
        if (database[i].username === username &&
            database[i].password === password) {
                return true;
            }
    }
    return false;
}

function signIn(username, password) {
    // Method 1
    // if (username === database[0].username &&
    //     password === database[0].password) {
    //     console.log(newsFeed);
    // } else {
    //     alert ("Sorry, wrong username and password!");
    // }
    
    // (incorrect) Method 2
    // for (var i=0; i < database.length; i++) {
    //     if (database[i].username === username &&
    //         database[i].password === password) {
    //         console.log(newsFeed);
    //     } else {
    //         alert("Sorry, wrong username and password!");
    //     }
    // }

    // Method 3 using new isUserValid function
    if (isUserValid(username, password)) {
        console.log(newsFeed);
    } else {
        alert("Sorry, wrong username and password!");
    }
}

signIn(userNamePrompt, passwordPrompt);