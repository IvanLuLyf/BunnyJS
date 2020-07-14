'use strict';
var http = require('http');

var PORT = process.env.PORT || 3000;

http.createServer(function (request, response) {
    console.log(request.url);
    response.writeHead(200, {'Content-Type': 'text/html'});
    var url_array = request.url.split('/');
    if (!url_array[1]) url_array[1] = 'index';
    try {
        var controller = require('../app/controller/' + url_array[1]);
        var action = url_array[2] || 'index';
        response.end(controller['ac_' + action]());
    }catch (e) {
        
    }
}).listen(PORT);

console.log('BunnyJS\nServing HTTP on port ' + PORT + '...\nRunning on http://127.0.0.1:' + PORT + '/ (Press CTRL+C to quit)');

