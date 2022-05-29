/* eslint-disable no-unused-vars */
const http = require("http");
const fs = require("fs");
const url = require("url");
const path = require("path");
const port = 3000;


const server = http.createServer((req, res)=>{
    const uri = url.parse(req.url).pathname;

    let path = "./";
    switch (req.url) {
    case "/":
        path += "index.html";
        res.statusCode = 200;
        break;
    case "/about.html":
        path += "about.html";
        res.statusCode = 200;
        break;
    case "/register.html":
        path += "register.html";
        res.statusCode = 200;
        break;
    case "/Ihr_Wetter.html":
        path += "Ihr_Wetter.html";
        res.statusCode = 200;
        break;
    default:
        path += "index.html";
        res.statusCode = 200;
        break;
    }
    res.setHeader("Content-Type", "text/html");
    // send an html file

    fs.readFile(path, (err, data)=>{
        if (err) {
            console.log(err);
            res.end();
        } else {
            
            res.end(data);
        }
    });
});
server.listen(port, "localhost", ()=>{
    console.log("listening for request");
});