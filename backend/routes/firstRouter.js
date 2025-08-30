const express = require('express')
const router = express.Router()
const {getRoutes, postRoutes, putRoutes, deleteRoutes} = require('../controllers/firstController')

router.get('/', getRoutes );

router.post('/', postRoutes );

router.put('/:id', putRoutes);

router.delete('/:id', deleteRoutes);

module.exports = router