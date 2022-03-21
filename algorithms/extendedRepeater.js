const repeater = function (str, options) {
  str = str + "";
  let repeat = options.repeatTimes;
  let separ = options.separator;
  let addit = options.addition;
  let additionRepeat = options.additionRepeatTimes;
  let addSepar = options.additionSeparator;
  let newStr = "";
  if (repeat === undefined) {
    repeat = 1;
  }
  if (additionRepeat === undefined) {
    additionRepeat = 1;
  }
  if (separ === undefined) {
    separ = "+";
  }
  if (addSepar === undefined) {
    addSepar = "|";
  }
  for (let i = 0; i < repeat; i++) {
    newStr += str;
    for (let p = 0; p < additionRepeat; p++) {
      if (p === additionRepeat - 1) {
        newStr += addit;
      } else {
        newStr += addit + addSepar;
      }
    }
    if (i === repeat - 1) {
      newStr += "";
    } else {
      newStr += separ;
    }
  }
  return newStr.replace(/undefined/gi, "");
};
console.log(repeater("la", { repeatTimes: 3 }));
console.log(typeof (null + ""));
