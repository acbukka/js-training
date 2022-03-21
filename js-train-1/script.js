'use strict';


// function reverseInt(num) {
//   return num.toString().split('').reverse().toString().replace(/,/g, '');
// }
// console.log(reverseInt(1234));



// // возвращаем номер в обратном порядке:
// function reverseInt(num) {
//   let x = num.toString().length;
//   let revInt = "";
//   while (x > 0) {
//     revInt = revInt + num.toString()[x - 1];
//     x--;
//   }
//   return parseFloat(revInt);
// }
// console.log(reverseInt(-95034));

// const reverse = (num) => parseFloat(num.toString().split('').reverse().toString().replace(/,/g, ''));
// console.log(reverse(-1234));


// function reverseInt(num) {
//   let x = num.toString().length;
//   let revInt = "";
//   while (x > 0) {
//     revInt = revInt + num.toString()[x - 1];
//     x--;
//   }
//   if (revInt.includes("-")) {
//     revInt = revInt.slice(-1, 0);
//   }
//   return revInt;
// }
// console.log(reverseInt(-95034));




// Короткая запись: ~
// function reverseInt(num) {
//   if (num.toString().length > 0) {

//   }
// }
// console.log(reverseInt(152514));





// convert a number(from 0 to 999 to a readable number):

function toReadable(num) {
  let arrOfNum;
  let total = '';
  let numOfTens = '';
  let ones = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fiveteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen', 'twenty'];
  let tens = ['ten', 'twenty', 'thirty', 'fourty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
  let hundreds = ['one hundred', 'two hundred', 'three hundred', 'four hundred', 'five hundred', 'six hundred', 'seven hundred', 'eight hundred', 'nine hundred'];
  if (num >= 0 && num <= 9) {
    total += ones[num];
    return total;
  } else if (num >= 10 && num <= 20) {
    total += ones[num];
    return total;
  } else if (num >= 20 && num <= 90 && num % 10 == 0) {
    total += tens[num / 10 - 1];
    return total;
  } else if (num >= 20 && num <= 99 && num % 10 != 0) {
    arrOfNum = String(num).split('').map((num) => {
      return Number(num);
    });
    total = tens[arrOfNum[0] - 1] + ' ' + ones[arrOfNum[1]].toLowerCase();
    return total;
  } else if (num >= 100 && num % 100 == 0) {
    total += hundreds[num / 100 - 1];
    return total;
  } else if (num > 100 && num <= 999) {
    arrOfNum = String(num).split('').map((num) => {
      return Number(num);
    });
    let numOfHandred = arrOfNum[0];
    numOfTens = Number(arrOfNum[1].toString() + arrOfNum[2].toString());
    console.log(numOfTens);
    total += hundreds[numOfHandred - 1];
    if (numOfTens <= 20) {
      total += ' ' + ones[numOfTens].toLowerCase();
    } else if (numOfTens >= 20 && numOfTens <= 90 && numOfTens % 10 == 0) {
      total += ' ' + tens[numOfTens / 10 - 1].toLowerCase();
    } else if (numOfTens >= 20 && numOfTens <= 99 && numOfTens % 10 != 0) {
      arrOfNum = String(numOfTens).split('').map((numOfTens) => {
      return Number(numOfTens);
      });
      total += ' ' + tens[arrOfNum[0] - 1].toLowerCase() + ' ' + ones[arrOfNum[1]].toLowerCase();
    }
    console.log(total);
    return total;
  }  
}
console.log(toReadable(0));


// Towel sort:

function towelSort(arr) {
  let newArr = [];
  if (arr === undefined || arr.length == 0) {
    return newArr;
  }
  for (let i = 0; i < arr.length; i++) {
    if (i % 2 !== 0) {
      newArr.push(arr[i].reverse());
    } else if (i % 2 === 0) {
      newArr.push(arr[i]);
    }
  }
  let sortedArr = newArr.reduce((a, b) => {
    return a.concat(b);
  });
  return sortedArr;
}

console.log(towelSort());




// Brackets:


function check(str, bracketsConfig_orig) {
  // create the stack:
  let stack = [];
  // make a copy of variable for not to changing this variable:
  let bracketsConfig = JSON.parse(JSON.stringify(bracketsConfig_orig));
  // reverse config to generate pairs:
  let reverseConfig = bracketsConfig.map((item) => {
    return item.reverse();
  });
  // lets convert braketsConfig to object:
  let objConfig = Object.fromEntries(reverseConfig);
  console.log(objConfig);
  // lets get object values from objConfig to compare:
  let openBrackets = Object.values(objConfig); 
  console.log(openBrackets);
  // lets check if every part of string have the pair
  for (let i = 0; i < str.length; i++) {
    let currentSymbol = str[i];
  // delete the element if the open element === closing element and push if not:
    if (stack[stack.length - 1] === currentSymbol && Object.keys(objConfig).includes(stack[stack.length - 1])) {
      stack.pop();
    }
    else if (openBrackets.includes(currentSymbol)) {
      stack.push(currentSymbol);
    } else {
      if (stack.length === 0) {
        return false;
      }
  // check if the top element on the top have the closing pair and delete from stack if is:
      let topElement = stack[stack.length - 1];

      if (objConfig[currentSymbol] === topElement) {
        stack.pop();
      } else {
        return false;
      }
    }
    console.log(stack);
  }
  return stack.length === 0;
}

const config1 = [['(', ')']];
const config2 = [['(', ')'], ['[', ']']];
const config3 = [['(', ')'], ['[', ']'], ['{', '}']];
const config4 = [['|', '|']];
const config5 = [['(', ')'], ['|', '|']];
const config6 = [['1', '2'], ['3', '4'], ['5', '6'], ['7', '7'], ['8', '8']];
const config7 = [['(', ')'], ['[', ']'], ['{', '}'], ['|', '|']];

console.log(check('[]()', config2));

// Возможно ругается на методы с Object, завтра надо переписать






// 2-ой вариант:

function check(str, bracketsConfig) {
  // create the stack:
  let stack = [];
  // reverse config to generate pairs:
  let reverseConfig = bracketsConfig.map((item) => {
    return item.reverse();
  });
  // lets convert braketsConfig to object:
  let objConfig = {};
  reverseConfig.forEach(function(element) {
        objConfig[element[0]] = element[1];
    });
  console.log(objConfig);
  // lets get object values and keys from objConfig to compare:
  let objectKeys = [];
  for (let key in objConfig) {
    objectKeys.push(key);
  }
  let openBrackets = [];
  for (var i in objConfig) {
        if (objConfig.hasOwnProperty(i)) {
            openBrackets.push(objConfig[i]);
        }
    }
  console.log(openBrackets);
  // lets check if every part of string have the pair:
  for (let i = 0; i < str.length; i++) {

    let currentSymbol = str[i];
  // delete the element if the open element === closing element:
    if (stack[stack.length - 1] === currentSymbol && objectKeys.includes(stack[stack.length - 1])) {
      stack.pop();
    }
    else if (openBrackets.includes(currentSymbol)) {
      stack.push(currentSymbol);
    } else {
      if (stack.length === 0) {
        return false;
      }
      
      let topElement = stack[stack.length - 1];

      if (objConfig[currentSymbol] === topElement) {
        stack.pop();
      } else {
        return false;
      }
    }
    console.log(stack);
  }
  return stack.length === 0;
}
console.log(check('111115611111111156111111112222888888222255778777787755556666777777777766222221111222288888822225577877778775555666677777777776622222', [['1', '2'], ['3', '4'], ['5', '6'], ['7', '7'], ['8', '8']]));



// console.log(check('111115611111111222288888822225577877778775555666677777777776622222', [['1', '2'], ['3', '4'], ['5', '6'], ['7', '7'], ['8', '8']]));
// console.log(check('([)]', [['(', ')']]));


// let open = []
//   let close = []
//   stage = []
//   for (let key in bracketsConfig){
//     open.push(bracketsConfig[key][0])
//     close.push(bracketsConfig[key][1])
//   }
//   for (let i = 0; i < str.length; i++){
//     current = str[i]
//     if (open.includes(current)&&close.includes(current)){
//       (stage.includes(current)) ? stage.pop(current) : stage.push(current)
//     }
//     else {if (open.includes(current)){stage.push(current)}
//           else {
//                 if (stage.length == 0) return false
//                 let top = stage[stage.length - 1]
//                 if (close.includes(current)&&(close.indexOf(current) == open.indexOf(top))){
//                   stage.pop(current)
//                 }
//               }
//           }
//   }
//   return (stage.length == 0)
// }




// morse-decoder:


const MORSE_TABLE = {
  '.-': 'a',
  '-...': 'b',
  '-.-.': 'c',
  '-..': 'd',
  '.': 'e',
  '..-.': 'f',
  '--.': 'g',
  '....': 'h',
  '..': 'i',
  '.---': 'j',
  '-.-': 'k',
  '.-..': 'l',
  '--': 'm',
  '-.': 'n',
  '---': 'o',
  '.--.': 'p',
  '--.-': 'q',
  '.-.': 'r',
  '...': 's',
  '-': 't',
  '..-': 'u',
  '...-': 'v',
  '.--': 'w',
  '-..-': 'x',
  '-.--': 'y',
  '--..': 'z',
  '.----': '1',
  '..---': '2',
  '...--': '3',
  '....-': '4',
  '.....': '5',
  '-....': '6',
  '--...': '7',
  '---..': '8',
  '----.': '9',
  '-----': '0',
  '**********': ' '
};

// нужно входную стротку преобразовать в точки и тире, затем согласно алфавиту преобразовать их в буквы, цифры и пробелы
// 10 это точка, 11 это тире

function decoder(encode) {
  let encodeArr = [];
  let encodeNewArr = [];
  let filteredArr = [];
  let outStr = '';
  for (let i = 0; i < encode.length; i += 10) {
    encodeArr.push(encode.substring(i, i + 10));
  }
  for (let j = 0; j < encodeArr.length; j++) {
    if (encodeArr[j].length < 10) {
      encodeNewArr.push(encodeArr[j].padStart(10, '0'));
      console.log(encodeArr[j].length);
    } else {
      encodeNewArr.push(encodeArr[j]);
    }
  }
  console.log(encodeNewArr);
  for (let m = 0; m < encodeNewArr.length; m++) {
    filteredArr.push(encodeNewArr[m].replace(/10/g, '.').replace(/11/g, '-').replace(/0/g, ''));
  }
  console.log(filteredArr);
  for (let p = 0; p < filteredArr.length; p++) {
    outStr += MORSE_TABLE[filteredArr[p]];
    console.log(outStr);
  }
  return outStr;
}
console.log(decoder('000000001100101010100000000010**********00111110110000101011000000101000111011100000111011**********00111010100000101110000011111100001011110000001110**********001010111000001111110011101011**********00101111110000101011000000111100101111100000101010**********0000111111001010101100000000100000101110**********000000001100101010100000000010**********0010111010000000101100111110100011101111**********000011101000001111110000111110'));



// function decoder(encode) {
//   let encodeArr = [];
//   let encodeNewArr = [];
//   let filteredArr = [];
//   let outStr = '';
//   for (let i = 0; i < encode.length; i += 10) {
//     encodeArr.push(encode.substring(i, i + 10));
//   }
//   for (let j = 0; j < encodeArr.length; j++) {
//     if (encodeArr[j].length < 10) {
//       encodeNewArr.push(encodeArr[j].padStart(10, '0'));
//       console.log(encodeArr[j].length);
//     } else {
//       encodeNewArr.push(encodeArr[j]);
//     }
//   }
//   console.log(encodeNewArr);
//   for (let m = 0; m < encodeNewArr.length; m++) {
//     filteredArr.push(encodeNewArr[m].replaceAll('10', '.').replaceAll('11', '-').replaceAll('0', ''));
//   }
//   console.log(filteredArr);
//   for (let p = 0; p < filteredArr.length; p++) {
//     outStr += MORSE_TABLE[filteredArr[p]];
//     console.log(outStr);
//   }
//   return outStr;
// }
// console.log(decoder('000000001100101010100000000010**********00111110110000101011000000101000111011100000111011**********00111010100000101110000011111100001011110000001110**********001010111000001111110011101011**********00101111110000101011000000111100101111100000101010**********0000111111001010101100000000100000101110**********000000001100101010100000000010**********0010111010000000101100111110100011101111**********000011101000001111110000111110'));



// codewars 3:

// считаем количество string в объекте:
function strCount(obj) {
  let count = 0;
  for (let key in obj) {
    if (typeof (obj[key]) === 'string') {
      count++;
    } else if (typeof (obj[key]) === 'object') {
      count += strCount(obj[key]);
    }
  }
  return count;
  }

console.log(strCount({
  first: "1",
  second: "2",
  third: false,
  fourth: ["anytime", 2, 3, 4],
  fifth: null,
  sixth: undefined,
  seventh: {}
}));




// Перевести в десятичную систему счисления, а из нее в нужную...
var Alphabet = {
  BINARY: '01',
  OCTAL: '01234567',
  DECIMAL: '0123456789',
  HEXA_DECIMAL: '0123456789abcdef',
  ALPHA_LOWER: 'abcdefghijklmnopqrstuvwxyz',
  ALPHA_UPPER: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
  ALPHA: 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ',
  ALPHA_NUMERIC: '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
};

function convert(input, source, target) {
  let Alphabet = {
    BINARY: '01',
    OCTAL: '01234567',
    DECIMAL: '0123456789',
    HEXA_DECIMAL: '0123456789abcdef',
    ALPHA_LOWER: 'abcdefghijklmnopqrstuvwxyz',
    ALPHA_UPPER: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
    ALPHA: 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ',
    ALPHA_NUMERIC: '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
  };
  
  let bin = Alphabet.BINARY;
  let oct = Alphabet.OCTAL;
  let dec = Alphabet.DECIMAL;
  let hex = Alphabet.HEXA_DECIMAL;
  let allow = Alphabet.ALPHA_LOWER;
  let alup = Alphabet.ALPHA_UPPER;
  let alpha = Alphabet.ALPHA;
  let alnum = Alphabet.ALPHA_NUMERIC;

  let inputArr = input.split('');
  let toDecimal = 0;
  let toConvert = '';
  let decimalInputLenght = inputArr.length - 1;

  if (source === allow || source === alup || source === alpha || source === alnum) {
    for (let i = 0; i < inputArr.length; i++) {
      toDecimal += (source.indexOf(inputArr[i]) * (source.length ** decimalInputLenght));
      decimalInputLenght--;
      console.log(toDecimal);
    }
  } else {
    for (let i = 0; i < inputArr.length; i++) {
      toDecimal += (inputArr[i] * (source.length ** decimalInputLenght));
      decimalInputLenght--;
    }
  }

  // for (let i = 0; i < inputArr.length; i++) {
  //   toDecimal += (inputArr[i] * (source.length ** decimalInputLenght));
  //   decimalInputLenght--;
  // }


  let current = toDecimal;
  for (let p = 0; current >= 1; p++) {
    let tempNumb = current / target.length;
    toConvert += current % target.length;
    current *= 0;
    current = Math.floor(current + tempNumb);
    console.log(current, toConvert);
  }
  if (target === bin || target === oct || target === dec) {
    return toConvert.split('').reverse().join('');
  } else {
    let targetArr = target.split('');
    let convertArr = toConvert.split('').reverse();
    let finalArr = '';
    for (let i = 0; i < convertArr.length; i++) {
      finalArr += targetArr[convertArr[i]];
    }
    return finalArr;
  }
  
}
console.log(convert("1010", Alphabet.BINARY, Alphabet.HEXA_DECIMAL));


// Попробуй ввести разделение на системы счисления типа target.lenght <= 10 одно условие, target.lenght > 10 другое
// проблема с условиями ввода и вывода???
 
console.log('0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'.length);


console.log(Math.floor((4.25 % 1) * 10));




// 2-ой вариант:
var Alphabet = {
  BINARY: '01',
  OCTAL: '01234567',
  DECIMAL: '0123456789',
  HEXA_DECIMAL: '0123456789abcdef',
  ALPHA_LOWER: 'abcdefghijklmnopqrstuvwxyz',
  ALPHA_UPPER: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
  ALPHA: 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ',
  ALPHA_NUMERIC: '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
};

function convert(input, source, target) {
  let Alphabet = {
    BINARY: '01',
    OCTAL: '01234567',
    DECIMAL: '0123456789',
    HEXA_DECIMAL: '0123456789abcdef',
    ALPHA_LOWER: 'abcdefghijklmnopqrstuvwxyz',
    ALPHA_UPPER: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
    ALPHA: 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ',
    ALPHA_NUMERIC: '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
  };

  let bin = Alphabet.BINARY;
  let oct = Alphabet.OCTAL;
  let dec = Alphabet.DECIMAL;
  let hex = Alphabet.HEXA_DECIMAL;
  let allow = Alphabet.ALPHA_LOWER;
  let alup = Alphabet.ALPHA_UPPER;
  let alpha = Alphabet.ALPHA;
  let alnum = Alphabet.ALPHA_NUMERIC;

  let inputArr = input.split('');
  let toDecimal = 0;
  let toConvert = '';
  let decimalInputLenght = inputArr.length - 1;

  if (source.length > 10) {
    for (let i = 0; i < inputArr.length; i++) {
      toDecimal += (source.indexOf(inputArr[i]) * (source.length ** decimalInputLenght));
      decimalInputLenght--;
      console.log(toDecimal);
    }
  } else {
    for (let i = 0; i < inputArr.length; i++) {
      toDecimal += (inputArr[i] * (source.length ** decimalInputLenght));
      decimalInputLenght--;
    }
  }

  let current = toDecimal;
  for (let p = 0; current >= 1; p++) {
    let tempNumb = current / target.length;
    toConvert += current % target.length;
    current *= 0;
    current = Math.floor(current + tempNumb);
    console.log(current, toConvert);
  }
  if (target.length <= 10) {
    return toConvert.split('').reverse().join('');
  } else if(target.length > 10){
    let targetArr = target.split('');
    let convertArr = toConvert.split('').reverse();
    let finalArr = '';
    for (let i = 0; i < convertArr.length; i++) {
      finalArr += targetArr[convertArr[i]];
    }
    return finalArr;
  }
}
console.log(convert("1010", Alphabet.BINARY, Alphabet.HEXA_DECIMAL));




















// function convert(input, source, target) {
// let Alphabet = {
//   BINARY: '01',
//   OCTAL: '01234567',
//   DECIMAL: '0123456789',
//   HEXA_DECIMAL: '0123456789abcdef',
//   ALPHA_LOWER: 'abcdefghijklmnopqrstuvwxyz',
//   ALPHA_UPPER: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
//   ALPHA: 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ',
//   ALPHA_NUMERIC: '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
// };

// let bin = Alphabet.BINARY;
// let oct = Alphabet.OCTAL;
// let dec = Alphabet.DECIMAL;
// let hex = Alphabet.HEXA_DECIMAL;
// let allow = Alphabet.ALPHA_LOWER;
// let alup = Alphabet.ALPHA_UPPER;
// let alpha = Alphabet.ALPHA;
// let alnum = Alphabet.ALPHA_NUMERIC;

// let inputArr = input.split('');
// let toDecimal = 0;
// let toConvert = '';
// let decimalInputLenght = inputArr.length - 1;
// for (let i = 0; i < inputArr.length; i++) {
//   toDecimal += (inputArr[i] * (source.length ** decimalInputLenght));
//   decimalInputLenght--;
// }
// let current = toDecimal;
// for (let p = 0; current >= 1; p++) {
//   let tempNumb = current / target.length;
//   toConvert += current % target.length;
//   current *= 0;
//   current = Math.floor(current + tempNumb);
//   console.log(current, toConvert);
// }
// if (target === bin || target === oct || target === dec || target === hex) {
//   return toConvert.split('').reverse().join('');
// } else {
//   let targetArr = target.split('');
//   let convertArr = toConvert.split('').reverse();
//   let finalArr = '';
//   for (let i = 0; i < convertArr.length; i++) {
//     finalArr += targetArr[convertArr[i]];
//   }
//   return finalArr;
// }
// }


// n % 1 - берем дробный остаток
// Math.floor() - округляем до ближайшего целого вниз













// const firstName = 'Jonas';
// const job = 'teacher';
// const birthYear = 1991;
// const year = 2037;

// const jonas = "I'm " + firstName + ', a ' + (year - birthYear) + ' years old ' + job + '!';
// console.log(jonas);

// const jonasNew = `I'm ${firstName}, a ${year - birthYear} years old ${job}!`;
// console.log(jonasNew);

// console.log('String with \n\ muliple \n\ lines');

// console.log(`String with
// multiple
// lines`);


// const age = 15;
// const isOldEnough = age >= 18;

// if (isOldEnough) {
//   console.log('Sarah can start driving license');
// } else {
//   const yearLeft = 18 - age;
//   console.log(`Sarah is too young, wait another ${yearLeft} years :)`);
// }


// const birthYear = 2005;

// let century;
// if (birthYear <= 2000) {
//   century = 20;
// } else {
//   century = 21;
// }
// console.log(century);




// const MarkMass = 95;
// const MarkHeight = 1.88;
// const JohnMass = 85;
// const JohnHeight = 1.76;

// const MarkMass = 78;
// const MarkHeight = 1.69;
// const JohnMass = 92;
// const JohnHeight = 1.95;

// const MarkBMI = MarkMass / (MarkHeight ** 2);
// const JohnBMI = JohnMass / (JohnHeight ** 2);
// const MarkHigherBMI = MarkBMI > JohnBMI;
// console.log(MarkBMI, JohnBMI);
// if (MarkBMI > JohnBMI) {
//   console.log(`Mark's BMI (${MarkBMI}) is higher than John's (${JohnBMI})`);
// } else {
//   console.log(`John's BMI (${MarkBMI}) is higher than Mark's (${JohnBMI})`);
// }

// конвертация типов и присвоение типов, как это работает:

// type convercion
// const inputYear = '1991';
// console.log(Number(inputYear));
// console.log(Number(inputYear) + 18);

// console.log(Number('Jonas'));
// console.log(typeof NaN);

// console.log(String(23));

// // type coercion
// console.log('I am ' + 23 + ' years old');
// console.log('23' - '10' - 3);
// console.log('23' * '2');

// let n = '1' + 1; // '11'
// n = n - 1;
// console.log(n);

// console.log(Boolean(0));
// console.log(Boolean(''));
// console.log(Boolean(undefined));
// console.log(Boolean(null));
// console.log(Boolean({}));

// const money = 0;
// if (money) {
//   console.log("Don't spend it all ;)");
// } else {
//   console.log("You should get a job!");
// }

// let height = 0;
// if (height) {
//   console.log('YAY! Height is defined!');
// } else {
//   console.log('Height is UNDEFINED');
// }

// const age = '18';
// if (age === 18) console.log('You just became an adult :D (strict)');

// if (age == 18) console.log('You just became an adult :D (loose)');

// const favourite = Number(prompt("What's your favorite number?"));
// console.log(favourite);
// console.log(typeof favourite);

// if (favourite === 23) {
//   console.log('Cool! 23 is an amazing number!');
// } else if (favourite === 7) {
//   console.log('7 is also a cool number');
// } else if (favourite === 9) {
//   console.log('9 is also a cool number');
// } else {
//   console.log('Number is not 23 or 7 or 9');
// }

// if (favourite !== 23) console.log('Why not 23?');


// const age = 15;
// const isOldEnough = age >= 18;

// if (isOldEnough) {
//   console.log('Sarah can start driving license');
// } else {
//   const yearLeft = 18 - age;
//   console.log(`Sarah is too young, wait another ${yearLeft} years :)`);
// }

// const hasDriverLicense = true; // A
// const hasGoodVision = true; // B

// console.log(hasDriverLicense && hasGoodVision);
// console.log(hasDriverLicense || hasGoodVision);
// console.log(!hasDriverLicense);

// const shoulDrive = hasDriverLicense && hasGoodVision;

// if (shoulDrive) {
//   console.log('Sarah is able to drive!');
// } else {
//   console.log('Someone else should drive...');
// }

// const isTired =  false; // C
// console.log(hasDriverLicense && hasGoodVision && isTired);


// if (hasDriverLicense && hasGoodVision && !isTired) {
//   console.log('Sarah is able to drive!');
// } else {
//   console.log('Someone else should drive...');
// }






  // testData:

// const DolphinsScoresOne = 96;
// const DolphinsScoresTwo = 108;
// const DolphinsScoresThree = 89;

// const KoalasScoresOne = 88;
// const KoalasScoresTwo = 91;
// const KoalasScoresThree = 110;

// Bonus 1
// const DolphinsScoresOne = 97;
// const DolphinsScoresTwo = 112;
// const DolphinsScoresThree = 101;

// const KoalasScoresOne = 109;
// const KoalasScoresTwo = 95;
// const KoalasScoresThree = 123;


  //solution:

// const DolphinScore = (200 + 60 + 60) / 3;
// const KoalasScore = (60 + 200 + 60) / 3;

// const MinimumScore = 100;

// console.log(DolphinScore, KoalasScore);

// if (DolphinScore > KoalasScore && DolphinScore >= MinimumScore) {
//   console.log('Dolphins are winner!');
// } else if (KoalasScore > DolphinScore && KoalasScore >= MinimumScore) {
//   console.log('Koalas are winner!');
// } else if (DolphinScore === KoalasScore && KoalasScore >= MinimumScore && DolphinScore >= MinimumScore) {
//   console.log("Both win the trophy!");
// } else {
//   console.log("There's no winners :(");
// }


// with switch statement:

// const day = 'wednesday';

// switch (day) {
//   case 'monday': // day === 'monday'
//     console.log('Plan course structure');
//     console.log('Go to coding meetup');
//     break;
//   case 'tuesday':
//     console.log('Prepare theory videos');
//     break;
//   case 'wednesday':
//   case 'thursday':
//     console.log('Write code examples');
//     break;
//   case 'friday':
//     console.log('record videos');
//     break;
//   case 'saturday':
//   case 'sunday':
//     console.log('Enjoy the weekend :D');
//     break;
//   default:
//     console.log('Not a valid day!');
// }


// with if/else statements:

// const day = 'monday';

// if (day === 'monday') {
//   console.log('Plan course structure');
//   console.log('Go to coding meetup');
// } else if (day === 'tuesday') {
//   console.log('Prepare theory videos');
// } else if (day === 'wednesday' || day === 'thursday') {
//   console.log('Write code examples');
// } else if (day === 'friday') {
//   console.log('record videos');
// } else if (day === 'saturday' || day === 'sunday') {
//   console.log('Enjoy the weekend :D');
// } else {
//   console.log('Not a valid day!');
// }


// const age = 23;

// const drink = age >= 18 ? 'wine' : 'water';
// console.log(drink);

// let drink2;
// if (age >= 18) {
//   drink2 = 'wine';
// } else {
//   drink2 = 'water';
// }

// console.log(drink2);

// console.log(`I like to drink ${age >= 18 ? 'wine' : 'water'}`);

// A little tip calculator:

// const billValue = 430;

// let tip = billValue >= 50 && billValue <= 300 ? billValue * 0.15 : billValue * 0.2;
// console.log(`Bill value is: ${billValue}, the tip was: ${tip}, and the total value: ${billValue + tip}`);

// function logger() {
//   console.log('My name is Jonas');
// }

// calling / running / invoking function:
// logger();
// logger();
// logger();


// function fruitProcessor(apples, oranges) {
//   const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
//   return juice;
// }


// const appleJuice = fruitProcessor(5, 0);
// console.log(appleJuice);
// // тут мы задали аргументы для функции (5, 0), которые вставли на позиции apple и oranges соответсвенно,
// // затем, оператор return в функции возвращает значение переменной самой функции (fruitProcessor) и затем,
// // чтобы увидеть этот результат нам необходимо получить это значение в переменную (appleJuice), мы могли увидеть
// // результат и без переменной, используя console.log(fruitProcessor(5, 0)).

// const appleOrangeJuice = fruitProcessor(2, 4);
// console.log(appleOrangeJuice);


// возвращаем факториал:

// function factorial(num) {
//   var x = num;
//   while (x > 1) {
//     num *= x-1;
//     x--;
//   }
//   return num;
// }

// const numValue = factorial(5);
// console.log(numValue);



// function declaration:
// function calcAge1(birthYear) {
//   return 2037 - birthYear;
// }
// const age1 = calcAge1(1991);


// // function expression:
// const calcAge2 = function (birthYear) {
//   return 2037 - birthYear;
// };

// const age2 = calcAge2(1991);
// console.log(age1, age2);



// Arrow functions:
// const calcAge3 = birthYear => 2037 - birthYear;
// const age3 = calcAge3(1991);
// console.log(age3);


// const yearsUntilRetirement = (birthYear, firstName) => {
//   const age = 2037 - birthYear;
//   const retirement = 65 - age;
//   return `${firstName} retires in ${retirement} years`;
// };

// console.log(yearsUntilRetirement(1991, 'Jonas'));
// console.log(yearsUntilRetirement(1980, 'Bob'));



// function cutFruitPieces(fruit) {
//   return fruit * 4;
// }



  // functions calling in fuction:
// function fruitProcessor(apples, oranges) {

//   const applePieces = cutFruitPieces(apples);
//   const orangePieces = cutFruitPieces(oranges);
  
//   const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange.`;
//   return juice;
// }

// console.log(fruitProcessor(2, 3));


const calcAge3 = birthYear => 2037 - birthYear;
const age3 = calcAge3(1991);
console.log(age3);



const calcAge = function (birthYear) {
  return 2037 - birthYear;
};

const yearsUntilRetirement = function (birthYear, firstName) {
  const age = calcAge(birthYear);
  const retirement = 65 - age;

  if (retirement > 0) {
    console.log(`${firstName} retires in ${retirement} years`);
    return retirement;
  } else {
    console.log(`${firstName} has already retired`);
    return -1;
  }
};

console.log(yearsUntilRetirement(1991, 'Jonas'));





// const dolphinsScore = 44 + 23 + 71;
// const koalasScore = 65 + 54 + 49;

// 1:
const calcAverage = (firstScore, secondScore, thirdScore) => (firstScore + secondScore + thirdScore) / 3;

// 2:
// let scoreDolphins = calcAverage(44, 23, 71);
// let scoreKoalas = calcAverage(65, 54, 49);

let scoreDolphins2 = calcAverage(85, 54, 41);
let scoreKoalas2 = calcAverage(23, 34, 27);

// 3:
const checkWinner = function (avgDolphins, avgKoalas) {
  if (avgDolphins >= 2 * avgKoalas ) {
    console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
  } else if (avgKoalas >= 2 * avgDolphins) {
    console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
  } else {
    console.log("No team wins...");
  }
}; 
checkWinner(scoreDolphins2, scoreKoalas2);

// 4:
checkWinner(avgDolphins2, avgKoalas2);


// objects (basic):

// const testObj = {
//   12: "Namath",
//   16: "Montana",
//   19: "Unitas"
// };

// const playerNumber = 16;
// const player = testObj[playerNumber];


// const someObj = {
//   propName: "John"
// };

// function propPrefix(str) {
//   const s = "prop";
//   return s + str;
// }

// const someProp = propPrefix("Name");
// console.log(someObj[someProp]);



function checkObj(obj, checkProp) {
  if (obj.hasOwnProperty(checkProp)) {
    return obj[checkProp];
  } else {
    return "Not Found";
  }
}


function phoneticLookup(val) {
  const lookup = {
    alpha: "Adams",
    bravo: "Boston",
    charlie: "Chicago",
    delta: "Denver",
    echo: "Easy",
    foxtrot: "Frank"
  };
  let result = lookup[val];
  return result;
}

console.log(phoneticLookup("charlie"));


const myStorage = {
  "car": {
    "inside": {
      "glove box": "maps",
      "passenger seat": "crumbs"
     },
    "outside": {
      "trunk": "jack"
    }
  }
};

const gloveBoxContents = myStorage.car.inside["glove box"];

console.log(gloveBoxContents);





const myPlants = [
  {
    type: "flowers",
    list: [
      "rose",
      "tulip",
      "dandelion"
    ]
  },
  {
    type: "trees",
    list: [
      "fir",
      "pine",
      "birch"
    ]
  }
];

const secondTree = myPlants[1].list[1];




// добавляем новые значения в объект с помощью функции:

const recordCollection = {
  2548: {
    albumTitle: 'Slippery When Wet',
    artist: 'Bon Jovi',
    tracks: ['Let It Rock', 'You Give Love a Bad Name']
  },
  2468: {
    albumTitle: '1999',
    artist: 'Prince',
    tracks: ['1999', 'Little Red Corvette']
  },
  1245: {
    artist: 'Robert Palmer',
    tracks: []
  },
  5439: {
    albumTitle: 'ABBA Gold'
  }
};

function updateRecords(records, id, prop, value) {
  if (prop !== "tracks" && value !== '') {
    records[id][prop] = value;
  } else if (prop === "tracks" && records[id].hasOwnProperty("tracks") && value !== '') {
    records[id][prop].push(value);
  } else if (prop === "tracks" && value !== '') {
    records[id][prop] = [value];
  } else if (value === ''){
    delete records[id][prop];
  }
  return records;
}
console.log(updateRecords(recordCollection, 2548, 'chlen', "gold"));


// добавляем одно значение в объекты с помощью функции:
const questions = [{
    question: "What's the currency of the USA?",
    choices: ["US dollar", "Ruble", "Horses", "Gold"],
    corAnswer: 0
}, {
    question: "Where was the American Declaration of Independence signed?",
    choices: ["Philadelphia", "At the bottom", "Frankie's Pub", "China"],
    corAnswer: 0
}];
function updateProp(questions, newProp, value) {
  for (let i = 0; i < questions.length; i++) {
    questions[i][newProp] = value;
    // console.log(questions);
  }
  return questions;
}
console.log(updateProp(questions, 'usersAnswer', null));


// Mark and John BMI comparing

const markObj = {
  fullName: 'Mark Miller',
  mass: 78,
  height: 1.69,
  calcBMI: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  }
};
const johnObj = {
  fullName: 'John Smith',
  mass: 92,
  height: 1.95,
  calcBMI: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  }
};
markObj.calcBMI();
johnObj.calcBMI();


