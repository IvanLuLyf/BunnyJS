'use strict';
var http = require('http');

var PORT = process.env.PORT || 3000;

http.createServer(function (request, response) {
    console.log(request);
    response.writeHead(200, {'Content-Type': 'text/html'});
    response.end('BunnyJS');
}).listen(PORT);

console.log('BunnyJS\nServing HTTP on port ' + PORT + '...\nRunning on http://127.0.0.1:' + PORT + '/ (Press CTRL+C to quit)');
