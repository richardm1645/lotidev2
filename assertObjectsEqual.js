const eqArrays = function(array1, array2) {
  let longerArray; //The loop needs to be the array with a longer length, otherwise the function doesn't work all the time.
  if (array1.length > array2.length) {
    longerArray = array1.length;
  } else {
    longerArray = array2.length; //If both are equal length, set the loop length to whichever.
  }
  for (let i = 0; i < longerArray; i++) {
    if (array1[i] !== array2[i]) {
      //console.log(`🖕🖕🖕Assertion Failed: ${array1} !== ${array2}`);
      return false;
      //return;
    }
  }
  //console.log(`❤️❤️❤️Assertion Passed: ${array1} === ${array2}`);
  return true;
  //return;
};

const assertObjectsEqual = function(object1, object2) {
  const inspect = require('util').inspect; //A utility to show detailed outputs of objects
  let objKeys1 = Object.keys(object1);
  let objKeys2 = Object.keys(object2);
  if (objKeys1.length !== objKeys2.length) {
    console.log(`🖕🖕🖕Assertion Failed: ${inspect(object1)} !== ${inspect(object2)}`);
    return;
    //return false; //No point of continuing if the two objects are not equal in length.
  }
  for (let key of objKeys2) { //Loops through each key of the array of object2, IDK if which one matters.
    if (Array.isArray(object2[key]) || Array.isArray(object1[key])) { //NOTE: Object.keys turns objects into arrays.
      if (!eqArrays(object1[key], object2[key])) { //Checks if the two arrays are NOT equal
        return false; //if the eqArray function indeed checks the two are NOT equal, return false.
      }
    } else if (objKeys1[key] !== objKeys2[key]) {
      console.log(`🖕🖕🖕Assertion Failed: ${inspect(object1)} !== ${inspect(object2)}`);
      return;
      //return false; //Lastly, checks if both keys have the same value.
    }
  }
  console.log(`❤️❤️❤️Assertion Passed: ${inspect(object1)} === ${inspect(object2)}`);
  return;
  //return true; //If all tests have matched, the function returns true.
};

//Test code
assertObjectsEqual({ b: "2", a: "1" }, { b: "2", a: "1" });
assertObjectsEqual({ a: "1", b: "2", c: "3"}, { a: "1", b: "2"});