if (markObj.bmi > johnObj.bmi) {
  console.log(`${markObj.fullName}'s BMI (${markObj.bmi}) is higher than ${johnObj.fullName}'s (${johnObj.bmi})!`);
} else {
  console.log(`${johnObj.fullName}'s BMI (${johnObj.bmi}) is higher than ${markObj.fullName}'s (${markObj.bmi})!`);
}



const jonasArray = [
  'Jonas',
  'Schmedtmann',
  2037 - 1991,
  'teacher',
  ['Michael', 'Peter', 'Steven'],
  true
];
const types = [];

for (let i = 0; i < jonasArray.length; i++) {
  // console.log(jonasArray[i]);
  types.push(typeof jonasArray[i]);
  console.log(types);
}


const years = [1991, 2007, 1969, 2020];
const ages = [];

for (let i = 0; i < years.length; i++) {
  
  ages.push(2037 - years[i]);
}
console.log(ages);

// continue and break
// фильтруем и оставляем только strings с помощью цикла, typeof и continue
for (let i = 0; i < jonasArray.length; i++) {
  if (typeof jonasArray[i] !== 'string') continue;
  console.log(jonasArray[i], typeof jonasArray[i]);
}

// фильтруем и оставляем только значения до первого number с помощью цикла, typeof и break
for (let i = 0; i < jonasArray.length; i++) {
  if (typeof jonasArray[i] === 'number') break;
  console.log(jonasArray[i], typeof jonasArray[i]);
}


