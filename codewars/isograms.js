function isIsogram(str) {
  let newArr = str.toLowerCase().split('');
  let filteredArr = [...new Set(newArr)];
  if (filteredArr.length < newArr.length) {
    return false;
  } else {
    return true;
  }
}
console.log(isIsogram('Dermatoglyphics'));
