const { validationResult } = require('express-validator')
const Flash = require('../utils/Flash')
const User = require('../model/User')
const Profile = require('../model/Profile')
const validationErrorFormatter = require('../utils/validationErrorFormatter')
const { name } = require('ejs')

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

exports.createProfileGetContriller = async (req, res, next) => {
  try {
    let profile = await Profile.findOne({ user: req.user._id })
    if (profile) {
      return res.redirect('/dashboard/edit-profile')
    }


    res.render('pages/dashboard/create-profile',
      {
        title: 'Create Your Profile',
        flashMessage: Flash.getMessage(req),
        error: {}
      })
  } catch (e) {
    next(e)
  }
}

exports.createProfilePostContriller = async (req, res, next) => {
  let errors = validationResult(req).formatWith(validationErrorFormatter)
  if (!errors.isEmpty()) {
    return res.render('pages/dashboard/create-profile',
      {
        title: 'Create Your Profile',
        flashMessage: Flash.getMessage(req),
        error: errors.mapped()
      })
  }

  let {
    name,
    title,
    bio,
    website,
    facebook,
    twitter,
    github
  } = req.body

  try {
    let profile = new Profile({
      user: req.user._id,
      name,
      title,
      bio,
      profilePics: req.user.profilePics,
      links: {
        website: website || '',
        facebook: facebook || '',
        twitter: twitter || '',
        github: github || ''
      },
      posts: [],
      bookmarks: []
    })

    let createProfile = await profile.save()
    await User.findOneAndUpdate(
      { _id: req.user._id },
      { $set: { profile: createProfile._id } }
    )
    req.flash('success', 'Profile Create Successfully')
    res.redirect('/dashboard')

  } catch (e) {
    next(e)
  }
}

exports.editProfileGetContriller = async (req, res, next) => {
  try {
    let profile = await Profile.findOne({ user: req.user._id })

    if (!profile) {
      return res.redirect('/dashboard/create-profile')
    }

    return res.render('pages/dashboard/edit-profile', {
      title: 'Edit Your Profile',
      error: {},
      profile,
      flashMessage: Flash.getMessage(req),
    })
  } catch (e) {
    next(e)
  }
}
exports.editProfilePostContriller = async(req, res, next) => {
  let errors = validationResult(req).formatWith(validationErrorFormatter)
  let {
    name,
    title,
    bio,
    website,
    facebook,
    twitter,
    github
  } = req.body


  if (!errors.isEmpty()) {
    return res.render('pages/dashboard/create-profile',
      {
        title: 'Update Your Profile',
        flashMessage: Flash.getMessage(req),
        error: errors.mapped(),
        profile: {
          name,
          title,
          bio,
          links: {
            website,
            facebook,
            twitter,
            github
          }
        }
      })
  }
  try {
    let profile = {
      name,
      title,
      bio,
      links: {
        website: website || '',
        facebook: facebook || '',
        twitter: twitter || '',
        github: github || ''
      }
    }

    let updateProfile = await Profile.findOneAndUpdate(
      { user: req.user._id },
      { $set: profile },
      { new: true }
    )
    req.flash('success', 'Profile Update Successfully')
    return res.render('pages/dashboard/edit-profile', {
      title: 'Edit Your Profile',
      error: {},
      profile: updateProfile,
      flashMessage: Flash.getMessage(req),
    })
  } catch (e) {
    next(e)
  }
}