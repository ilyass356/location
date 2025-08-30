const express = require('express')
const router = express.Router()

router.get('/', (req,res) => {//get route to test the API is working
    res.json({message:'welcome to my API'});
});

module.exports = router