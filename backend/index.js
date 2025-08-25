const express = require('express');//framework for node.js to create routes and API
const mongoose = require('mongoose');//library to connect with Mongo DB database


const app = express();//creating an express app

mongoose.connect('mongodb://localhost:27017/mylocal')
.then(()=>{
    console.log('connected to mongoDB');
}).catch(err=>{
    console.error('Error connecting to mongoDB:',err);
});

app.use(express.json());