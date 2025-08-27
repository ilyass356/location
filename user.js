const mongoose = require('mongoose');// connecting to mongodb database

const userSchema = new mongoose.Schema({//defines the structure of the user
    Username:{
        type:String,
        required:true,
        trim:true
    },
    email:{
        type:String,
        required:true
    },
    phone:{
        type:Number,
        required:true
    },
    CIN:{
        type:Number,
        required:true
    }

});

module.exports = mongoose.model('User', userSchema);//This compiles the schema into a model named 'User'.
