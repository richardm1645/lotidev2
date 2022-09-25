const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`❤️❤️❤️Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🖕🖕🖕Assertion Failed: ${actual} !== ${expected}`);
  }
};

//allItems: an array of strings that we need to look through.
//itemsToCount: an obj specifying what to count

const countOnly = function(allItems, itemsToCount) {
  const results = {};
  for (let item of allItems) { //Looping through the array once to check each name.
    if (itemsToCount[item]) { //Checks if the current name is specified in the obj
      if (results[item]) { //If it's specified, check if there is already an instance of it in the results obj
        results[item] += 1; //If it exists already, add one.
      } else { //If it doesn't exist...
        results[item] = 1; //Make a key with that name and set it to one.
      }
    }
  }
  return results;
};



const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);
