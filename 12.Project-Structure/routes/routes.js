const authRoutes = require('./authRoutes')
const dashboardRoute = require('./dashboardRoute')

const routes = [
  {
    path: '/auth',
    handler : authRoutes
  },
  {
    path: '/dashboard',
    handler: dashboardRoute
  },
  {
    path: '/',
    handler: (req, res) => {
      res.json({
        message: 'Hello World'
      })
    }
  }
]

module.exports = app =>{
  routes.forEach(r=>{
    if (r.path === '/') {
      app.get(r.path, r.handler)
    }else{
      app.use(r.path, r.handler)
    }
  })
}