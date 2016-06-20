var http = require("http");
http.createServer(function (request, response){
    respons.writeHead(200, {'Content-Type': 
                           'text/plain'});
    
    response.end('Hello World\n');
}).listen(8081);

console.log('Server running');