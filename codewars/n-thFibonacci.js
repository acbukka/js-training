function nthFibo(n) {
  let newArr = [0, 1];
  for (let i = 1; i < n; i++) {
    newArr.push(newArr[i] + newArr[i - 1]);
    console.log(newArr);
  }
  return newArr[n - 1];
}
console.log(nthFibo(3));
