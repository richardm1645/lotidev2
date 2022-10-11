const assert = require('chai').assert;
const tail = require('../tail');

describe("#tail - removes the first element in an array", () => {
  it(`slices off "Hello" from ["Hello", "Lighthouse", "Labs"]`, () => {
    assert.deepEqual(tail(["Hello", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"]);
  });

  it(`slices off "1" from [1, 3, 5, 7, 9]`, () => {
    assert.deepEqual(tail([1, 3, 5, 7, 9]), [3, 5, 7, 9]);
  });
});