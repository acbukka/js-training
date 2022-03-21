function duplicateEncode(word) {
  word = word.toLowerCase();
  let obj = {};
  let newStr = '';
  for (let i = 0; i < word.length; i++) {
    if (obj.hasOwnProperty(word[i])) {
      obj[word[i]] = obj[word[i]] + 1;
    } else {
      obj[word[i]] = 1;
    }
  }
  console.log(obj);
  for (let p = 0; p < word.length; p++) {
    if (obj[word[p]] > 1) {
      newStr += ')';
    } else {
      newStr += '(';
    }
  }
  return newStr;
}
console.log(duplicateEncode('Success'));
