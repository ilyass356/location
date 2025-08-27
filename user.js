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
    password:{
        type:String,
        required:true
    },
    location:{
        type:String,
        
    }

});

module.exports = mongoose.model('User', userSchema);//This compiles the schema into a model named 'User'.
