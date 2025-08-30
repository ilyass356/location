const express = require('express')
const router = express.Router()
const {getRoutes, postRoutes, putRoutes, deleteRoutes} = require('../controllers/firstController')

router.route('/').get(getRoutes).post(postRoutes);

router.route('/:id').put(putRoutes).delete(deleteRoutes);


module.exports = router