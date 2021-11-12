var module = require('./cal.js');

console.log(module);
url = require('url');
var querystring1 = require('querystring');
var http = require('http');


http.createServer(function(request, response) {
var data1 = '';
if (request.url === '/favicon.ico') {
response.writeHead(200, { 'Content-Type': 'image/x-icon' });
response.end();
} 
else
 {
request.on('data', function(chunk) {
            data1 += chunk;
        });

request.on('end', function() {
var op1 = querystring1.parse(data1)["no1"];
op1 = parseInt(op1);
console.log(op1);
var op2 = querystring1.parse(data1)["no2"];
op2 = parseInt(op2);
console.log(op2);
if (request.url === '/Addition') 
{
  module.add(op1, op2, response);
  response.write("answer"+module.add(op1, op2, response));
} 
else if (request.url === '/Subtraction') 
{
 module.sub(op1, op2, response);
 response.write("answer"+module.sub(op1, op2, response));

}
else if (request.url === '/Multiplication') 
{
    module.mult(op1, op2, response);
    response.write("answer"+module.mult(op1, op2, response));

}
else if (request.url === '/Division') 
{
    module.div(op1,op2, response);
    response.write("answer"+module.div(op1, op2, response));

}
else {
console.log("invalid url");

}
response.end();
    
 });
    }
}).listen(10000);
console.log("Server started");


