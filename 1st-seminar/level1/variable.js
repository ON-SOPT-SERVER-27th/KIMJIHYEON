
var variableVar = "123";
var variableVar = "321";

console.log(`variableVar: ${variableVar}`); // 321

let variableLet = "123";
let variableLet = "321";

console.log(`variableLet: ${variableLet}`); //// error

const variableConst = "123";
const variableConst = "321";

console.log(`variableConst: ${variableConst}`); // error
const objectConst = {name: '김지현'};
objectConst.name = '김땡떙';
console.log(objectConst);