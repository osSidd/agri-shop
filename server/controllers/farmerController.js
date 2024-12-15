const Product = require('../models/farmer/product')

const addProduct = async (req, res) => {
    try{
        const product = await Product.create({...req.body})
        return res.status(200).json(product)
    }catch(err){
        return res.status(400).json({error: err.message})
    }
}

const allProduct = async (req, res) => {
    try{
        const products = await Product.find()
        return res.status(200).json(products)
    }catch(err){
        return res.status(400).json({error: err.message})
    }
}


module.exports = {
    addProduct,
    allProduct,
}