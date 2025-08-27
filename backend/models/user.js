const mongoose = require('mongoose');// connecting to mongodb database

const userSchema = new mongoose.Schema({//defines the structure of the user
    
    Username:{
        type:String,
        required:true,

        unique:true
    },
    
    email:{
        type:String,
        required:true,
        unique:true
        
    },

    phone:{
        type:Number,
        required:true,
        unique:true
    },

    CIN:{
        type:Number,
        required:true,
        unique:true
    },

    location:{
        type:String
    },

    createdAT:{
        type:Date,
        default:Date.now
    },

    password:{
        type:String,
        required:true
    },
    
});

module.exports = mongoose.model('User', userSchema);//This compiles the schema into a model named 'User'.
