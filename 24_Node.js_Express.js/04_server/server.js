const http = require('http');

const server = http.createServer((request, response) => {
    // console.log('I hear you. Thank you for your request!')
    console.log('headers:', request.headers);
    console.log('method:', request.method);
    console.log('url:', request.url);

    const user = {
        name: 'M-Ray',
        hobby: 'Shredding'
    }

    response.setHeader('Content-Type', 'text/html');
    // response.end('<h1>Helllloooooooo!</h1>');
    response.end(JSON.stringify(user));
});

server.listen(3000);