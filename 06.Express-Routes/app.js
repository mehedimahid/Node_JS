//tutorial number 6.1-6.9(45-53)

const express = require('express')
const morgan = require('morgan')
const userRuter = require('./userRouter.js')
const postRuter = require('./postRouter.js')

const app = express()

app.use(morgan('dev'))

app.use('/user', userRuter)
app.use('/posts', postRuter)
// app.get('/products/:prodId', (req,res) =>{
//   res.send('I am Listening, Product Id Number ' + req.params.prodId)
// })

app.get('/', (req, res) => {
  res.send('<h1>NodeJS Is Awesome !!!!!</h1>')
})

app.get('*', (req, res) => {
  res.send('<h1>404 Page Not found</h1>')
})

const PORT = process.env.PORT || 8080
app.listen(PORT, () => {
  console.log(`App is Running on Port ${PORT}`)
})

