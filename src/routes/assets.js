const express = require('express')
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

// PUT update asset
router.put('/asset/:id', assetsController.update)

// DELETE delete asset
router.delete('/asset/:id', assetsController.remove)

module.exports = router