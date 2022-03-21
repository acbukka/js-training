const encodeLine = function (str) {
  let newStr = "";
  let count = 1;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i + 1]) {
      count++;
    } else if (count === 1) {
      newStr += `${str[i]}`;
      count = 1;
    } else {
      newStr += `${count}${str[i]}`;
      count = 1;
    }
  }
  return newStr;
};
console.log(encodeLine("aabbbc"));
