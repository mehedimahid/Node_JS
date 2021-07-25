const { Schema, model } = require('mongoose')
// const User = require('./User')
// const Post = require('./Post')

const profileSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  name: {
    type: String,
    trim: true,
    maxlength: 30,
    required: true
  },
  title: {
    type: String,
    trim: true,
    maxlength: 100
  },
  bio: {
    type: String,
    trim: true,
    maxlength: 500
  },
  profilePic: String,
  links: {
    webside: String,
    facebook: String,
    twitter: String,
    github: String
  },
  posts: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Post'
    }
  ],
  bookmarks: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Post'
    }
  ]
})

const Profile = model('Profile', profileSchema)
module.exports = Profile