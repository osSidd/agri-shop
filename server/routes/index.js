const express = require('express')
const {
    addProduct,
    allProduct,
} = require('../controllers/farmerController')

const router = express.Router()



router.get('/', allProduct)

router.get('/add', addProduct)

router.get('/logout', (req, res) => {
    res.send('hi hterwrwerw')
})


module.exports = router