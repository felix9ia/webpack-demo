const utils = require('./dist/main')
var program = 'const answer = 42';
console.log(utils);
utils.demo1();
var success = utils.esprima.tokenize(program);
console.log(success);

