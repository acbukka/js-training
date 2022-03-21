function explode(str) {
  let newArr = str.split('');
  let newStr = '';
  console.log(newArr);
  for (let i = 0; i < newArr.length; i++) {
    let count = +newArr[i];
    newStr += newArr[i].repeat(count);
  }
  return newStr;
}
console.log(explode('312'));
