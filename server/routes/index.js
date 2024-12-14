const express = require('express')
const {addProduct} = require('../controllers/farmerController')

const router = express.Router()



router.get('/', (req, res) => {
    console.log('Hello World')
    res.send("All products")
})

router.get('/add', addProduct)

router.get('/logout', (req, res) => {
    res.send('hi hterwrwerw')
})


module.exports = router