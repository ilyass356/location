const express = require('express');//framework for node.js to create routes and API
const mongoose = require('mongoose');//library to connect with Mongo DB database


const app = express();//creating an express app

mongoose.connect('mongodb://localhost:27017/mylocal')//connect to a local mongoDB database 
.then(()=>{
    console.log('connected to mongoDB');
}).catch(err=>{
    console.error('Error connecting to mongoDB:',err);
});

app.use(express.json());//middleware allows my app to accept the JSON data in requests

//app.use('/',User);//this tells express to use the router for any req starting with "/"

app.get('/test', (req,res) => {//get route to test the API is working
    res.send('Welcome to the User API');
});

