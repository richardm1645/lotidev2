const eqArrays = require('../eqArrays');
const assertEqual = require('../assertEqual');

assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false);
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3", "4"]), false);
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true);
