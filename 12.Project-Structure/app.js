const express = require('express')
const morgan = require('morgan')
//Import Routes

const authRoutes= require('./routes/authRoutes')
const app = express()
//Set View Engine
app.set('view engine', 'ejs')
app.set('views', 'views')

//Middleware 

const middleware = [
  morgan('dev'),
  express.static('public'),
  express.urlencoded({extended: true}),
  express.json()
]

app.use(middleware)
app.use('/auth', authRoutes)

app.get('/', (req, res) =>{
  res.json({
    message : 'Hello World'
  })
})
const PORT = process.env.PORT || 8080

app.listen(PORT, () =>{
  console.log(`Server is Running on PORT ${PORT}`)
})