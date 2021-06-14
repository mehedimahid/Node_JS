//tutorial number 2.8

const fs = require('fs')

const testObj = {
  testfile: "from writeFile.js and tutorial number 2.8",
  name : 'Mehedi Hasan',
  email : 'mehedi@gmail.com',
  address : {
    city : 'kurigram',
    country : 'BD'
  }
}

const data = JSON.stringify(testObj)
fs.writeFile('./test.json', data, (err) =>{
  if(err){
    console.log(err)
  }else{
    console.log('File Write Successful')
  }
})