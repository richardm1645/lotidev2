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

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`❤️❤️❤️Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🖕🖕🖕Assertion Failed: ${actual} !== ${expected}`);
  }
};



const letterPositions = function(sentence) {
  let results = {};
  const splitSentence = sentence.replace(/[' ']/g, '').toLowerCase().split(''); //g is a global flag, [] is a chacter class.
  for (let i = 0; i < splitSentence.length; i++) { //iterating over each letter in the array
    if (results[splitSentence[i]]) { 
      results[splitSentence[i]].push(i)
    } else { 
      results[splitSentence[i]] = [i] 
    }
  }
  return results;
}

//Test cases
const case1 = "hello";
eqArrays((letterPositions(case1))["l"], [2, 3])
//eqArrays((letterPositions(case1))["w"], undefined)
//Currently doesn't work with nonexistent keys such as "w"