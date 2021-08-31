const router = require('express').Router()
const {
   explorerGetController
} = require('../controller/explorerController')

router.get('/explorer', explorerGetController)
module.exports = router