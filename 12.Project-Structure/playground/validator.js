const router = require('express').Router()
const {
   check, 
   validationResult 
  } = require('express-validator')
  
const Flash = require('../utils/Flash')

router.get('/validator', (req, res, next) => {
  console.log(Flash.getMessage(req))
  res.render('playground/signup', { title: 'Validator Playground' })
})

router.post('/validator', [
  check('username')
    .not()
    .isEmpty()
    .withMessage('Please provide your name')
    .isLength({ max: 15 })
    .withMessage(`User name can not be greater then 15 character`)
    .trim(),

  check('email')
    .isEmail()
    .withMessage('Please provide a valid email')
    .normalizeEmail(),

  check('password').custom(value => {
    if (value.length < 5) {
      throw new Error('Password must be greater than 5 character')
    }
    return true
  }),
  check('confirmPassword').custom((value, { req }) => {
    if (value !== req.body.password) {
      throw new Error('Password does not match')
    }
    return true
  })
],
  (req, res, next) => {
    let errors = validationResult(req)
    if (!errors.isEmpty()) {
      req.flash('fail', 'There is some error')
    } else {
      req.flash('success', 'There is no error')
    }
    res.redirect('/playground/validator')
  })

module.exports = router