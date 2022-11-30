const express = require('express')
const router = express.Router()

const { login, register } = require('../controller/authController')

router.route('/login').post(login)
router.route('/register').post(register)

module.exports = router
