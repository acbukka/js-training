function isMAC48Address(n) {
  let aphabet = "ABCDEF";
  let num = "0123456789";
  let newArr = n.replace(/-/g, "").split("");
  for (let i = 0; i < newArr.length; i++) {
    if (
      aphabet.includes(newArr[i]) === false &&
      num.includes(newArr[i]) === false
    ) {
      return false;
    }
  }
  return true;
}
console.log(isMAC48Address("Z1-1B-63-84-45-E6"));
console.log(isMAC48Address("00-1B-63-84-45-E6"));
// console.log(Boolean(-2));

// aphabet.includes(newArr[i]) === false || num.includes(newArr[i]) === false;
