const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`❤️❤️❤️Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🖕🖕🖕Assertion Failed: ${actual} !== ${expected}`);
  }
};

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

const eqObjects = function(object1, object2) {
  let objKeys1 = Object.keys(object1);
  let objKeys2 = Object.keys(object2);
  if (objKeys1.length !== objKeys2.length) {
    return false; //No point of continuing if the two objects are not equal in length.
  }
  for (let key of objKeys2) { //Loops through each key of the array of object2, IDK if which one matters.
    if (Array.isArray(object2[key]) || Array.isArray(object1[key])) { //NOTE: Object.keys turns objects into arrays.
      if (!eqArrays(object1[key], object2[key])) { //Checks if the two arrays are NOT equal
        return false; //if the eqArray function indeed checks the two are NOT equal, return false.
      } 
    }
    if (objKeys1[key] !== objKeys2[key]) {
      return false; //Lastly, checks if both keys have the same value.
    }
  }
  return true; //If all tests have matched, the function returns true.
};

/*

//Test code
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertEqual(eqObjects(ab, ba), true);

const abc = { a: "1", b: "2", c: "3"};
assertEqual(eqObjects(ab, abc), false);

//Test codes if an object has an array
const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertEqual(eqObjects(cd, dc), true);

const cd2 = { c: "1", d: ["2", 3, 4] };
const cd3 = { c: "1", d: ["2", 3, 4] };
const cd4 = { c: "1", d: "2" };
assertEqual(eqObjects(cd, cd2), false);
assertEqual(eqObjects(cd3, cd4), false);

*/

module.exports = eqObjects;