// обратный цикл
const jonas = [
  'Jonas',
  'Schmedtmann',
  2037 - 1991,
  'teacher',
  ['Michael', 'Peter', 'Steven'],
];

for (let i = jonas.length - 1; i >= 0; i--) {
  console.log(jonas[i]);
}


// создаем цикл в цикле:
for (let exercise = 1; exercise < 4; exercise++) {
  console.log(`--- Starting exercise ${exercise}`);

  for (let rep = 1; rep < 6; rep++) {
    console.log(`Exercise ${exercise}: Lifting weight repetition ${rep}`);
  }
}


// цикл while 
let rep = 1;
while (rep <= 10) {
  console.log(`Lifting weight repetition ${rep}`);
  rep++;
}

let dice = Math.trunc(Math.random() * 6) + 1;
console.log(dice);

while (dice !== 6) {
  console.log(`You rolled a ${dice}`);
  dice = Math.trunc(Math.random() * 6) + 1;
  if (dice === 6) console.log(`End`);
}



// Coding challenge 4:

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

for (let i = 0; i < bills.length; i++) {
  if (bills[i] >= 50 && bills[i] <= 300) {
    tips.push(bills[i] * 0.15);
    totals.push(bills[i] + tips[i]);
  } else {
    tips.push(bills[i] * 0.2);
    totals.push(bills[i] + tips[i]);
  }
  console.log(tips);
  console.log(totals);
}
function calcAvarage(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }
  return sum / arr.length;
}
const totalAvg = calcAvarage(totals);
console.log(totalAvg);













