const express = require('express');
const bcrypt = require('bcryptjs');
const cors = require('cors');
const knex = require('knex');

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

// / --> res = this is working
app.get('/', (req, res)=> {
    // res.json('this is working');
    res.json(database.users);
})

// /signin --> POST = success/fail (over HTTPS, passwords not shared with middleware)
app.post('/signin', (req, res)=> {
    db.select('email', 'hash').from('login')
        .where('email', '=', req.body.email)
        .then(data => {
            const isValid = bcrypt.compareSync(req.body.password, data[0].hash);
            if (isValid) {
                return db.select('*').from('users')
                .where('email', '=', req.body.email)
                .then(user => {
                    res.json(user[0])
                })
                .catch(err => res.status(400).json('Unable to get user'))
            } else {
                res.status(400).json('Incorrect signin credentials')
            }
        })
        .catch(err => res.status(400).json('Unable to signin'))
    // bcrypt.compare('ballz', '$2a$08$ESlcks2IjdjjxQyIQkXAsuRQH.n7zGerhdDDY263lxaRlCokMiU5S', function(err, hash) {
    //     console.log(hash);
    // });
    // .json() has more features compared to .send()
    // if (req.body.email == database.users[0].email &&
    //     req.body.password == database.users[0].password) {
    //     // res.json('success');
    //     res.json(database.users[0])
    // } else {
    //     res.status(400).json('error logging in');
    // }
})


// /register --> POST = user
app.post('/register', (req, res)=> {
    const { name, email, password } = req.body;
    const hash = bcrypt.hashSync(password, 8);
        db.transaction(trx => {
            trx.insert({
                hash: hash,
                email: email
            })
            .into('login')
            .returning('email')
            .then(loginEmail => {
                return trx('users')
                    .returning('*')
                    .insert({
                        name: name,
                        email: loginEmail[0],
                        joined: new Date()
                    })
                    .then(user => {
                        res.json(user[0])
                    })
            })
            .then(trx.commit)
            .catch(trx.rollback)
            // TODO: signs in despite duplicate register fail
        })
        .catch(err => res.status(400).json('Unable to register user'))
    // bcrypt.hash(password, 8, function(err, hash) {
    //     console.log(hash);
    // });
    // database.users.push({
    //     id: '125',
    //     name: name,
    //     email: email,
    //     entries: 0,
    //     joined: new Date()
    // })
})

// /profile/:userId --> GET = user
app.get('/profile/:id', (req, res)=> {
    const { id } = req.params;
    // let found = false
    db.select('*')
    .from('users')
    // .where({id: id})
    .where({id})
    .then(user => {
        if (user.length) {
            res.json(user[0])
        } else {
            res.status(400).json('User not found')
        }
    })
    .catch(err => res.status(400).json('Error getting user'))
    // database.users.forEach(user => {
    //     if (user.id === id) {
    //         found = true;
    //         return res.json(user);
    //     }
    // })
    // if (!found) {
    //     res.status(404).json('not found');
    // }
})

// /image --> PUT --> user (update rank)
app.put('/image', (req, res)=> {
    // TODO: image recognition fails - api is down / test once up again!
    const { id } = req.body;
    db('users')
    .where('id', '=', id)
    .increment('entries', 1)
    .returning('entries')
    .then(entries => {
        res.json(entries[0])
    })
    .catch(err => 
        res.status(400).json('Unable to get entries')
    )
    // let found = false;
    // database.users.forEach(user => {
    //     if (user.id === id) {
    //         found = true;
    //         user.entries ++
    //         return res.json(user.entries);
    //     }
    // })
    // if (!found) {
    //     res.status(404).json('not found');
    // }
})

app.listen(3000, ()=> {
    console.log('app is running on port 3000')
})
