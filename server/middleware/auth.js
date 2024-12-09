const Session = require('../models/session')

const auth = async (req, res, next) => {
    try{
        console.log(req.cookies)
        if(!req.cookies){
            return res.status(401).json({error: 'user not logged in'})
        }

        const session_token = req.cookies['session_token']
        if(!session_token){
            return res.status(401).json({error: 'user not logged in'})
        }

        const userSession = await Session.findOne({token: session_token})

        if(!userSession){
            return res.status(401).json({error: 'not authorized'})
        }

        if(userSession.expired()){
            await Session.findOneAndDelete({token: session_token})
            return res.status(401).json({error: 'session expired'})
        }
        next()

    }catch(err){
        res.status(400).json(err)
    }
}

module.exports = auth