const mongoose = require('mongoose');// connecting to mongodb database

const userSchema = new mongoose.Schema({
    fullName:{
        type:String,
        required:true,
        trim:true
    },
    email:{
        type:String,
        required:true,
    },
    phone:{
        type:Number,
        required:true,
    },
    id:{
        type:Number,
        required:true,
    }

});


