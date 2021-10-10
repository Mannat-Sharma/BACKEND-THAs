const jwt = require('jsonwebtoken');
const User = require('../models/user');
require('dotenv').config()

module.exports = async (req, res, next) => {
    try{
        const token = req.headers.authorization.split(" ")[1]
        const decryptedToken = jwt.verify(token, process.env.SECRET_KEY)
        console.log(decryptedToken);
        const user = await User.findAll({id: decryptedToken.userID })
        req.user = user[0]
        next()
    }
    catch(err){
        console.log(err);
    }
}