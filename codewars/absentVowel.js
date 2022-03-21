function absentVowel(str) {
  let newStr = str.replace(/\s+/g, '');
  let newArr = newStr.split('');
  let aeiou = [];
  let disappear = 0;
  let a = 0,
    e = 0,
    i = 0,
    o = 0,
    u = 0;
  console.log(newArr);
  for (let p = 0; p < newArr.length; p++) {
    if ('a'.includes(newArr[p])) a++;
    if ('e'.includes(newArr[p])) e++;
    if ('i'.includes(newArr[p])) i++;
    if ('o'.includes(newArr[p])) o++;
    if ('u'.includes(newArr[p])) u++;
    console.log(a, e, i, o, u);
  }
  aeiou.push(a, e, i, o, u);
  for (let i = 0; i < aeiou.length; i++) {
    if (aeiou[i] === 0) {
      disappear = i;
    }
  }
  console.log(disappear);
  console.log(aeiou);
}
console.log(absentVowel('John Doe hs seven red pples under his bsket'));
// Нам нужно найти индекс пропущенной гласной в строке

// Способ 2:
function absentVowel(x) {
  return ['a', 'e', 'i', 'o', 'u'].findIndex(v => !x.includes(v));
}
