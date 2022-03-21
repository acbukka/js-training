function deepCount(arr) {
  let brackets = [];
  let symbols = [];
  let newStr = JSON.stringify(arr).replace(/["]/gi, '');
  console.log(newStr);
  for (let i = 0; i < newStr.length; i++) {
    if (newStr[i] === '[' || newStr[i] === ']') {
      brackets.push(newStr[i]);
    }
  }
  let symbolsStr = newStr
    .replace(/[\[\]']+/g, '')
    .replace(/,/gi, ' ')
    .split(' ');
  for (let i = 0; i < symbolsStr.length; i++) {
    if (symbolsStr[i] !== '') {
      symbols.push(symbolsStr[i]);
    }
  }
  return brackets.length / 2 + symbols.length - 1;
}
console.log(
  deepCount([[[13, 27, 23]], [[[[[[]], [[]], [[]]]], 6, 29]], [[18, 24, 16]]])
);
// Нужно придумать как конвертировать числа через пробел в массив
