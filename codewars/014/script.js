const quarterOf = (month) => {
  if (month % 3 === 0){
    return month / 3;
  }
  return Math.floor(month / 3) + 1;
}

console.log(quarterOf(1));
console.log(quarterOf(2));
console.log(quarterOf(3));
console.log(quarterOf(4));
console.log(quarterOf(5));
console.log(quarterOf(6));
console.log(quarterOf(7));
console.log(quarterOf(8));
console.log(quarterOf(9));
console.log(quarterOf(10));
console.log(quarterOf(11));
console.log(quarterOf(12));