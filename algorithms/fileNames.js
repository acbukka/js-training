function renameFiles(names) {
  let newObj = {};
  for (let p = 0; p < names.length; p++) {
    if (newObj.hasOwnProperty(names[p])) {
      newObj[names[p]] = newObj[names[p]] + 1;
      newObj[names[p] + `(${newObj[names[p]]})`] = 0;
    } else {
      newObj[names[p]] = 0;
    }
  }
  return Object.keys(newObj);
}
console.log(renameFiles(["file", "file", "image", "file(1)", "file"]));

// if (names[i] === newArr[p]) {
//   newArr.push(`${names[i]}(${counter})`);
//   counter++;
// } else {
//   newArr.push(`${names[i]}`);
// }

// if (newArr.includes(names[i])) {
//   newArr.push(names[i]);
// }

// for (let i = 0; i < names.length; i++) {
//   if (newArr.includes(names[i])) {
//     newArr.push(`${names[i]}(1)`);
//   } else {
//     newArr.push(names[i]);
//   }
// }