const arr = [
  [1, 2], [3, 4], [5, 6]
];

for (let i = 0; i < arr.length; i++) {
  console.log(arr[i].length);
  for (let j = 0; j < arr[i].length; j++) {
    console.log(arr[i][j]);
  }
}



// пример обратного цикла:
const myArray = [];
for (let i = 9; i >= 1; i -= 2) {
  myArray.push(i);
}
console.log(myArray);


// const arr = [10, 9, 8, 7, 6];
// for (let i = 0; i < arr.length; i++) {
//    console.log(arr[i]);
// }


 
// Получаем сложение всех элементов массива с помощью цикла:
const myArr = [2, 3, 4, 5, 6];
let total = 0;
for (let i = 0; i < myArr.length; i++) {
  total += myArr[i];
  console.log(total);
}


// Получаем умножение всех элементов массива с помощью цикла:

function multiplyAll(arr) {
  let product = 1;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      // console.log(arr[i][j]);
      product *= arr[i][j];
      console.log(product);
    }
  }
  return product;
}

multiplyAll([[1, 2], [3, 4], [5, 6, 7]]);




const ourArray = [];
let i = 0;

do {
  ourArray.push(i);
  i++;
} while (i < 5);
console.log(ourArray);



const mArray = [];
let j = 10;

do {
  mArray.push(j);
  j++;
} while (j < 5);
console.log(mArray);
 



