const express = require('express')
const morgan = require('morgan')
const mongoose = require('mongoose')
const session = require('express-session')
const MongoDBStore = require('connect-mongodb-session')(session)

//Import Routes
const authRoutes = require('./routes/authRoutes')
const dashboardRoutes = require('./routes/dashboardRoute')

//Import Middleware
const {bindUserWithRequest} = require('./middleware/authMiddleware')
const setLocals = require('./middleware/setLocals')

//Playground Routes

const MONGODB_URI = `mongodb+srv://MHMahid:mahid@2000@cluster0.1vuzk.mongodb.net/Exp-blog?retryWrites=true&w=majority`
const store = new MongoDBStore({
  uri: MONGODB_URI,
  collection: 'mySessions',
  expires: 1000 * 60 * 60 * 2
});

const app = express()
//Set View Engine
app.set('view engine', 'ejs')
app.set('views', 'views')

//Middleware Array

const middleware = [
  morgan('dev'),
  express.static('public'),
  express.urlencoded({ extended: true }),
  express.json(),
  session({
    secret: process.env.SECRET_KEY || 'SECRET_KEY',
    resave: false,
    saveUninitialized: false,
    store: store
  }),
  bindUserWithRequest(),
  setLocals()
]


app.use(middleware)
app.use('/auth', authRoutes)
app.use('/dashboard', dashboardRoutes)

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

