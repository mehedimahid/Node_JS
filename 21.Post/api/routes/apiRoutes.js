const router = require('express').Router()

const { isAuthenticated } = require('../../middleware/authMiddleware')
const {
   commentPostController,
   replyCommentPostController
} = require('../controllers/commentController')
const {
   likeGetController,
   disLikesGetController
} = require('../controllers/likeDislikeController')

const {
   bookmarksGetController
} = require('../controllers/bookmarkController')

router.post('/comment/:postId', isAuthenticated, commentPostController)
router.post('/comment/replies/:commentId', isAuthenticated, replyCommentPostController)

router.get('/likes/:postId', isAuthenticated, likeGetController)
router.get('/dislikes/:postId', isAuthenticated, disLikesGetController)

router.get('/bookmarks/:postId', isAuthenticated, bookmarksGetController)
module.exports = router