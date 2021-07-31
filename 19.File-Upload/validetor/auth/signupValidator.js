const {body} = require('express-validator')
const User = require('../../model/User')
module.exports = [
  body('username')
    .isLength({min: 2, max: 15}).withMessage('Username Must be Between 2 to 15 Characters')
    .custom(async username => {
      let user = await User.findOne({ username })
      if(user){
        return Promise.reject('Username Already Used')
      }
    })
    .trim()
  ,
  body('email')
    .isEmail().withMessage('Must Be Provide a Valid Email')
    .custom(async email =>{
      let user = await User.findOne({ email })
      if(user){
        return Promise.reject('Email Already Used')
      }
    })
    .normalizeEmail()
  ,
  body('password')
    .isLength({min: 5}).withMessage('Your Password Must Be Greater Then 5 Characters')
  ,
  body('confirmPassword')
  .custom((confirmPassword, {req}) =>{
    if(confirmPassword !== req.body.password){
      throw new Error('Password Does Not Match')
    }
    return true
  })
]
