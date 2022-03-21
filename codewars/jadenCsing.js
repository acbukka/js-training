function toJadenCase(str) {
  let newArr = str.split(' ');
  let newFilteredArr = [];
  console.log(newArr);
  for (let i = 0; i < newArr.length; i++) {
    newFilteredArr.push(
      newArr[i][0].toUpperCase() + `${newArr[i].substring(1)}`
    );
    return newFilteredArr.join(' ');
  }
}
console.log(toJadenCase("How can mirrors be real if our eyes aren't real"));
