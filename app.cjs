/* eslint-disable no-trailing-spaces */
/* eslint-disable indent */
/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
const { name } = require("ejs");
const e = require("express");
const express = require("express");
const username = "-";

const app = express();

const dbURI = "mongodb+srv://vadim:vadim@User.du5cr.mongodb.net/User-data?retryWrites=true&w=majority";

const mongoose = require("mongoose");
const User = require("./public/styles/js/models/user.cjs");

mongoose.connect(dbURI)
    .then((result)=>console.log("connected to Mongodb"))
    .catch((err)=>console.log(err));

app.set("view engine", "ejs");

app.use("/public", express.static(__dirname + "/public"));
app.use(express.urlencoded({ extended: true }));
// listening for request
app.listen(3000);
console.log("Server is running");
app.get("/", (req, res) => {
    res.render("index");
});
app.get("/about.ejs", (req, res) => {
    res.render("about");
});
app.get("/register.ejs", (req, res) => {
    res.render("register");
});


app.get("/Ihr_Wetter.ejs", (req, res) => {
    res.render("Ihr_Wetter", {username});
});

app.get("/index.ejs", (req, res) => {
    res.render("index");
});
app.get("/about-us", (req, res)=>{
    res.redirect("/about");
});
app.post("/register.ejs", (req, res)=>{
   User.exists({name: req.body.name}, function(err, doc){
    if (err){
        console.log(err, "  Nutzer breits vorhanden");
    } else {
 // User does not Exist
        if (doc == null){
            const user = new User(req.body);
            user.save()
            .then((result)=>{
            res.redirect("/Ihr_Wetter.ejs");
        });
        }
    }
    });
});
app.post("/Ihr_Wetter.ejs", (req, res)=>{
    const userpass = req.body.passwort;
    const username = req.body.name;
    User.exists({name: username, passwort: userpass}, function(err, doc){
        if (err){
            console.log(err);
        } else {
            
            if (doc!=null){
                res.render("Ihr_Wetter", {username: "Angemeldeter Nutzer: "+username});
                
            }else if(doc==null&&req.body!=null){
                res.render("Ihr_Wetter", {username: "falsches Passwort oder Namen einegeben "});
            }
        }

    });
 });
app.use((req, res)=>{
    res.render("index");
});