const express = require('express')
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