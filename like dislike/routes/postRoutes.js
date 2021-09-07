const router = require('express').Router()
const postValidetor = require('../validetor/dashboard/post/postValidetor')
const { isAuthenticated } = require('../middleware/authMiddleware')
const upload = require('../middleware/uploadMiddleware')
const {
    createPostGetController,
    createPostPostController,
    editPostGetController,
    editPostPotController,
    deletePostGetController,
    postGetController
} = require('../controller/postController')
router.get('/create', isAuthenticated, createPostGetController)
router.post('/create', isAuthenticated, upload.single('post-thumbnail'), postValidetor, createPostPostController)

router.get('/edit/:postId', isAuthenticated, editPostGetController)
router.post('/edit/:postId', isAuthenticated, upload.single('post-thumbnail'), postValidetor, editPostPotController)
router.get('/delete/:postId', isAuthenticated, deletePostGetController)

router.get('/', isAuthenticated, postGetController)
module.exports = router