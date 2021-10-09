// https://www.codewars.com/kata/51c8991dee245d7ddf00000e/train/javascript
function reverseWords(str){
  let res = str.split(" ");
  res.reverse();
  str = res.join(' ');
  return str;
}

console.log(reverseWords("hello world!")) // "world! hello")
