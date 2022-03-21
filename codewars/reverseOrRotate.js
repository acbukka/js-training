function revrot(str, sz) {
  let filteredArr = [];
  let finalArr = [];
  let checkedArr = [];
  if (sz <= 0 || str === '' || sz > str.length) return '';
  for (let i = 0; i < str.length; i += sz) {
    filteredArr.push(str.substring(i, i + sz));
  }
  console.log(filteredArr);
  for (let m = 0; m < filteredArr.length; m++) {
    if (filteredArr[m].length < sz) {
      filteredArr.pop(filteredArr[m]);
    }
    console.log(filteredArr);
  }
  for (let p = 0; p < filteredArr.length; p++) {
    checkedArr.push(
      filteredArr[p]
        .split('')
        .map(item => {
          return item * item;
        })
        .reduce((item1, item2) => {
          return item1 + item2;
        })
    );
  }
  for (let i = 0; i < checkedArr.length; i++) {
    if (checkedArr[i] % 2 === 0) {
      finalArr.push(filteredArr[i].split('').reverse().join(''));
    } else {
      finalArr.push(
        filteredArr[i].substring(1) + filteredArr[i].substring(0, 1)
      );
    }
  }
  return finalArr.join('');
}
console.log(revrot('563000655734469485', 4));
