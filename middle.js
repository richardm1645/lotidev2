const eqArrays = function(array1, array2) {
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      console.log(`🖕🖕🖕Assertion Failed: ${array1} !== ${array2}`);
      return;
    }
  }
  console.log(`❤️❤️❤️Assertion Passed: ${array1} === ${array2}`);
  return;
};

const middle = function(array) {
  let newArray = []; //New array to push the median(s) to
  let medianIndex; //If the array length is 2 or lower, no output is needed.
  if (array.length >= 3) { //Only get results if array length is 3 or more.
    medianIndex = Math.ceil((array.length / 2) - 1);
  }
  for (let i = medianIndex; i <= (medianIndex + 1); i++) { //Only iterate over the median(s)
    newArray.push(array[i]);
    if (array.length % 2 === 1) { //If the array is odd, the loop will only run once.
      return newArray;
    }
  }
  return newArray; //Should the array length be even, the loop will run twice.
};

//Test code
eqArrays(middle([1]), []); // => []
eqArrays(middle([1, 2]), []); // => []
eqArrays(middle([1, 2, 3]), [2]); // => [2]
eqArrays(middle([1, 2, 3, 4, 5]), [3]); // => [3]
eqArrays(middle([1, 2, 3, 4]), [2, 3]); // => [2, 3]
eqArrays(middle([1, 2, 3, 4, 5, 6]), [3, 4]); // => [3, 4]
