const router = require('express').Router()
const {
    isAuthenticated
} = require('../middleware/authMiddleware')
const upload = require('../middleware/uploadMiddleware')
const {
    uploadProfilePics,
    removeProfilePics
} = require('../controller/uploadControllers')

router.post('/profilePics',
    isAuthenticated,
    upload.single('profilePics'),
    uploadProfilePics
)

router.delete('/profilePics', isAuthenticated, removeProfilePics)

module.exports = router
