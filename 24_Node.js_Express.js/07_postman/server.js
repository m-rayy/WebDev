const express = require('express');

const app = express();

app.use(express.urlencoded({extended: false}));
app.use(express.json());

app.get('/', (req, res) => {
    res.send("getting root");
})

app.get('/profile', (req, res) => {
    res.send("getting profile");
})

app.post('/profile', (req, res) => {
    console.log(req.body);
    const user = {
        name: 'M-Ray',
        hobby: 'Shredding'
    }
    // res.send(user);
    res.send("Success");
})

// Next options:
// app.put()
// app.delete()

app.listen(3000);
