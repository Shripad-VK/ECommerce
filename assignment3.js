var express = require("express");
var { parse } = require('querystring');
var app = express();

app.get("/login", function(request, response) {
        response.send(`
            <!doctype html>
            <html>
            <body style = "font-size:xx-large; background-color:pink;">
                <div style = "text-align:center;">
                    <form action = "/validate" method = "POST">
                    Username : <input type = "text" name = "uname" style = "font-size:x-large;"/><br/><br/>
                    Password : <input type = "password" name = "pwd" style = "font-size:x-large;"/><br/><br/>
                    <button style = "font-size:x-large;"> Log In </button>
                </form>
            </body>
            </html>
        `);
});

app.post("/validate", function(request, response) {
    showLoginPage(request, result => {
            if(`${result.uname}`== "object" && `${result.pwd}`== "knowit")
                response.send("<h1> Login Successful..!! </h1>");
            else
                response.send("<h1> Login Failed..!! </h1>");
    });            
});

function showLoginPage(request, callback) {
    const FORM_URLENCODED = 'application/x-www-form-urlencoded';
    if(request.headers['content-type'] === FORM_URLENCODED) {
        let body = '';
        request.on('data', chunk => {
            body += chunk.toString();
        });
        request.on('end', () => {
            callback(parse(body));
        });
    }
    else 
        callback(null);
}

app.all("/*", function(request, response){
    response.send("<h1> Good Afternoon... </h1> <p style = 'font-size:x-large;'> Go to <b><i>localhost:9000/login</i></b> to Login </p>");
});

app.listen(9000);

console.log("Server is Running on Port 9000....");