const express = require('express');

/*
API plan:
/ --> res = this is working
/signin --> POST = success/fail (over HTTPS, passwords not shared with middleware)
/register --> POST = user
/profile/:userId --> GET = user
/image --> PUT --> user (update rank)
*/

const app = express();

const database = {
    users: [
        {
            id: '123',
            name: 'John',
            email: 'john@gmail.com',
            password: 'cookies',
            entries: 0,
            joined: new Date()
        },
        {
            id: '124',
            name: 'Sally',
            email: 'sally@gmail.com',
            password: 'bananas',
            entries: 0,
            joined: new Date()
        }
    ]
}

// / --> res = this is working
app.get('/', (req, res)=> {
    res.json('this is working');
})

// /signin --> POST = success/fail (over HTTPS, passwords not shared with middleware)
app.post('/signin', (req, res)=> {
    // .json() has more features compared to .send()
    res.send('signin is working')
})

app.listen(3000, ()=> {
    console.log('app is running on port 3000');
})
