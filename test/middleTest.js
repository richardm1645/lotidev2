/*
const assertArraysEqual = require('../assertArraysEqual');
const middle = require('../middle');

//Test code
assertArraysEqual(middle([1]), []); // Case: less than 3 elements
assertArraysEqual(middle([1, 2]), []); 
assertArraysEqual(middle([1, 2, 3]), [2]); // Case: gets middlemost element if array length is odd
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]); // Case: gets the 2 middlemost elements if length is even
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
*/

const assert = require('chai').assert;
const middle = require('../middle');

describe("#middle - returns the middlemost element(s) in an array", () => {
  it(`returns [] from [1]`, () => {
    assert.deepEqual(middle([1]), []);
  });

  it(`returns [] from [1, 2]`, () => {
    assert.deepEqual(middle([1, 2]), []);
  });

  it(`returns [2] from [1, 2, 3]`, () => {
    assert.deepEqual(middle([1, 2, 3]), [2]);
  });

  it(`returns [3, 4] from [1, 2, 3, 4, 5, 6]`, () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
  });
});