const express = require('express');

const app = express();

app.get('/', (req, res)=> {
    res.send('this is working');
})

app.listen(3000, ()=> {
    console.log('app is running on port 3000');
})

/*
API plan:
/ --> res = this is working
/signin --> POST = success/fail (over HTTPS, passwords not shared with middleware)
/register --> POST = user
/profile/:userId --> GET = user
/image --> PUT --> user (update rank)
*/
