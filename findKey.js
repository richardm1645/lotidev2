const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`❤️❤️❤️Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🖕🖕🖕Assertion Failed: ${actual} !== ${expected}`);
  }
};

/*
Notes: Failed when using Object.keys. Since "stars" exist inside another object, the
resulted array couldn't access those, so using the For...in loop can iterate and access
through objects better if there are nested objects.
*/

const findKey = function(obj, callback) {
  for (const element in obj) {
    if (callback(obj[element]) === true) {
      return element;
    }
  }
};

/*

assertEqual(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2), "noma");

*/

module.exports = findKey;