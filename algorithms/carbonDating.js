function carbonDating(str) {
  let a = Math.log(15 / +str);
  let b = a / 0.00012096;
  if (isNaN(a)) {
    return false;
  } else {
    return Math.trunc(b);
  }
}
console.log(carbonDating("8"));
console.log(1.21 * 10 ** -4);
console.log(Math.ceil(22391.2377));
