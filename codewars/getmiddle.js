function getMiddle(s) {
  let newStr = '';
  if (s.length % 2 === 0) {
    newStr = s.substring(s.length / 2 - 1, s.length / 2 + 1);
    console.log(newStr);
  } else if (s.length % 2 !== 0) {
    newStr = s.substring(s.length / 2, s.length / 2 + 1);
    console.log(newStr);
  }
  return newStr;
}
console.log(getMiddle('A'));
