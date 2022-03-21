function getCommonCharacterCount(s1, s2) {
  s1 = s1.split("");
  s2 = s2.split("");
  let count = 0;
  if (s2.length > s1.length) {
    for (let i = 0; i < s2.length; i++) {
      if (s2.includes(s1[i])) {
        for (let p = 0; p < s2.length; p++) {
          if (s1[i] === s2[p]) {
            s1.splice(i, 1);
            s2.splice(p, 1);
            count++;
            i = 0;
            p = 0;
          }
        }
      }
    }
    return count;
  } else {
    for (let i = 0; i < s1.length; i++) {
      if (s1.includes(s2[i])) {
        for (let p = 0; p < s1.length; p++) {
          if (s2[i] === s1[p]) {
            s2.splice(i, 1);
            s1.splice(p, 1);
            count++;
            i = 0;
            p = 0;
          }
        }
      }
    }
    return count;
  }
}
console.log(getCommonCharacterCount("abca", "xyzbac"));
// 3
console.log("aasssddffb".length);
