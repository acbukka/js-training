function sortByHeight(arr) {
  if (arr.includes(-1)) {
    let values = arr.filter((item) => item > -1).sort((a, b) => a - b);
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] !== -1) {
        arr[i] = 0;
      }
    }
    let counter = 0;
    for (let p = 0; p < arr.length; p++) {
      if (arr[p] === 0) {
        arr[p] = values[counter];
        counter++;
      }
    }
    return arr;
  } else {
    return arr.sort((a, b) => a - b);
  }
}
console.log(sortByHeight([-1, 150, 190, 170, -1, -1, 160, 180]));
console.log(sortByHeight([4, 2, 9, 11, 2, 16]));
