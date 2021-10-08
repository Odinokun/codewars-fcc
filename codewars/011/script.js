function multiTable(number) {
  let result = "";

  for (let i = 1; i < 11; i++) {
    if (i < 10) {
      result += `${i} * ${number} = ${i * number}\n`;
    } else {
      result += `${i} * ${number} = ${i * number}`;
    }
  }

  return result;
}

console.log(multiTable(5));
