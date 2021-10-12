//https://www.codewars.com/kata/57a1fd2ce298a731b20006a4/train/javascript

function isPalindrome(word) {
  let newWord = word.split("").reverse().join("");
  return word.toLowerCase() === newWord.toLowerCase();
}

console.log(isPalindrome('aba'));
console.log(isPalindrome('Abba'));
console.log(isPalindrome('hello'));
console.log(isPalindrome('Bob'));
