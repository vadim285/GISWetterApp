/* eslint-disable no-unused-vars */
const http = require("http");
const fs = require("fs");
const port = 3000;


const server = http.createServer((req, res)=>{
    
    let file;
    let path = "./";
    css(req, res);
    switch (req.url) {
    case "/":
        res.writeHead(200,{"Content-Type": "text/html"});
        path += "index.html";
        file = fs.readFileSync(path);

        res.write(file);
        res.end();
        res.statusCode = 200;
        break;
    case "/about.html":
        res.writeHead(200,{"Content-Type": "text/html"});
        path += "about.html";
        file = fs.readFileSync(path);
        res.write(file);
        res.end();
        res.statusCode = 200;
        break;
    case "/register.html":
        res.writeHead(200,{"Content-Type": "text/html"});
        path += "register.html";
        file = fs.readFileSync(path);
        res.write(file);
        res.end();
        res.statusCode = 200;
        break;
    case "/Ihr_Wetter.html":
        res.writeHead(200,{"Content-Type": "text/html"});   
        path += "Ihr_Wetter.html";
        file = fs.readFileSync(path);
        res.write(file);
        res.end();
        res.statusCode = 200;
        break;
    default:
        res.writeHead(200,{"Content-Type": "text/html"});
        path += "index.html";
        file = fs.readFileSync(path);
        res.write(file);
        res.end();
        res.statusCode = 200;
        break;
    }
});
function css(request, response) {
    if (request.url === "/") {
        response.writeHead(200, { "Content-type": "text/css" });
        const fileContents = fs.readFileSync("./main.css");
        response.write(fileContents);
        response.end();
    }
}
server.listen(port, "localhost", ()=>{
    console.log("listening for request");
});