const router = require('express').Router()
const {
  getPost,
  getSinglePost,
  createPost,
  updatePost,
  deletePost
} = require('./postController')

router.get('/', getPost)

router.get('/:postId', getSinglePost)

router.post('/', createPost)

router.put('/:postId', updatePost)

router.delete('/:postId', deletePost)

module.exports = router