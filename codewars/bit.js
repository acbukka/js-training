var countBits = function (n) {
  let newStr = n.toString(2).split('');
  console.log(newStr);
  let count = 0;
  for (let i = 0; i < newStr.length; i++) {
    if (newStr[i] === '1') {
      count++;
    }
  }
  return count;
};
console.log(countBits(9));