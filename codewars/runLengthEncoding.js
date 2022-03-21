var runLengthEncoding = function (str) {
  str = str.split('');
  let obj = {};
  let newArr = [];
  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i - 1] && obj.hasOwnProperty(str[i])) {
      obj[str[i] + 'double'] = obj[str[i]] + 1;
    } else {
      obj[str[i]] = 1;
    }
  }

  console.log(obj);
  // console.log(newArr);
  console.log(str);
};
console.log(runLengthEncoding('hello world!'));
console.log(runLengthEncoding('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaabbb'));

var runLengthEncoding = function (str) {
  // str = str.split('');
  let newArr = [];
  let count = 1;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i + 1]) {
      count++;
    } else {
      newArr.push([count, str[i]]);
      count = 1;
    }
  }
};
console.log(runLengthEncoding('hello world!'));
