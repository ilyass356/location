const mongoose = require('mongoose');

const listSchema = new mongoose.Schema({
    Brand:{
        type:String,
        required:true
    },
    Category:{
        type:String,
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
    },
    Images:{
        type:[String],
        required:true
    }

})