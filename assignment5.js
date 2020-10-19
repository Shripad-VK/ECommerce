var express = require("express");
var app = express();

app.get("*", function(request, response){
    response.send("<h1> This is General Route... </h1>");
}).listen(9000);

console.log("Server is Running on Port 9000....");