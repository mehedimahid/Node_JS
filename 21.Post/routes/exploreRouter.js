const router = require('express').Router()
const {
   explorerGetController
} = require('../controller/explorerController')

router.get('/', explorerGetController)
module.exports = router