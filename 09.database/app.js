//tutorial number 

const express = require('express')
const morgan = require('morgan')
const mongoose = require('mongoose')
const router = require('./routers')

const app = express()

app.use(morgan('dev'))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use('/contacts', router)

// let Schema = mongoose.Schema
// let testSchema = new Schema({
//   name: String
// })

// let Test = mongoose.model('Test', testSchema)

app.get('/', (req, res) => {
  // let test = new Test({
  //   name: 'MH Mahid'
  // })
  // test.save()
  //   .then(t => {
  //     res.json(t)
  //   })
  //   .catch(e => {
  //     console.log(e)
  //     res.status(500).json({
  //       error: 'Error Occured'
  //     })
  //   })
})

const PORT = process.env.PORT || 8080
mongoose
  .connect(`mongodb+srv://MHMahid:mahid@2000@cluster0.11wlc.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`, {
    useNewUrlParser: true, useUnifiedTopology: true
  })
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is Running on port ${PORT}`)
    })
  })
  .catch(e => {
    console.log(e.message)
  })

