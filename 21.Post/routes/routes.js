const playgroundRoutes = require('../playground/play')
const apiRoutes = require('../api/routes/apiRoutes')

const authRoutes = require('./authRoutes')
const dashboardRoute = require('./dashboardRoute')
const uploadRoutes = require('./uploadRoutes')
const postRoutes = require('./postRoutes')
const explorerRoute = require('./exploreRouter')
const searchRoute = require('./searchRoute')
const authorRoute = require('./authorRoute')

const routes = [
  {
    path: '/auth',
    handler: authRoutes
  },
  {
    path: '/dashboard',
    handler: dashboardRoute
  },
  {
    path: '/uploads',
    handler: uploadRoutes
  },
  {
    path: '/posts',
    handler: postRoutes
  },
  {
    path: '/explorer',
    handler: explorerRoute
  },
  {
    path: '/search',
    handler: searchRoute
  },
  {
    path: '/author',
    handler: authorRoute
  },
  {
    path: '/api',
    handler: apiRoutes
  },
  {
    path: '/playground',
    handler: playgroundRoutes
  },
  {
    path: '/',
    handler: (req, res) => {
      res.redirect('/explorer')
    }
  }
]

module.exports = app => {
  routes.forEach(r => {
    if (r.path === '/') {
      app.get(r.path, r.handler)
    } else {
      app.use(r.path, r.handler)
    }
  })
}