const User = require('../models/user')
const jwt = require('jsonwebtoken')

exports.signup = async (req, res, next) => {
    console.log(req.body);
    const {name,email, role} = req.body

    const user = await User.findAll({where: {email: email}})
    if(user.length>0){
        return res.json({
            message: "User already exists"
        })
    }
    await User.create({name, email, role})
    return res.json({
        message: "User created"
    })
}

exports.login = async (req,res,next) => {
    const {name, email} = req.body
    const user = await User.findAll({where:{email: email}})
    if (user.length == 0){
        return res.json({
            message: "Not signed up"
        })
    }
    const token = jwt.sign({
        userID: user[0].id,
        email: email
    }, "secretKey", {expiresIn: "1h"})
    return res.status(200).json({
        token,
        user,
    })
}