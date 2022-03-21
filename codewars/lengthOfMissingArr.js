function getLengthOfMissingArray(arrayOfArrays) {
  let newArr = arrayOfArrays;
  newArr.sort((a, b) => a.length - b.length);
  for (let p = 0; p < newArr.length; p++) {
    if (newArr[p] === null || newArr[p].length === 0) {
      return 0;
    }
  }
  if (newArr === null || newArr.length === 0) {
    return 0;
  }
  for (let i = 0; i < newArr.length; i++) {
    if (newArr[i].length + 1 !== newArr[i + 1].length) {
      return newArr[i].length + 1;
    }
  }
}
console.log(
  getLengthOfMissingArray([
    [],
    [3, 4],
    [3],
    [3, 1, 1],
    [2, 2, 4, 3],
    [2, 3, 1, 1, 2],
    [3, 1, 3, 0, 1, 0],
    [2, 2, 4, 3, 1, 4, 3, 0],
  ])
);
