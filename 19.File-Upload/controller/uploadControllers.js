const Profile = require('../model/Profile')
const User = require('../model/User')
const fs = require('fs')

exports.uploadProfilePics = async (req, res, next) => {
    if (req.file) {
        try {
            let oldProfilePics = req.user.profilePics
            let profile = await Profile.findOne({ user: req.user._id })
            let profilePics = `/uploads/${req.file.filename}`
            if (profile) {
                await Profile.findOneAndUpdate(
                    { user: req.user._id },
                    { $set: { profilePics } }
                )
            }
            await User.findOneAndUpdate(
                { _id: req.user._id },
                { $set: { profilePics } }
            )
            if (oldProfilePics !== '/uploads/default.png') {
                fs.unlink(`public${oldProfilePics}`, err => {
                    if (err) console.log(err)
                })
            }
            res.status(200).json({
                profilePics
            })
        } catch (e) {
            res.status(500).json({
                profilePics: req.user.profilePics
            })
        }
    } else {
        res.status(500).json({
            profilePics: req.user.profilePics
        })
    }
}

exports.removeProfilePics = (req, res, next) => {
    try {
        let defaultProfile = '/uploads/default.png'
        let currentProfilePics = req.user.profilePics

        fs.unlink(`public${currentProfilePics}`, async (err) => {
            let profile = await Profile.findOne({ user: req.user._id })
            if (profile) {
                await Profile.findOneAndUpdate(
                    { user: req.user._id },
                    { $set: { profilePics: defaultProfile } }
                )
            }
            await User.findOneAndUpdate(
                { _id: req.user._id },
                { $set: { profilePics: defaultProfile } }
            )
        })
        res.json({
            profilePics: defaultProfile
        })
    } catch (e) {
        console.log(e)
        res.status(500).json({
            message: 'Can Not Remove profile Pics'
        })
    }
}