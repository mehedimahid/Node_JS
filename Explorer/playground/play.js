const router = require('express').Router()
const upload = require('../middleware/uploadMiddleware')
const {
   check, 
   validationResult 
  } = require('express-validator')
  
const Flash = require('../utils/Flash')

router.get('/play', (req, res, next) => {
  res.render('playground/play',{title: 'Playground', flashMessage:{}},)
})

router.post('/play',upload.single('my-file'), (req, res, next) => {
  if (req.file) {
    console.log(req.file)
  }
    res.redirect('/playground/play')
  })

module.exports = router