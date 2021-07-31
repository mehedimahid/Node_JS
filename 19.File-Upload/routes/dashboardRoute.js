const router = require('express').Router()
const {isAuthenticated} = require('../middleware/authMiddleware')
const {
  dashboardGetController,
  createProfileGetContriller,
  createProfilePostContriller,
  editProfileGetContriller,
  editProfilePostContriller
} = require('../controller/dashboardController')

router.get('/',isAuthenticated, dashboardGetController)

router.get('/create-profile', isAuthenticated, createProfileGetContriller)
router.post('/create-profile',isAuthenticated, createProfilePostContriller)

router.get('/edit-profile', isAuthenticated, editProfileGetContriller)
router.post('/edit-profile',isAuthenticated, editProfilePostContriller)
module.exports = router