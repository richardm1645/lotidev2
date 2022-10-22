const without = function(source, itemsToRemove) {
  let newArray = [];
  /*
  for (let i = 0; i < itemsToRemove.length; i++) {
    source.filter( el => el !== '3')
    console.log(itemsToRemove[i])
    console.log(source)
  }
  */
  const originalSourceLength = source.length
  for (let i = 0; i < originalSourceLength; i++) {
    for (let j = 0; j < itemsToRemove.length; j++) {
      if (source[i] === itemsToRemove[j]) {
        source.splice(i, 1);
        i -= 1;
        break
      }
    }
  }
  return source;
};



module.exports = without;