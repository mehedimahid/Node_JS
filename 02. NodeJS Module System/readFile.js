//tutorial number 2.9
const fs = require('fs')

fs.readFile('./test.json', (err,data) =>{
  if(err){
    return console.log(err)
  }
  console.log(data)
  let objData = JSON.parse(data)
  console.log(objData)
  console.log(objData.address)
})


