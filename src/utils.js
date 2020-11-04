var esprima = require('esprima');
var estraverse = require('estraverse')

var demo1 = function demo1(params) {
    console.log("hello, im demo1");
}

var utils = {
    esprima:esprima,
    demo1: demo1,
    estraverse
}

module.exports = utils
