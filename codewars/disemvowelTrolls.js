// function disemvowel(str) {
//   let newArr = str.split(' ');
//   let newFilteredArr = [];
//   let newStr = '';
//   for (let i = 0; i < newArr.length; i++) {
//     for (let p = 0; p < newArr[i].length; p++) {
//       if ("',aeiouAEIOU".includes(newArr[i][p])) {
//         for (let t = 0; t < newArr[i].length; t++) {
//           // newFilteredArr.push(newArr[i].slice(0, p) + newArr[i].slice(p + 1));

//         }

//       }
//     }
//   }

//   console.log(newFilteredArr);
// }
// console.log(disemvowel('What are you, a communist?'));

function disemvowel(str) {
  let newArr = str.split(' ');
  let newFilteredArr = [];
  for (let i = 0; i < newArr.length; i++) {
    newFilteredArr.push(newArr[i].replace(/[aeiou]/gi, ''));
  }
  return newFilteredArr.join(' ');
}
console.log(disemvowel('This website is for losers LOL!'));

// Способ 2
function disemvowel(str) {
  return str.replace(/[aeiou]/gi, '');
}
console.log(disemvowel('This website is for losers LOL!'));
