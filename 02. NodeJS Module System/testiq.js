const fs = require('fs')
const http = require('http')

const Server = http.createServer((req, res) => {
  fs.readFile('./index.html', (err, data) => {
    res.write(data)
    res.end()
  })
})

Server.listen(4141, ()=> console.log('Server is Running'))