const yArr = [2, 3, 4, 5, 6];
function multiply(arr, n) {
    let product = 1;
    for (let i = 0; i < n; i++) {
      product *= arr[i];
    }
    return product;
}
console.log(multiply(yArr, 5));

// функция с циклом для подсчета суммы указанных первых элементов массива:

const veeArr = [2, 3, 4, 5, 6];
function sum(arr, n) {
  let total = 0;
  for (let i = 0; i < n; i++) {
    total += arr[i];
    console.log(total);
  }
  return total;
}
console.log(sum(veeArr, 3));

// тоже самое, но без цикла, тут функция вызавает сама себя и плюсует значения в return:

const yuArr = [2, 3, 4, 5, 6];
function sum(arr, n) {
  let total = 0;
  if (n <= 0) {
    return 0;
  } else {
    return total += arr[n - 1];
  }
}
console.log(sum(yuArr, 3));





const contacts = [
  {
    firstName: "Akira",
    lastName: "Laine",
    number: "0543236543",
    likes: ["Pizza", "Coding", "Brownie Points"],
  },
  {
    firstName: "Harry",
    lastName: "Potter",
    number: "0994372684",
    likes: ["Hogwarts", "Magic", "Hagrid"],
  },
  {
    firstName: "Sherlock",
    lastName: "Holmes",
    number: "0487345643",
    likes: ["Intriguing Cases", "Violin"],
  },
  {
    firstName: "Kristian",
    lastName: "Vos",
    number: "unknown",
    likes: ["JavaScript", "Gaming", "Foxes"],
  },
];
function lookUpProfile(name, prop) {
  for (i = 0; i < contacts.length; i++) {
    if (contacts[i]["firstName"] !== name) {
      continue;
    }
    if (contacts[i].hasOwnProperty(prop)) {
      return contacts[i][prop];
    } else { 
      return "No such property";
    }
  } return "No such contact";
}
console.log(lookUpProfile("Bob", "number"));

