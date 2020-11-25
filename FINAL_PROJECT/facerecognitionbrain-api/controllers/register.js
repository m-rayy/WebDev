// const handleRegister = (req, res, db, bcrypt)=> {
const handleRegister = (db, bcrypt)=> (req, res)=> {
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
    })
    .catch(err => res.status(400).json('Unable to register user'))
}

module.exports = {
    handleRegister: handleRegister
};

// v2.0:
// app.post('/register', (req, res)=> {
//     const { name, email, password } = req.body;
//     const hash = bcrypt.hashSync(password, 8);
//         db.transaction(trx => {
//             trx.insert({
//                 hash: hash,
//                 email: email
//             })
//             .into('login')
//             .returning('email')
//             .then(loginEmail => {
//                 return trx('users')
//                     .returning('*')
//                     .insert({
//                         name: name,
//                         email: loginEmail[0],
//                         joined: new Date()
//                     })
//                     .then(user => {
//                         res.json(user[0])
//                     })
//             })
//             .then(trx.commit)
//             .catch(trx.rollback)
//         })
//         .catch(err => res.status(400).json('Unable to register user'))
    // v1.0:
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
// })
