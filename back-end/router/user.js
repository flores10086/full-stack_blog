const express = require('express')
const router = express.Router()
const user_handler = require('../router_handler/user.js')

const {reg_login_schema} = require('../schema/user.js')

//注册登录
router.post('/reguser', reg_login_schema, user_handler.reg_login)

module.exports = router