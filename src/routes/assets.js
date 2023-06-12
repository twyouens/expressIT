const express = require('express')
const Asset = require('../models/assetsModel')
const router = express.Router()

router.use((req, res, next) => {
    next()
})

router.get('/', (req, res) => {
    res.status(200).send(
        [
            {
                id: 1,
                name: "My PC 1",
                type: "computer"
            },
            {
                id: 2,
                name: "My Laptop 1",
                type: "laptop"
            }  
        ]
    )
})
router.post('/', async (req, res) => {
    try{
        newAsset = await Asset.create(req.body)
        res.status(201).send(newAsset);
    } catch(error){
        console.error(error)
        res.status(500).send({error:error.message})
    }
})
router.get('/asset/:id', (req, res) => {
    const { id } = req.params;
    res.status(200).send(
        [
            {
                id: id,
                name: "My Computer "+id,
                type: "computer"
            },
        ]
    )
})

module.exports = router