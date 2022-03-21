function numberOfPairs(gloves) {
  // console.log(gloves);
  let counter = 0;
  let newObj = {};
  for (let i = 0; i < gloves.length; i++) {
    if (newObj.hasOwnProperty(gloves[i])) {
      newObj[gloves[i]] = newObj[gloves[i]] + 1;
    } else {
      newObj[gloves[i]] = 0;
    }
  }
  console.log(newObj);
  let newArr = Object.values(newObj);
  for (let p = 0; p < newArr.length; p++) {
    if (newArr[p] === 1) {
      counter++;
    } else if (newArr[p] % 2 !== 0) {
      counter += (newArr[p] - 1) / 2 + 1;
    } else {
      counter += newArr[p] / 2;
    }
  }
  return counter;
}

console.log(numberOfPairs(['Gray', 'Gray', 'Gray', 'Gray', 'Gray', 'Gray']));

// for (let i = 0; i < gloves.length; i++) {
//   if (gloves.includes(gloves[i])) {
//     console.log(gloves[i].findIndex());
//     // for (let p = gloves[i].indexOf(); p < gloves.length; p++) {

//     //   }
//   }
// }
