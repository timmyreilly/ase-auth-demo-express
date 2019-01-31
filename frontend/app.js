const express = require('express');
const dotenv = require('dotenv');
dotenv.config({
    path: '../.env'
})

var app = express();


app.get('/', function (req, res) {
    res.json(
        {
            secret: process.env.BORING_SECRET,
        });
})

app.listen(7777, (res) => {
    console.log("We're live on 7777");
    console.log(res);
})