// Example 1:
el.addEventListener("click", submitForm);

// callback pyramid of doom
movePlayer(100, 'Left', function() {
    movePlayer(400, 'Left', function() {
        movePlayer(10, 'Right', function() {
            movePlayer(330, 'Right', function() {
            });
        });
    });
});


// Example 2:
grabTweets('twitter/user1', (error, user1Tweets) => {
    if (error) {
        throw Error;
    }
    displayTweets(user1Tweets)
    grabTweets('twitter/user1', (error, user2Tweets) => {
        if (error) {
            throw Error;
        }
        displayTweets(user2weets)
        grabTweets('twitter/user3', (error, user3Tweets) => {
            if (error) {
                throw Error;
            }
            displayTweets(user3Tweets)
        });
    });
});
