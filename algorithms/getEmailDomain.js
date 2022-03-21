function getEmailDomain(email) {
  let newArr = email.split("@");
  return newArr[newArr.length - 1];
}
console.log(getEmailDomain("prettyandsimple@example.com"));
console.log(getEmailDomain("very.unusual.@.unusual.com@usual.com"));
