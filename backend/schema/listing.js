const mongoose = require('mongoose');

const listSchema = new mongoose.Schema({
    Brand:{
        type:String,
        required:true
    }

})