// const handleImage = (req, res, db)=> {
const handleImage = (db)=> (req, res)=> {
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
}

module.exports = {
    handleImage: handleImage
}

// v1.0:
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
