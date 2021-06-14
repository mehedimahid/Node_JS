//tutorial number(2.5, 2.6 )
const path = require('path')

const myCurrenPath = __filename

// console.log(path.basename(myCurrenPath))
// console.log(path.basename(__dirname))
// console.log(path.extname(myCurrenPath))

//format
let pathObj = {
  dir: 'usr/local',
  name: 'testfile',
  ext: '.js'
}
// console.log(path.format(pathObj))

//isAbsolute
// console.log(path.isAbsolute(myCurrenPath))
// console.log(path.isAbsolute('./global.js'))

//join
// console.log(path.join('usr', 'local', 'MH Mahid', 'testfile.js'))
// console.log(path.resolve(__dirname, 'testfile', 'test.js'))
console.log(path.parse(myCurrenPath))





