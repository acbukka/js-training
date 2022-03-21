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
console.log(convert("1010", Alphabet.BINARY, Alphabet.HEXA_DECIMAL));


// convert("15", Alphabet.DECIMAL, Alphabet.BINARY); // should return "1111"
// convert("15", Alphabet.DECIMAL, Alphabet.OCTAL); // should return "17"
// convert("1010", Alphabet.BINARY, Alphabet.DECIMAL); // should return "10"
// convert("1010", Alphabet.BINARY, Alphabet.HEXA_DECIMAL); // should return "a"

// // other bases
// convert("0", Alphabet.DECIMAL, Alphabet.ALPHA); // should return "a"
// convert("27", Alphabet.DECIMAL, Alphabet.ALPHA_LOWER); // should return "bb"
// convert("hello", Alphabet.ALPHA_LOWER, Alphabet.HEXA_DECIMAL); // should return "320048"
// convert("SAME", Alphabet.ALPHA_UPPER, Alphabet.ALPHA_UPPER); // should return "SAME"