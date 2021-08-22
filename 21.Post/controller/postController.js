const { validationResult } = require('express-validator')
const readingTime = require('reading-time')

const Post = require('../model/Post')
const Profile = require('../model/Profile')

const Flash = require('../utils/Flash')
const validetionErrorFormatter = require('../utils/validationErrorFormatter')

exports.createPostGetController = (req, res, next) => {
    res.render('pages/dashboard/post/createPost', {
        title: 'Create A New Post',
        error: {},
        flashMessage: Flash.getMessage(req),
        value: {}
    })
}

exports.createPostPostController = async(req, res, next) => {
    let { title, body, tags } = req.body
    let errors = validationResult(req).formatWith(validetionErrorFormatter)
    if (!errors.isEmpty()) {
        res.render('pages/dashboard/post/createPost', {
            title: 'Create A New Post',
            error: errors.mapped(),
            flashMessage: Flash.getMessage(req),
            value: {
                title,
                body,
                tags
            }
        })
    }

    if (tags) {
        tags = tags.split(',')
        tags = tags.map(t => t.trim())
    }

    let readTime = readingTime(body).text
    let post = new Post({
        title,
        body,
        tags,
        readTime,
        thumbnail: '',
        author: req.user._id,
        likes: [],
        dislikes: [],
        comments: []
    })

    if (req.file) {
        post.thumbnail = `/uploads/${req.file.filename}`
    }

    try {
        let createdPost = await post.save()
        await Profile.findOneAndUpdate(
            { user: req.user._id },
            { $push: { 'posts': createdPost._id } }
        )
        req.flash('success', 'Post Created Successfully')
        return res.redirect(`/posts/edit/${createdPost._id}`)
    } catch (e) {
        next(e)
    }
}