// !!!!

console.log(Math.floor(Math.random() * 20));


// console.log(parseInt("008"));
// console.log(parseInt("11", 2));
// console.log(parseInt("111001", 2));


// Вернет значение между равно или больше 5 и равно или меньше 20:
console.log(Math.floor(Math.random() * (20 - 5 + 1)) + 5);


// function checkSign(num) {
//   return (num > 0) ? "positive"
//     : (num < 0) ? "negative"
//     : "zero";
// }
// checkSign(10);


// находим массив от числа по возврастанию:
function countup(n) {
  if (n >= 1) {
    const sountArray = countup(n - 1);
    sountArray.push(n);
    return sountArray;
  } else {
    return [];
  }
}
console.log(countup(-1));


// находим массив от числа по убыванию (1):
function coundown(n) {
  if (n < 1) {
    return [];
  } else {
    let countArray = [n];
    countArray = countArray.concat(coundown(n - 1));
    return countArray;
  }
}
console.log(typeof(coundown(-1)));


// находим массив от числа по убыванию (2):
function countdown(n) {
  if (n >= 1) {
    const sountArray = countdown(n - 1);
    sountArray.unshift(n);
    return sountArray;
  } else {
    return [];
  }
}
console.log(countdown(5));


// 
function rangeOfNumbers(startNum, endNum) {
  if (startNum <= endNum) {
    const countArray = rangeOfNumbers(startNum, endNum - 1);
    countArray.push(endNum);
    return countArray;
  } else {
    return [];
  }
}

