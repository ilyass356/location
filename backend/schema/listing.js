const mongoose = require('mongoose');

const listSchema = new mongoose.Schema({
    Title:{
        type:String,
        required:true,
    },
    Production:{
        type:Number,
        required:true,
    },

})