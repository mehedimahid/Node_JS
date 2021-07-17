const route = require('express').Router()

const signupValidator = require('../validetor/auth/signupValidator')
const loginValidator = require('../validetor/auth/loginValidator')
const {
  signupGetController,
  signupPostController,
  loginGetController,
  loginPostController,
  logoutController

} = require('../controller/authController')


route.get('/signup', signupGetController)
route.post('/signup',signupValidator, signupPostController)

route.get('/login', loginGetController)
route.post('/login',loginValidator, loginPostController)

route.get('/logout', logoutController)
module.exports = route