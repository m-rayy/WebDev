const express = require('express');
const bcrypt = require('bcryptjs');
const cors = require('cors');
const knex = require('knex');

const register = require('./controllers/register');
const signin = require('./controllers/signin');
const profile = require('./controllers/profile');
const image = require('./controllers/image');

/*
API plan:
/ --> res = this is working
/signin --> POST = success/fail (over HTTPS, passwords not shared with middleware)
/register --> POST = user
/profile/:userId --> GET = user
/image --> PUT --> user (update rank)
*/

const db = knex({
    client: 'pg',
    connection: {
        // localhost:  
        host : '127.0.0.1',
        user : '',
        password : '',
        database : 'facerecogbrain'
    }
});

// Test postgres db:
// db.select('*').from('users').then(data => {
//     console.log(data);
// });

const app = express();
app.use(express.json());
app.use(cors());

// / --> res = this is working
app.get('/', (req, res)=> {
    // res.json('this is working');
    res.json(database.users);
})

// /signin --> POST = success/fail (over HTTPS, passwords not shared with middleware)
app.post('/signin', signin.handleSignin(db, bcrypt))
    // app.post('/signin', (req, res) => {
    //     signin.handleSignin(req, res, db, bcrypt)
    // })

// /register --> POST = user
// TODO: signout redirects to register
app.post('/register', register.handleRegister(db, bcrypt))
    // app.post('/register', (req, res) => {
    //     register.handleRegister(req, res, db, bcrypt)
    // })

// /profile/:userId --> GET = user
app.get('/profile/:id', profile.handleProfile(db))
    // app.get('/profile/:id', (req, res) => {
    //     profile.handleProfile(req, res, db)
    // })

// /image --> PUT --> user (update rank)
app.put('/image', image.handleImage(db))
    // app.put('/image', (req, res) => {
    //     image.handleImage(req, res, db)
    // })
app.post('/imageURL', image.handleAPICall)


app.listen(3000, ()=> {
    console.log('app is running on port 3000')
})

// v1.0 db:
// const database = {
//     users: [
//         {
//             id: '123',
//             name: 'John',
//             email: 'john@gmail.com',
//             password: 'cookies',
//             entries: 0,
//             joined: new Date()
//         },
//         {
//             id: '124',
//             name: 'Sally',
//             email: 'sally@gmail.com',
//             password: 'apples',
//             entries: 0,
//             joined: new Date()
//         }
//     ],
//     login: [
//         {
//             id: '987',
//             hash: '',
//             email: 'john@gmail.com'
//         }
//     ]
// }