console.log(rangeOfNumbers(2, 10));




// ARRAYS BASICS:




// const friends = ['Michael', 'Steven', 'Peter'];
// console.log(friends);
// console.log(friends[2]);


// // как взять последний элемент массива:
// console.log(friends[friends.length - 1]);

// // как поменять элемент массива:
// friends[2] = 'Jay';
// console.log(friends);

// const firstName = 'Nikita';
// const jonas = [firstName, 'Romanov', 2022 - 1998, 'student', friends];
// console.log(jonas);

// const calcAges = function (birthYears) {
//   return 2037 - birthYears;
// };

// const years = [1990, 1967, 2002, 2010, 2018];
// const age1 = calcAges(years[0]);
// const age2 = calcAges(years[1]);
// const ag3 = calcAges(years[years.length - 1]);
// console.log(age1, age2, ag3);

// const ages = [calcAges(years[0]), calcAges(years[1]), calcAges(years[years.length - 1])];
// console.log(ages);

// 

const friends = ['Michael', 'Steven', 'Peter'];

// add elements
const newLength = friends.push('Jay');
console.log(friends);
console.log(newLength);

friends.unshift('John');
console.log(friends);

// Remove elements
friends.pop(); // last element
const popped = friends.pop();
console.log(friends);
console.log(popped);

friends.shift(); // first element
console.log(friends);

console.log(friends.indexOf('Steven')); // 1
console.log(friends.indexOf('Bob')); // -1, т.к элемент не в списке

friends.push(23);
console.log(friends.includes('Steven')); // true
console.log(friends.includes('Bob')); // false
console.log(friends.includes('23')); // false, потому что !== 23
console.log(friends.includes(23)); // true

if (friends.includes('Steven')) {
  console.log('You have a friend Steven!');
}

// 1:
const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};
// 2:
const bills = [125, 555, 44];
// 3:
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
console.log(bills, tips);
// 4:
const totalSum = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
console.log(totalSum);






// возвращаем массив как строки из букв, в которые преобразовываем значения:
var ArrowFunc = function (arr) {
  return arr.map(arItem => {
    return String.fromCharCode(arItem);
  }).join('');
};
console.log(ArrowFunc([84,101,115,116]));


// возвращаем merge массив без дублей по возврастанию:
function mergeArrays(arr1, arr2) {
  const totalArr = arr1.concat(arr2);
  const filterArr = [...new Set(totalArr)]
  return filterArr.sort((a, b) => (a - b));
}
const ALL = mergeArrays([1, 3, 5, 7, 9, 11, 12], [1, 2, 3, 4, 5, 10, 12]);
console.log(ALL);


// складываем каждое число массива между собой и возвращаем номер:
function add(num1, num2) {
  let N1 = num1.toString();
  let N2 = num2.toString();
  if (N1.length > N2.length) {
    N2 = N2.padStart(N1.length, '0');
  } else if (N1.length < N2.length) {
    N1 = N1.padStart(N2.length, '0');
  }
  N1 = Array.from(String(N1), Number);
  N2 = Array.from(String(N2), Number);
  return Number(N1.map((item, i) => {
    return item + N2[i];
  }).join(''));
}
console.log(add(1222, 81));



// превращаем массив массивов в массив объектов:

const arrs = [["white", "goodness"], ["blue", "tranquility"]];
const locations = arrs.map(([key, value]) => ({[key]: value}));
console.log(locations);



// объединяем разные объекты в один:
const objA = { a: 10, b: 20, c: 30 };
const objB = { a: 3, c: 6, d: 3 };
const objC = { a: 5, d: 11, e: 8 };
const objD = { c: 3 };

function combine(...theArgs) {
  return theArgs.reduce((previous, current) => {
    for (let item in current) {
      if (current.hasOwnProperty(item)) { 
        previous[item] = (previous[item] || 0) + current[item];
      }
    }
    return previous;
  }, {});
}
console.log(combine(objA, objC));

// array.reduce(callback[, initialValue])
// initialValue = {}


// находим пропущенный элемент массива через цикл и indexOf:
function findMissing(arr1, arr2) {
  let index;
  for (let i = 0; i <= arr1.length; i++) {
    index = arr2.indexOf(arr1[i]);
    if (index > -1) {
      arr2.splice(index, 1);
    } else {
      return arr1[i];
    }
  }
}
console.log(findMissing([1, 2, 2, 3], [1, 2, 3]));


function getDecimal(n){
  let decimalToPart;
  let decimalPart;
  decimalToPart = (n + '').split('.');
  if (decimalToPart.length === 1) {
    return 0;
  } else {
    decimalPart = '0.' + decimalToPart[1];
  }
  console.log(decimalToPart);
  console.log(decimalPart);
  return Number(decimalPart);
}
console.log(getDecimal(10.5));


// возвращаем отсортированную сумму самых первых трех чисел в массиве без дублей:
function maxTriSum(numbers) {
  let uniqueArray = numbers.filter(function (item, pos) {
    return numbers.indexOf(item) == pos;
  });
  let newSortedArr = uniqueArray.sort((a, b) => b - a);
  let TripletSum = 0;
  console.log(newSortedArr);
  TripletSum = newSortedArr[0] + newSortedArr[1] + newSortedArr[2];
  return TripletSum;
}
console.log(maxTriSum([2,1,8,0,6,4,8,6,2,4]));




// составляем функцию для определения лучшего "языка" по баллам, и складываем в отдельный массив по убыванию
function myLanguages(results) {
  let newArr = [];
  for (let key in results) {
    if (results[key] >= 60) {
      newArr.unshift(key);
      console.log(newArr);
    }
  }
  return newArr.sort((a, b) => results[b] - results[a]);
}
console.log(myLanguages({"Java" : 10, "Ruby" : 80, "Python" : 65}));




function nicknameGenerator(name) {
  if ('aeiou'.includes(name[2]) && name.length > 3) {
    return name.substring(0, 4);
  } else if (name.length <= 3) {
    return "Error: Name too short";
  } else {
    return name.substring(0, 3);
  }
}
console.log(nicknameGenerator("Kba"));




