//https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/nesting-for-loops

function multiplyAll(arr) {
  var product = 1;
  // Only change code below this line
  for (let i = 0; i < arr.length; i++) {
    // product = arr[i];
    let subArr = arr[i];
    for (let b = 0; b < subArr.length; b++) {
      product = product * subArr[b]
    }
  }
  // Only change code above this line
  return product;
}

console.log(multiplyAll([[1],[2],[3]]));
multiplyAll([[1,2],[3,4],[5,6,7]]);