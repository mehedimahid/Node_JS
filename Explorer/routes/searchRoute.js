const router = require('express').Router()

const {searchResultGetController}= require('../controller/searchController')

router.get('/', searchResultGetController)
module.exports = router