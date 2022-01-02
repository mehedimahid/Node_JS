const router = require('express').Router()

const profileValidator = require('../validetor/dashboard/profileValidator')
const { isAuthenticated } = require('../middleware/authMiddleware')
const {
  dashboardGetController,
  createProfileGetContriller,
  createProfilePostContriller,
  editProfileGetContriller,
  editProfilePostContriller,
  bookmarkGetController,
  commentGetController
} = require('../controller/dashboardController')

router.get('/bookmark', isAuthenticated, bookmarkGetController)
router.get('/comments', commentGetController)

router.get('/create-profile', isAuthenticated, createProfileGetContriller)
router.post('/create-profile', isAuthenticated, profileValidator, createProfilePostContriller)

router.get('/edit-profile', isAuthenticated, editProfileGetContriller)
router.post('/edit-profile', isAuthenticated, profileValidator, editProfilePostContriller)

router.get('/', isAuthenticated, dashboardGetController)

module.exports = router