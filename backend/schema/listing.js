const mongoose = require('mongoose');

const listSchema = new mongoose.Schema({
    Title:{
        type:String,
        required:true,
    }
})