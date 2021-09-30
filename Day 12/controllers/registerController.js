/** LEVEL 2 
 * check if email already exists
 * password hash
 * email lowercase
 * save */
const User = require('../models/mongo');
const becrypt = require("bcrypt");
const saltRounds = 10;
const register = async(req, res) => {
    const {email, password} = req.body;
    try{
        const alreadyExists = await User.findOne({where: {email}});
        if(alreadyExists){
            res.status(401).send("Email already exists");
        }
       const salt = becrypt.genSaltSync(saltRounds);
       const hash = becrypt.hashSync(password, salt);

       const newUser = new User({email:email.toLowerCase(), password: hash, fullName: "Mannat"});
       const savedUser = await newUser.save();
       res.status(201).send("User registered");
    } catch(err){
        console.error(err);
        res.status(500).send("Something went wrong");
    }
}
module.exports = register;