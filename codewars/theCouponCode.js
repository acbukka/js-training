function checkCoupon(enteredCode, correctCode, currentDate, expirationDate) {
  let curDate = new Date(currentDate);
  let expDate = new Date(expirationDate);
  return (
    (enteredCode === correctCode) & (currentDate === expirationDate) ||
    curDate.getTime() < expDate.getTime()
  );
}
console.log(checkCoupon('123', '123', 'July 2, 2015', 'July 2, 2015'));
