const express = require('express')
const router = express.Router()
const {getRoutes} = require('../controllers/firstController')

router.get('/', getRoutes );

router.post('/', (req,res) => {
    res.json({message:'create an API'});
});

router.put('/:id', (req,res) => {
    res.json({message:`update an API for ${req.params.id}`});
});

router.delete('/:id', (req,res) => {
    res.json({message:`delete an API ${req.params.id}`});
});

module.exports = router