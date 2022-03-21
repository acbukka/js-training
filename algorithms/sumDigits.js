function getSumOfDigits(n) {
  let newNum = n
    .toString()
    .split("")
    .reduce((a, b) => +a + +b);
  if (newNum.length === 1) {
    return newNum;
  } else {
    return getSumOfDigits(newNum);
  }
}
console.log(getSumOfDigits(100));
console.log(getSumOfDigits(91));
