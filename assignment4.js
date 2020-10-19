var express = require("express");
var app = express();

app.get("/login/:userid/:password", function(request, response){
    if(request.params.userid == "object" && request.params.password == "knowit" )
        response.send("<h1> Login Successful..!! </h1>");
    else
        response.send("<h1> Login Failed..!! </h1>");
});

app.all("/*", function(request, response){
    response.send("<h1> Good Afternoon... </h1> <p style = 'font-size:x-large;'> Go to <b><i>localhost:9000/login/username/password</i></b> to Login </p>");
});

app.listen(9000);

console.log("Server is Running on Port 9000....");