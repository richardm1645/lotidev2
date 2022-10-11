const assertEqual = require('./assertEqual')

const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) {
    //console.log(`🖕🖕🖕Assertion Failed: ${array1} !== ${array2}`);
    return false; //No point of continuing if the 2 arrays aren't equal in length.
  }
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      //console.log(`🖕🖕🖕Assertion Failed: ${array1} !== ${array2}`);
      return false; //Checks for an exact match between each element in both arrays.
    }
  }
  //console.log(`❤️❤️❤️Assertion Passed: ${array1} === ${array2}`);
  return true; //Returns a match if all elements are indeed equal.
};


module.exports = eqArrays;