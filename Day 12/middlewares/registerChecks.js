const {emailValidate, passwordValidate} = require('../utils/validates')
/**
 *  LEVEL-1
 * email validation
 * password validation
 * password == confirmPassword
 */
const registerIntialChecks = (req, res, next) => {
    console.log(req.body);
    const {email, password, confirmPassword} = req.body;
    if (
        typeof email === 'string' &&
        typeof password === 'string' &&
        typeof confirmPassword === 'string' &&
        email.length > 0 &&
        password.length > 8 &&
        confirmPassword === password &&
        emailValidate(email) &&
        passwordValidate(password)
    ){
        next();
    }
    else{
        res.status(401).send("Initial checks fail");
    }
}

module.exports = registerIntialChecks;