var validWord = function (dictionary, word) {
  let reg = new RegExp('^(' + dictionary.join('|') + ')+$');
  return reg.test(word);
};
console.log(validWord(['ab', 'a', 'bc'], 'abc'));

// Мне надо проверить, если все элементы массива есть в word'e, то поместить их в новый массив, потом проверить,
// можно ли при соеденении элементов массива получить нужное слово

// console.log('abcdefg'.includes());

function testinput(re, str) {
  var midstring;
  if (re.test(str)) {
    midstring = ' содержит ';
  } else {
    midstring = ' не содержит ';
  }
  console.log(str + midstring + re.source);
}
console.log(testinput('аьвг', 'абвгд'));

// var validWord = function (dictionary, word) {
//   let count = 0;
//   // let match = 0;
//   let newStr = word;
//   for (let i = 0; i < dictionary.length; i++) {
//     if (newStr.includes(dictionary[i])) {
//       let regMinus = new RegExp(dictionary[i], 'g');
//       newStr = newStr.replace(regMinus, '');
//       console.log(newStr);
//     }
//     if (word.includes(dictionary[i])) {
//       count++;
//     }
//   }
//   console.log(count);
//   // return count === dictionary.length || newStr.length === 0;
//   // return newStr.length === 0;
// };
// console.log(validWord(['ab', 'a', 'bc'], 'abc'));
