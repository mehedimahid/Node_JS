const router = require('express').Router()

const signupValidator = require('../validetor/auth/signupValidator')
const loginValidator = require('../validetor/auth/loginValidator')
const {
  isUnAuthenticated,
  isAuthenticated
} = require('../middleware/authMiddleware')
const {
  signupGetController,
  signupPostController,
  loginGetController,
  loginPostController,
  logoutController,
  changePasswordGetController,
  changePasswordPostController
} = require('../controller/authController')


router.get('/signup',isUnAuthenticated, signupGetController)
router.post('/signup',isUnAuthenticated, signupValidator, signupPostController)

router.get('/login',isUnAuthenticated, loginGetController)
router.post('/login',isUnAuthenticated, loginValidator, loginPostController)

router.get('/change-password', isAuthenticated, changePasswordGetController)
router.post('/change-password', isAuthenticated, changePasswordPostController)

router.get('/logout', logoutController)

module.exports = router