const http = require('http');

// create a new server object
http.createServer((req, res) => {
    res.write('Hello World');
    res.end();
}).listen(5000,()=>console.log('Server running..'))