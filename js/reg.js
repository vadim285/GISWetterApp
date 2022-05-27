/* eslint-disable no-unused-vars */
// eslint-disable-next-line max-len
const dbURI = "mongodb+srv://vadim:vadim123@User.du5cr.mongodb.net/User-data?retryWrites=true&w=majority";
const mongoose = require("mongoose");
mongoose.connect(dbURI)
    .then((result)=>console.log("Connected"));

const User = require("./user");
const name = document.querySelector(".Name");
const password = document.querySelector(".Password");
const region = document.querySelector(".Region");


document.querySelector(".submit").addEventListener("click", function() {
    let data = { name: name, passwort: password, ort: region };
});

