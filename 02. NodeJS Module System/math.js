

exports.add = (a, b) => a + b
const sub = (a, b) => a - b
const div = (a, b) => a / b

module.exports.test = (a, b) => sub(a, b) / div(a, b)
// module.exports = {
//   test,
//   add
// }


console.log(module)





