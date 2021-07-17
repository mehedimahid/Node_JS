const express = require('express')
const morgan = require('morgan')
const mongoose = require('mongoose')

//Import Routes
const authRoutes = require('./routes/authRoutes')

//Playground Routes


const app = express()
//Set View Engine
app.set('view engine', 'ejs')
app.set('views', 'views')

//Middleware 

const middleware = [
  morgan('dev'),
  express.static('public'),
  express.urlencoded({ extended: true }),
  express.json()
]

app.use(middleware)
app.use('/auth', authRoutes)


app.get('/', (req, res) => {
  res.json({
    message: 'Hello World'
  })
})
const PORT = process.env.PORT || 8080

mongoose.connect(`mongodb+srv://MHMahid:mahid@2000@cluster0.1vuzk.mongodb.net/Exp-blog?retryWrites=true&w=majority`, {
    useNewUrlParser: true, useUnifiedTopology: true
  })
  .then(() =>{
    app.listen(PORT, () => {
      console.log('Database Connected')
      console.log(`Server is Running on PORT ${PORT}`)
    })
  })
  .catch(e =>{
    return console.log(e)
  })

