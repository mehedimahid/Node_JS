const router = require('express').Router()
const {isAuthenticated} = require('../middleware/authMiddleware')
const {
  dashboardGetController
} = require('../controller/dashboardController')

router.get('/',isAuthenticated, dashboardGetController)
module.exports = router