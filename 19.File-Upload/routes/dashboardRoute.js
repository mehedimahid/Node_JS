const router = require('express').Router()
const profileValidator = require('../validetor/dashboard/profileValidator')
const { isAuthenticated } = require('../middleware/authMiddleware')
const {
  dashboardGetController,
  createProfileGetContriller,
  createProfilePostContriller,
  editProfileGetContriller,
  editProfilePostContriller
} = require('../controller/dashboardController')

router.get('/', isAuthenticated, dashboardGetController)

router.get('/create-profile', isAuthenticated, createProfileGetContriller)
router.post('/create-profile', isAuthenticated, profileValidator, createProfilePostContriller)

router.get('/edit-profile', isAuthenticated, editProfileGetContriller)
router.post('/edit-profile', isAuthenticated, profileValidator, editProfilePostContriller)
module.exports = router