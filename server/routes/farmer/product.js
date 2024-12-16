const express = require('express')
const {
    addProduct,
    allProduct,
    deleteProduct,
    getProduct,
    patchProduct,
} = require('../../controllers/farmer/productController')

const router = express.Router()

//get all products
router.get('/all', allProduct)

//get a specific product
router.get('/:id', getProduct)

//add new product
router.post('/add', addProduct)

//patch an existing product
router.patch('/:id', patchProduct)

//delte a product
router.delete('/:id', deleteProduct)


module.exports = router