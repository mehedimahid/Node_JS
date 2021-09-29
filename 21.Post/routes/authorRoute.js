const router = require('express').Router()

const {authorProfileGetController} = require('../controller/authorController')

router.get('/:userId', authorProfileGetController)

module.exports= router