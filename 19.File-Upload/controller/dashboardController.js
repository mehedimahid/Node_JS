const Flash = require('../utils/Flash')
const Profile = require('../model/Profile')
exports.dashboardGetController = async (req, res, next) => {
  try {
    let profile = await Profile.findOne(
      {
        user: req.user._id
      })
    if (profile) {
      return res.render('pages/dashboard/dashboard',
        {
          title: 'My Dashboard',
          flashMessage: Flash.getMessage(req)
        })
    }
    res.redirect('/dashboard/create-profile')
  } catch (e) {
    console.log(e)
  }

}

exports.createProfileGetContriller = async(req, res, next) =>{
  try {
    let profile = await Profile.findOne({user:req.user._id})
    if (profile) {
      return res.redirect('/dashboard/edit-profile')
    }
    res.render('pages/dashboard/create-profile',
    {
      title:'Create Your Profile',
      flashMessage: Flash.getMessage(req)
    })
  } catch (e) {
    next(e)
  }
}

exports.createProfilePostContriller = (req, res, next) =>{

}

exports.editProfileGetContriller = (req, res, next) =>{
  
}
exports.editProfilePostContriller = (req, res, next) =>{
  
}