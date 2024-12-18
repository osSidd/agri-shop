const auth = async (req, res, next) => {
    if(userObj.name && userObj.type === 'farmer')
        next()
    else return res.status(403).json({error: 'unauthorized'})
}

const userObj = {
    name: '',
    username: '',
    type: 'user'
}

module.exports = {
    auth,
    userObj,
}