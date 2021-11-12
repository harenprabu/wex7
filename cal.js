var http = require('http'); 
var querystring=require('querystring'); 

module.exports.add = function (x, y) {  
    return x + y;  
};  
    
module.exports.sub = function (x, y) {  
    return x - y;  
};  
    
module.exports.mult = function (x, y) {  
    return x * y;  
};  
    
module.exports.div = function (x, y) {  
    return x / y;  
}; 
