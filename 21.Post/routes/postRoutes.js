const router = require('express').Router()
const postValidetor = require('../validetor/dashboard/post/postValidetor')
const { isAuthenticated } = require('../middleware/authMiddleware')
const upload = require('../middleware/uploadMiddleware')
const {
    createPostGetController,
    createPostPostController
} = require('../controller/postController')
router.get('/create', createPostGetController)
router.post('/create', isAuthenticated,upload.single('post-thumbnail'), postValidetor, createPostPostController)

module.exports = router