const router =require('express').Router()


router.get('/login', (req, res) => {
  res.send('<h1>I am login Route</h1>')
})

router.get('/logout', (req, res) => {
  res.send('<h1>I am Listening Route</h1>')
})

router.get('/signup',(req, res) => {
  res.send('<h1>I am signup Route</h1>')
})

module.exports= router












