const express = require('express')
const router = express.Router()

const {signup, login, getAdmin} = require('../controllers/admin')

router.get('/', getAdmin)

module.exports = router