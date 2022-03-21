function unluckyDays(year) {
  let endedYear = new Date(`01-01-${year + 1}`);
  let count = 0;
  for (
    let d = new Date(`01-02-${year}`);
    d <= endedYear;
    d.setDate(d.getDate() + 1)
  ) {
    if (d.getDay() === 5 && d.getDate() === 13) {
      count++;
    }
  }
  return count;
}
console.log(unluckyDays(1986));
