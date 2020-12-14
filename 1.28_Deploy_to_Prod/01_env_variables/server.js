const { Server } = require('http');

// To see ALL environment variables:
// console.log(process.env);

// Example for using env variables:
const app = require('http')
    .createServer((req, res) => res.send('oh hi there!'));

// v1.0 - run 'node server.js':
// app.listen(3000, () => {
//     console.log(`Server is listening on port 3000`);
// });

//v2.0 - run 'PORT=3000 node server.js':
// const PORT = process.env.PORT;
// app.listen(PORT, () => {
    //     console.log(`Server is listening on port ${PORT}`);
    // });
    
// v3.0 - run 'PORT=3000 DATABASE_URL=test node server.js':
const PORT = process.env.PORT;
const DATABASE_URL = process.env.DATABASE_URL;
app.listen(PORT, () => {
    console.log(`Server is listening on port ${DATABASE_URL}`);
});
