//tutorial numbers39-44 (5.1-5.6)

const express = require('express')
const morgan = require('morgan')

const app = express()

function customMiddleware(req, res, next) {
  if (req.url === '/help') {
    res.send('<h1> Sorry, This page is block by Addmin</h1>')
  }
  next()
}

function tinyLogger(){
  return(req, res, next) =>{
    console.log(`${req.method} - ${req.url}`)
    next()
  }
}

const middleware = [customMiddleware, tinyLogger()]
app.use(middleware)
// app.use(morgan('dev'))

app.get('/about', morgan('dev'), (req, res) => {
  // res.send('<h1>I am About Page</h1>')
  res.json({
    message: 'I am a Response From Your Route Handlar'
  })
})

app.get('/help', (req, res) => {
  res.send('<h1>I am Help Page</h1>')
})

app.get('/', (req, res) => {
  res.send('<h1>I am Listening</h1>')
})

app.get('*', (req, res) => {
  res.send('<h1>404 Page Not found</h1>')
})

const PORT = process.env.PORT || 8080

app.listen(PORT, () => {
  console.log(`App is Running on Port ${PORT}`)
})

