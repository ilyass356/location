const mongoose = require('mongoose');

const listSchema = new mongoose.Schema({
    Brand:{
        type:String,
        required:true
    },
    Category:{
        type:String,
        required:true,
        enum:['Scooter','Naked','Sport','Adventure','Cruser','Touring','Dirt','Electric']
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
    },
    description:{
        type:String,
        required:true
    },
    city:{
        type:String,
        required:true
    }

})