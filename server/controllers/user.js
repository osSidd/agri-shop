const Consumer = require('../models/user/consumer')
const Farmer = require('../models/user/farmer')

//create new user
const createUser = async (req, res) => {
    try{
        const usertype = req.body.usertype
        let user
        if(usertype === 'farmer'){
            user = await Farmer.create({...req.body})
        }
        else{
            user = await Consumer.create({...req.body})
        }

        return res.status(201).json(user)
    }catch(err){
        return res.status(400).json({error: err.message})
    }
}

module.exports = {
    createUser,
}