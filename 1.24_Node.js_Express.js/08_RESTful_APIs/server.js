const express = require('express');

const app = express();

app.use(express.urlencoded({extended: false}));
app.use(express.json());


// Exercise 1:
// app.get('/', (req, res) => {
//     // Test with: localhost:3000/?name=M-Ray&hobby=Shredding
//     // console.log(req.query);
    
//     // req.body
    
//     // Test with Postman Headers:
//     // console.log(req.headers)
    
    
//     res.send("getting root");
// })

// app.get('/:id', (req, res) => {
//     // Test with: localhost:3000/123
//     // console.log(req.params);
    
//     // Test 404 not found error:
//     res.status(404).send("Song Not Found");
// })


// Exercise 2:
app.use(express.static(__dirname + '/public'))


app.listen(3000);
