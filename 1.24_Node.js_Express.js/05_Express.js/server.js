const express = require('express');

const app = express();

app.get('/', (req, res) => {
    // res.send("Hellllooooo!");
    // res.send("<h1>Hellllooooo!</h1>");
    const user = {
        name: 'M-Ray',
        hobby: 'Shredding'
    }

    res.send(user);
})

app.get('/test', (req, res) => {
    res.send("testing directory");
})

// Next options:
// app.post()
// app.put()
// app.delete()

app.listen(3000);
