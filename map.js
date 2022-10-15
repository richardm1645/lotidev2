const eqArrays = function(array1, array2) {
  let longerArray; //The loop needs to be the array with a longer length, otherwise the function doesn't work all the time.
  if (array1.length > array2.length) {
    longerArray = array1.length;
  } else {
    longerArray = array2.length;
  }
  for (let i = 0; i < longerArray; i++) {
    if (array1[i] !== array2[i]) {
      console.log(`🖕🖕🖕Assertion Failed: ${array1} !== ${array2}`);
      return;
    }
  }
  console.log(`❤️❤️❤️Assertion Passed: ${array1} === ${array2}`);
  return;
};

//Code here
const words = ["ground", "control", "to", "major", "tom"];

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

/*

const results1 = map(words, word => word[0]);
eqArrays(results1, ['g', 'c', 't', 'm', 't']);

*/

module.exports = map;