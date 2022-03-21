// Рекурсивно:
const calculateDepth = function (arr) {
  let count = 1;
  if (arr.map((item) => Array.isArray(item)).includes(true)) {
    count += calculateDepth(arr.flat());
  }
  return count;
};
console.log(
  calculateDepth([1, 2, 3, 4, [1, 2, [1, 2, [[[]]]]], 5, [1, [[[[[[]]]]]]]])
);
calculateDepth([1, 2, 3, 4, [1, 2, [1, 2, [[[]]]]], 5, [1, [[[[[[]]]]]]]]);
// console.log(calculateDepth([1, [8, [[]]], 2, 3, [8, []], 4, 5, []]));
// console.log(calculateDepth([[[]]]));
// console.log(calculateDepth([1, 2, 3, 4, 5, [1]]));
console.log();
console.log(
  [1, 2, 3, 4, 5, [1]]
    .flat(0)
    .map((item) => Array.isArray(item))
    .includes(true)
);
console.log(
  [1, 2, 3, 4, 1, 2, 1, 2, 5, 1, []]
    .map((item) => Array.isArray(item))
    .includes(true)
);

// Не рекурсивно:
// const calculateDepth = function (arr) {
//   let stack = [];
//   var count = 0;
//   while (
//     arr
//       .flat(count)
//       .map((item) => Array.isArray(item))
//       .includes(true)
//   ) {
//     count++;
//   }
//   return count + 1;
// };
