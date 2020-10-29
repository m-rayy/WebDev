const express = require('express');

const app = express();

// Middleware:
app.use((req, res, next) => {
    console.log('<h1>Hellooo!</h1>');
    next();
})

app.get('/', (req, res) => {
    res.send("testing testing");
})

app.listen(3000);
