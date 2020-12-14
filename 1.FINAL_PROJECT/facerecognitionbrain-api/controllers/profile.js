// const handleProfile = (req, res, db)=> {
const handleProfile = (db)=> (req, res)=> {
    const { id } = req.params;
    db.select('*')
    .from('users')
    .where({id})
    .then(user => {
        if (user.length) {
            res.json(user[0])
        } else {
            res.status(400).json('User not found')
        }
    })
    .catch(err => res.status(400).json('Error getting user'))
}

module.exports = {
    handleProfile: handleProfile
}

// v2.0:
// app.get('/profile/:id', (req, res)=> {
//     const { id } = req.params;
//     // let found = false
//     db.select('*')
//     .from('users')
//     // .where({id: id})
//     .where({id})
//     .then(user => {
//         if (user.length) {
//             res.json(user[0])
//         } else {
//             res.status(400).json('User not found')
//         }
//     })
// .catch(err => res.status(400).json('Error getting user'))
    // v1.0
    // database.users.forEach(user => {
    //     if (user.id === id) {
    //         found = true;
    //         return res.json(user);
    //     }
    // })
    // if (!found) {
    //     res.status(404).json('not found');
    // }
// })
