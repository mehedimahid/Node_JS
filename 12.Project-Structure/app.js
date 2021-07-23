require('dotenv').config()
const express = require('express')
const morgan = require('morgan')
const mongoose = require('mongoose')
const session = require('express-session')
const MongoDBStore = require('connect-mongodb-session')(session)
const flash= require('connect-flash')
const config = require('config')


//Import Routes
const authRoutes = require('./routes/authRoutes')
const dashboardRoutes = require('./routes/dashboardRoute')

//Import Middleware
const {bindUserWithRequest} = require('./middleware/authMiddleware')
const setLocals = require('./middleware/setLocals')

//Playground Routes
// const validatorRoutes = require('./playground/validator')


const MONGODB_URI = `mongodb+srv://${config.get('db-username')}:${config.get('db-password')}@cluster0.1vuzk.mongodb.net/Exp-blog?retryWrites=true&w=majority`
const store = new MongoDBStore({
  uri: MONGODB_URI,
  collection: 'mySessions',
  expires: 1000 * 60 * 60 * 2
});

const app = express()

console.log(config.get('name'))
if (app.get('env').toLowerCase()==='development') {
  app.use(morgan('dev'))
}
// console.log(app.get('env'))
// console.log(process.env.NODE_ENV)

//Set View Engine
app.set('view engine', 'ejs')
app.set('views', 'views')

//Middleware Array

const middleware = [
  // morgan('dev'),
  express.static('public'),
  express.urlencoded({ extended: true }),
  express.json(),
  session({
    secret: config.get('secret'),
    resave: false,
    saveUninitialized: false,
    store: store
  }),
  bindUserWithRequest(),
  setLocals(),
  flash()
]


app.use(middleware)
app.use('/auth', authRoutes)
app.use('/dashboard', dashboardRoutes)
// app.use('/playground', validatorRoutes)

app.get('/', (req, res) => {
  res.json({
    message: 'Hello World'
  })
})
const PORT = process.env.PORT || 8080

mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true, useUnifiedTopology: true
})
  .then(() => {
    app.listen(PORT, () => {
      console.log('Database Connected')
      console.log(`Server is Running on PORT ${PORT}`)
    })
  })
  .catch(e => {
    return console.log(e)
  })

