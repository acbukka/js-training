function highAndLow(numbers) {
  let numbs = numbers.split(' ').map(Number);
  let maxNum = numbs[0];
  let minNum = numbs[0];
  for (let i = 0; i < numbs.length; i++) {
    if (numbs[i] > maxNum) {
      maxNum = numbs[i];
    }
    if (numbs[i] < minNum) {
      minNum = numbs[i];
    }
  }
  return `${maxNum} ${minNum}`;
}
console.log(highAndLow('1 9 3 4 -5'));
