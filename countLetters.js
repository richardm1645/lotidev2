const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`❤️❤️❤️Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🖕🖕🖕Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function(sentence) {
  let results = {};
  //The sentence is first erased of all spaces, made lowercase, then split into an array with each letter.
  const splitSentence = sentence.replace(/[' ']/g, '').toLowerCase().split(''); //g is a global flag, [] is a chacter class.
  for (let letter of splitSentence) { //iterating over each letter in the array
    if (results[letter]) { //If it's specified, check if there is already an instance of it in the results obj
      results[letter] += 1; //If it exists already, add one.
    } else { //If it doesn't exist...
      results[letter] = 1; //Make a key with that name and set it to one.
    }
  }
  return results;
};

/*

//Test cases
const case1 = countLetters("LHL Labs");
const case2 = countLetters("I woke up this morning");

assertEqual(case1["l"], 3);
assertEqual(case1["h"], 1);
assertEqual(case1["o"], undefined);
assertEqual(case2["i"], 3);

*/

module.exports = countLetters;