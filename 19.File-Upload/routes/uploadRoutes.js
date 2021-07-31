const router = require('express').Router()
const {
    isAuthenticated
} = require('../middleware/authMiddleware')
const upload = require('../middleware/uploadMiddleware')
const {
    uploadProfilePics
} = require('../controller/uploadControllers')

router.post('/uploadPics',
    isAuthenticated,
    upload.single('profilePics'),
    uploadProfilePics
)

module.exports = router