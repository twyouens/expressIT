const express = require('express')
const Asset = require('../models/assetsModel')
const router = express.Router()
const assetsController = require('../controllers/assetsController')

router.use((req, res, next) => {
    next()
})

// GET all assets
router.get('/', assetsController.get)

// GET asset by ID
router.get('/asset/:id', assetsController.getbyID)

// POST new asset
router.post('/', assetsController.create)

module.exports = router