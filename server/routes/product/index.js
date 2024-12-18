const express = require('express')
const {
    addProduct,
    allProduct,
    deleteProduct,
    getProduct,
    patchProduct,
} = require('../../controllers/product')

const {auth} = require('../../middleware/authentication')

const router = express.Router()

//get all products
router.get('/', allProduct)

//add new product
router.post('/', auth, addProduct)

//get a specific product
router.get('/:id', getProduct)

//patch an existing product
router.patch('/:id', auth, patchProduct)

//delete a product
router.delete('/:id', auth, deleteProduct)


module.exports = router