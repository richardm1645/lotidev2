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

eqArrays(["1", "2", "3"], ["1", "2", "3", "4"]) 
eqArrays(["1", "2", "3"], ["1", "2", 3])