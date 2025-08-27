const mongoose = require('mongoose');

const listSchema = new mongoose.Schema({
    Brand:{
        type:String,
        required:true
    },
    Year:{
        type:Number,
        required:true
    },
    Mileage:{
        type:Number,
        required:true,
        trim:false
    },
    Price:{
        type:Number,
        required:true,
    }

})