//tutorial number 7.1-7.7(54-60)

const express = require('express')
const morgan = require('morgan')
const contactRoutes = require('./contactRoutes')

const app = express()

app.use(morgan('dev'))
app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use('/contacts', contactRoutes)

app.get('*' ,(req, res) => {
  res.send('<h1>Please, Use The Currect Routers</h1>')
})

const PORT = process.env.PORT || 8080

app.listen(PORT, () =>{
  console.log(`Server is Running on port ${PORT}`)
})
