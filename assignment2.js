var express = require("express");
var app = express();

app.get("/greet", function(request, response){
    response.writeHead(200, {'Content-Type':'text/html'});
    response.write("<h1> Welcome to Web App </h1>");
    response.end();
});

app.all("/*", function(request, response){
    response.writeHead(200, {'Content-Type':'text/html'});
    response.write("<h1> Good Afternoon </h1> <p style = 'font-size:x-large;'> Go to <b><i>localhost:9000/greet</i></b> to see result of this script </p>");
    response.end();
});

app.listen(9000);

console.log("Server is Running on Port 9000....");