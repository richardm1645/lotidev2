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

const takeUntil = function(array, callback) {
  let results = [];
  for (let element of array) {
    //console.log("callback function returns: ", callback(element))
    if (callback(element) === true) {
      break;
    } else {
      results.push(element);
    }
  }
  return results;
};

/*

//Test code
const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => {
  return (x < 0);
});
console.log(results1);
eqArrays(results1, [1, 2, 5, 7, 2]);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => {
  return (x === ',');
});
console.log(results2);
eqArrays(results2, ['I\'ve', 'been', 'to', 'Hollywood']);

*/

module.exports = takeUntil;
