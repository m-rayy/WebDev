// const handleSignin = (req, res, db, bcrypt)=> {
const handleSignin = (db, bcrypt)=> (req, res)=> {
    const { email, password } = req.body;
    if (!email || !password) {
        return res.status(400).json('Incorrect form submission');
    }
    db.select('email', 'hash').from('login')
        .where('email', '=', email)
        .then(data => {
            const isValid = bcrypt.compareSync(password, data[0].hash);
            if (isValid) {
                return db.select('*').from('users')
                .where('email', '=', email)
                .then(user => {
                    res.json(user[0])
                })
                .catch(err => res.status(400).json('Unable to get user'))
            } else {
                res.status(400).json('Incorrect signin credentials')
            }
        })
        .catch(err => res.status(400).json('Unable to signin'))
}

module.exports = {
    handleSignin: handleSignin
}

// v2.0:
// app.post('/signin', (req, res)=> {
//     db.select('email', 'hash').from('login')
//         .where('email', '=', req.body.email)
//         .then(data => {
//             const isValid = bcrypt.compareSync(req.body.password, data[0].hash);
//             if (isValid) {
//                 return db.select('*').from('users')
//                 .where('email', '=', req.body.email)
//                 .then(user => {
//                     res.json(user[0])
//                 })
//                 .catch(err => res.status(400).json('Unable to get user'))
//             } else {
//                 res.status(400).json('Incorrect signin credentials')
//             }
//         })
//         .catch(err => res.status(400).json('Unable to signin'))
    // v1.0:
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
// })
