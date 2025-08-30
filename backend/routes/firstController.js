const express = require('express')
const router = express.Router()

router.get('/', (req,res) => {
    res.json({message:'welcome to my API'});
});

router.post('/', (req,res) => {
    res.json({message:'create an API'});
});

router.put('/:id', (req,res) => {
    res.json({message:`update an API for ${req.params.id}`});
});

router.delete('/:id', (req,res) => {
    res.json({message:'delete an API'});
});

module.exports = router