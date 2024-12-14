const addProduct = async (req, res) => {
    try{
        return res.status(200).json({product: "New Product"})
    }catch(err){
        return res.status(400).json({error: err.message})
    }
}

module.exports = {
    addProduct,
}