function convert(input, source, target) {

  let inputArr = input.split('');
  let toDecimal = 0;
  let toConvert = '';
  let decimalInputLenght = inputArr.length - 1;

  for (let i = 0; i < inputArr.length; i++) {
    toDecimal += (source.indexOf(inputArr[i]) * (source.length ** decimalInputLenght));
    decimalInputLenght--;
    console.log(toDecimal);
  }

  let current = toDecimal;
  let finalArr = '';
  let iterable = 0;
  if (current === 0) {
    return target[0];
  }
  while (current > 0) {
    iterable = current % target.length;
    finalArr += target[iterable];
    current = Math.floor(current / target.length);
  }
  return finalArr.split('').reverse().join('');
}

var Alphabet = {
  DECIMAL: '0123456789',
  HEXA_DECIMAL: '0123456789ABCDEF',
};

// прогоняем получаемое значение через наш конвертер из задачи base conversion, добовляя новые условия
function convertingRgb(a) {
  if (a < 0) {
    a = 0;
  } else if (a > 255) {
    a = 255;
  } 
  let newA = a.toString();
  let newConvert = convert(newA, Alphabet.DECIMAL, Alphabet.HEXA_DECIMAL);
  while (newConvert.length < 2) {
    newConvert = '0' + newConvert;
  }
  return newConvert;
}
// записываем в новую переменную(строку) значения из предыдузей функции и возвращаем ее
function rgb(r, g, b) {
  let newStr = '';
  newStr += convertingRgb(r);
  newStr += convertingRgb(g);
  newStr += convertingRgb(b);
  return newStr;
}
console.log(rgb(255, 255, 2));
