const route = require('express').Router()

const {
  signupGetController,
  signupPostController,
  loginGetController,
  loginPostController,
  logoutController

} = require('../controller/authController')

route.get('/signup', signupGetController)
route.post('/signup', signupPostController)

route.get('/login', loginGetController)
route.post('/login', loginPostController)

route.get('/logout', logoutController)
module.exports = route