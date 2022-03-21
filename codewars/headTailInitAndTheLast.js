function head(arr) {
  return arr[0];
}
function tail(arr) {
  let newArr = [];
  for (let i = 1; i < arr.length; i++) {
    newArr.push(arr[i]);
  }
  return newArr;
}
function init(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length - 1; i++) {
    newArr.push(arr[i]);
  }
  return newArr;
}
function last(arr) {
  return arr[arr.length - 1];
}
console.log(tail([1]));
