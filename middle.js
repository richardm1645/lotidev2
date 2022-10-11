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

module.exports = middle;
