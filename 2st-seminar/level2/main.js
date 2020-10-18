const calculator = require('./calculator')

console.log ( `
    10 + 10 = ${calculator.add(10,10)}
    10 - 10 = ${calculator.substract(10,10)}
    10 * 10 = ${calculator.multiply(10,10)}
    10 / 10 = ${calculator.divide(10,10)}
    `)