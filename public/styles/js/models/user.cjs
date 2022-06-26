/* eslint-disable no-trailing-spaces */
/* eslint-disable space-infix-ops */
/* eslint-disable no-unused-vars */

const mongoose = require("mongoose");
const Schema=mongoose.Schema;

const UserSchmema = new Schema({
    name: {
        type: String,
        required: true
    },
    passwort: {
        type: String,
        required: true
    
    },
    ort: {
        type: String,
        required: true
    }
}, { timestamps: true });
const User = mongoose.model("User", UserSchmema);
module.exports = User;