function sortMyString(newStr) {
  let newStrEven = '';
  let newStrOdd = '';
  let newStrSum = '';
  for (let i = 0; i < newStr.length; i++) {
    if (i % 2 === 0) {
      newStrEven += newStr[i];
    } else {
      newStrOdd += newStr[i];
    }
  }
  newStrSum = newStrEven + ' ' + newStrOdd;
  console.log(newStrSum);
  console.log(newStrEven);
  console.log(newStrOdd);
  return newStrSum;
}
console.log(sortMyString("YCOLUE'VREER"));




function sentence(List) {
  // Sort array by the key of each object
  let sortedList = List.sort((a, b) => Object.keys(a) - Object.keys(b));
  // Loop through sorted array to get each value in a new array
  let result = sortedList.map((currentVal) => Object.values(currentVal));
  // Convert that array into a string
  return result.join(" ");
}

console.log(sentence([
        {'4': 'dog' }, {'2': 'took'}, {'3': 'his'},
        {'-2': 'Vatsan'}, {'5': 'for'}, {'6': 'a'}, {'12': 'spin'}
        ]));
       

// возвращаем 1 если есть гласная и 0 если нету:
function vowelOne(s) {
  let newArr = s.split('');
  let newStr = '';
  for (let i = 0; i < newArr.length; i++) {
    if ("aeiou".includes(newArr[i])) {
      newStr += 1;
    } else {
      newStr += 0;
    }
  }
  return newStr;
}
console.log(vowelOne("ayI2IXom?O}OLA;ooz.sE?AUEuUa~o"));



// !!!!!!!
function dataReverse(data) {
  let subArrSize = 8;
  let subArr = [];
  let subArrFlat;
  for (let i = 0; i < data.length; i += subArrSize) {
    subArr.push(data.slice(i, i + subArrSize));
  }
  subArr.reverse();
  subArrFlat = subArr.reduce(function (a, b) {
    return a.concat(b);
  });
  return subArrFlat;
}
console.log(dataReverse([1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,0,1,0,1,0,1,0]));



// !!!???
function killer(suspectInfo, arr) {
  for (let name in suspectInfo) {
    if (arr.every((deadPerson) => suspectInfo[name].includes(deadPerson))) {
      return name;
    }
  }
}
console.log(killer({'James': ['Jacob', 'Bill', 'Lucas'],
 'Johnny': ['David', 'Kyle', 'Lucas'],
 'Peter': ['Lucy', 'Kyle']}, ['Bill', 'Lucas']));



// count the digit:
function nbDig(n, d) {
  let kArr = [];
  let count = 0;
  for (let k = 0; k <= n; k++) {
    let k2 = k*k;
    kArr.push(k2);
  }
  let kArrTo = kArr.join('');
  let kArrToFlat = kArrTo.split('');
  console.log(kArrToFlat);
  for (i = 0; i < kArrToFlat.length; i++) {
    if (kArrToFlat[i] == d) {
      count++;
    }
  }
  return count;
} 
console.log(nbDig(10, 1));














// const elemsCount = (selector) => document.querySelectorAll(selector).length;
// const predicate = (configItem) => {
//   const count = elemsCount(configItem[0]);
//   console.log(configItem[0], count >= configItem[1] && count <= configItem[2]);
//     return count >= configItem[1] && count <= configItem[2];
// };
// const evaluate = (isFullfilled) => (isFullfilled ? 2 : 0);
// const isArray = (item) => Array.isArray(item[0]);
// const config = [
//     [
//         ['header', 1, 1],
//         ['main', 1, 1],
//         ['footer', 1, 1],
//     ],
//     ['section', 6, Infinity],
//     ['h1', 1, 1],
//     ['h2', 5, Infinity],
//     ['nav', 1, Infinity],
//     ['ul', 2, Infinity],
//     ['button', 10, Infinity],
//     [
//         ['input[type="email"]', 1, Infinity],
//         ['input[type="tel"]', 1, Infinity],
//     ],
//     ['textarea', 1, Infinity],
//     ['input, textarea[placeholder]', 3, Infinity],
// ];
// config.reduce((sum, configItem) => sum + (isArray(configItem)
//     ? evaluate(configItem.every(predicate))
//     : evaluate(predicate(configItem))), 0);





// Добавляем функцию перевода:

// const langElement = document.querySelectorAll('[data-i18]');
// const langs = document.querySelectorAll('.header__lang-btn');

// function doTranslate(language) {
//   langElement.forEach(elem => elem.textContent = i18Obj[language][elem.dataset.i18]);
// }
// langs.forEach(el => el.addEventListener("click", (e) => {
//     doTranslate(e.target.id);
//   }
// ));




// function changeTheme(themeColor) {
//   if (themeColor === 'light') {
//     theme = 'black';
//     document.documentElement.style.setProperty('--gold-color', '#BDAE82');
//     document.documentElement.style.setProperty('--black-color', '#000');
//     document.documentElement.style.setProperty('--white-color', '#fff');
//     document.documentElement.style.setProperty('--wtn-color', '#fff');
//     console.log(theme);
//   } else if (themeColor === 'black') {
//     theme = 'light';
//     document.documentElement.style.setProperty('--gold-color', '#000');
//     document.documentElement.style.setProperty('--black-color', '#fff');
//     document.documentElement.style.setProperty('--white-color', '#000');
//     document.documentElement.style.setProperty('--wtn-color', '#BDAE82');
//     console.log(theme);
//   }
// }
// darkBtn.addEventListener('click', (e) => {
//   changeTheme(e.target.id);
// });
// lightBtn.addEventListener('click', (e) => {
//   changeTheme(e.target.id);
// });


// function setLocalStorage() {
//   localStorage.setItem('theme', theme);
// }
// window.addEventListener('beforeunload', setLocalStorage);

// function getLocalStorage() {
//   if(localStorage.getItem('theme')) {
//     const theme = localStorage.getItem('theme');
//     changeTheme(theme);
//   }
// }
// window.addEventListener('load', getLocalStorage);




// // проверям на правдивость окончание слова, используя slice:
// function solution(str, ending){
//   return str.slice(-ending.length) === ending || ending === '' ? true : false;
// }
// console.log(solution('zombie', ''));


// // убираем пробелы из строки с помощью slice:
// function noSpace(x){
//   return x.replace(/ /g, '');
// }
// console.log(noSpace("hbhhjbjhb   jhjhjbhbb  jjhjj"));




// // создаем fakeBin, заменяя все что 5 и больше на 1, а что меньше 5 на 0
// function fakeBin(num) {
//   return num.replace(/[0-4]/g, "0").replace(/[5-9]/g, "1");
// }
// const fBin = fakeBin('55665522');
// console.log(fBin);



// // создаем аббревиатуру имени, с использованием split (выделяя сначала слово в массиве а затем порядковый номер буквы)
// function abbrevName(name) {
//    return name.split(" ")[0][0].toUpperCase() + '.' + name.split(" ")[1][0].toUpperCase();
// }
// console.log(abbrevName('Sam Harris'));


