function arrayPlusArray(arr1, arr2) {
  const arr3 = arr1.concat(arr2);

  let sum = 0;

  arr3.forEach(function(item){
    sum += item
  })

  return sum;
}
