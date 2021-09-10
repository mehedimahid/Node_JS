require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const config = require('config')
const chalk = require('chalk')

//Middleware
const setMiddleware = require('./middleware/middleware')
//Import Routes
const setRoutes = require('./routes/routes')

const MONGODB_URI = `mongodb+srv://${config.get('db-username')}:${config.get('db-password')}@cluster0.1vuzk.mongodb.net/Exp-blog?retryWrites=true&w=majority`

const app = express()



//Set View Engine
app.set('view engine', 'ejs')
app.set('views', 'views')

//Using Middleware From middleware Directory
setMiddleware(app)

//Using Routes From Route Directory
setRoutes(app)

app.use((req, res, next) => {
  let error = new Error('404 Not Found')
  error.status = 404
  next(error)
})

app.use((error, req, res, next) => {
  if (error.status === 404) {
    return res.render('pages/error/404',{flashMessage:{}})
  }
  console.log(chalk.red.inverse(error.message))
  console.log(error)
  res.render('pages/error/500',{flashMessage:{}})
})

const PORT = process.env.PORT || 8080

mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true, useUnifiedTopology: true
})
  .then(() => {
    app.listen(PORT, () => {
      console.log(chalk.green('Database Connected'))
      console.log(chalk.bold.green.inverse(`Server is Running on PORT ${PORT}`))
    })
  })
  .catch(e => {
    return console.log(e)
  })
