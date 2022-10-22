const eqArrays = require('../eqArrays');
const without = require('../without');


console.log(eqArrays(without([1, 2, 3], [1]), [2, 3]))

console.log(eqArrays(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]))

console.log(eqArrays(without(["1", "1", "1", "2", "3", "1" , "1"], ["1", 2, "3"]), ["2"]))

