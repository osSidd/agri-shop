const { default: mongoose } = require('mongoose')
const Product = require('../../models/farmer/product')

//add new product
const addProduct = async (req, res) => {
    try{
        const product = await Product.create(req.body)
        return res.status(200).json(product)
    }catch(err){
        return res.status(400).json({error: err.message})
    }
}

//get a specific product
const getProduct = async (req, res) => {
    try{
        const id = req.params.id
        const isValid = mongoose.Types.ObjectId.isValid(id)

        if(!isValid) return res.status(400).json({error: 'Id not valid'})
        
        const product = await Product.findById(id)

        if(!product) return res.status(404).json({error: 'Product not found'})
        
        return res.status(200).json(product)
    }catch(err){
        return res.status(400).json({error: err.message})
    }
}

//patch an existing product
const patchProduct = async (req, res) => {
    try{
        const id = req.params.id
        const isValid = mongoose.Types.ObjectId.isValid(id)

        if(!isValid) return res.status(400).json({error: 'Id not valid'})
        
        const product = await Product.findByIdAndUpdate(id, {...req.body})

        if(!product) return res.status(404).json({error: 'Product not found'})
        
        return res.status(200).json(product)
    }catch(err){
        return res.status(400).json({error: err.message})
    }
}

//delete an existing product
const deleteProduct = async (req, res) => {
    try{
        const id = req.params.id
        const isValid = mongoose.Types.ObjectId.isValid(id)

        if(!isValid) return res.status(400).json({error: "Invalid Id"})
        
        const product = await Product.findByIdAndDelete(id)

        if(!product) return res.status(400).json({error: "Product not found"})
        
        return res.status(200).json(product)
    }catch(err){
        return res.json(400).json({error: err.message})
    }
}

//get all products
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
    getProduct,
    allProduct,
    deleteProduct,
    patchProduct,
}