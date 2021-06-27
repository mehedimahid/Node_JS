//tutorial number 7.1-7.7(54-60)

const express = require('express')
const morgan = require('morgan')

const app = express()

app.set('view engine', 'ejs')

app.use(morgan('dev'))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.get('/about', (req,res) =>{
  res.render('pages/about.ejs', {title: 'About Page'})
})

app.get('/help', (req,res)=>{
  res.render('pages/help.ejs')
})

app.get('/', (req, res) => {
  let post = {
    title :' Test Title',
    Body : 'Test Body',
    published : true
  }
  let posts = [
    {title : 'Title One', author : ' MH MAHID'},
    {title : 'Title Two', author : ' MH MAHID'},
    {title : 'Title Three', author : ' MH MAHID'},
    {title : 'Title Four', author : ' MH MAHID'}

  ]
  res.render('pages/index', {title : 'Now I am Learning EJS. EJS is awesome Template Engine', post, posts})
})

const PORT = process.env.PORT || 8080

app.listen(PORT, () => {
  console.log(`Server is Running on port ${PORT}`)
})
