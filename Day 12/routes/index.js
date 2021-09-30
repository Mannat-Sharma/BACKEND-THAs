var express = require('express');
var router = express.Router();
var registerIntialChecks = require('../middlewares/registerChecks');
var register = require('../controllers/registerController')
/* GET home page. */
router.get('/', function(req, res, next) {
  const sess = req.session;
  sess.username = "mannat";
  res.render('index', { title: 'Express' });
});

router.post('/register', registerIntialChecks, register);

module.exports = router;
