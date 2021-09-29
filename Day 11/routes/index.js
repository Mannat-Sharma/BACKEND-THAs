var express = require('express');
var router = express.Router();
var registerIntialChecks = require('../middlewares/registerChecks');
var register = require('../controllers/registerController')
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
/**
 * @requires { email. password, confirmPassword} -req.body
 * @description
 * In consideration - Security, performance and edge cases
 * LEVEL-1
 * email validation
 * password validation
 * password == confirmPassword
 * LEVEl-2
 * JS/SQL Injection?
 * LEVEL-3
 * check if email already exists
 * password hash
 * email lowercase
 * save
 */
router.post('/register', registerIntialChecks, register);

module.exports = router;
