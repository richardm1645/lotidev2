const assertArraysEqual = require('../assertArraysEqual');
const middle = require('../middle');

//Test code
assertArraysEqual(middle([1]), []); // Case: less than 3 elements
assertArraysEqual(middle([1, 2]), []); 
assertArraysEqual(middle([1, 2, 3]), [2]); // Case: gets middlemost element if array length is odd
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]); // Case: gets the 2 middlemost elements if length is even
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);