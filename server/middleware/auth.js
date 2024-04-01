const jwt = require('jsonwebtoken')

const auth = async (req, res, next) => {
    const token = req.headers?.authorization?.split(' ')[1]

    if(!token) return res.status(401).json({error: 'no token'})

    jwt.verify(token, process.env.jwt_secret, (err, payload) => {
        if(err) return res.status(401).json({error: 'invalid token'})

        req.user = payload
        next()
    })
}

module.exports = auth