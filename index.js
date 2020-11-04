const utils = require('./dist/main')
var program = 'const answer = 42';
// utils.demo1();
var success = utils.esprima.tokenize(program);
// console.log(success);

console.log(utils.estraverse);




