const route = require('express').Router()

const signupValidator = require('../validetor/auth/signupValidator')
const loginValidator = require('../validetor/auth/loginValidator')
const {isUnAuthenticated} = require('../middleware/authMiddleware')
const {
  signupGetController,
  signupPostController,
  loginGetController,
  loginPostController,
  logoutController

} = require('../controller/authController')


route.get('/signup',isUnAuthenticated, signupGetController)
route.post('/signup',isUnAuthenticated, signupValidator, signupPostController)

route.get('/login',isUnAuthenticated, loginGetController)
route.post('/login',isUnAuthenticated, loginValidator, loginPostController)

route.get('/logout', logoutController)

module.exports = route