function minesweeper(matrix) {
  let copyMatrix = JSON.parse(JSON.stringify(matrix));
  let newMatrix = matrix;
  let valuesOfTrue = [];
  newMatrix.push([]);
  newMatrix.unshift([]);
  for (let i = 0; i < newMatrix[1].length; i++) {
    newMatrix[0].push(false);
    newMatrix[newMatrix.length - 1].push(false);
  }
  for (let p = 0; p < newMatrix.length; p++) {
    newMatrix[p].unshift(false);
    newMatrix[p].push(false);
  }
  for (let i = 1; i < newMatrix.length - 1; i++) {
    for (let p = 1; p < newMatrix[i].length - 1; p++) {
      let filteredCircle = [];
      filteredCircle.push(
        newMatrix[i][p - 1],
        newMatrix[i][p + 1],
        newMatrix[i - 1][p],
        newMatrix[i + 1][p],
        newMatrix[i - 1][p - 1],
        newMatrix[i + 1][p + 1],
        newMatrix[i + 1][p - 1],
        newMatrix[i - 1][p + 1]
      );
      valuesOfTrue.push(filteredCircle.filter((item) => item === true).length);
    }
  }
  let count = 0;
  for (let i = 0; i < copyMatrix.length; i++) {
    for (let p = 0; p < copyMatrix[i].length; p++) {
      copyMatrix[i][p] = valuesOfTrue[count];
      count++;
    }
  }
  return copyMatrix;
}
console.log(
  minesweeper([
    [true, false, false],
    [false, true, false],
    [false, false, false],
  ])
);

// matrix[i][p] = filteredCircle.filter((item) => item !== false).length;
// console.log(filteredCircle.filter((item) => item === true).length);
// copyMatrix[i][p] = filteredCircle.filter((item) => item === true).length;

// if (matrix[i].indexOf(matrix[i][p]) === 0) {
//   if (matrix[i][p + 1] === true) {
//     count++;
//     matrix[i][p] = count;
//   } else if (matrix[i + 1][p] === true) {
//     count++;
//     matrix[i][p] = count;
//   }
// } else if (matrix[i].indexOf(matrix[i][p]) === 0) {
// }

// if (matrix[i][p + 1] === true) {
//   count++;
//   // matrix[i][p] = count;
// } else if (matrix[i][p - 1] === true) {
//   count++;
//   // matrix[i][p] = count;
// } else if (matrix[i - 1][p] === true) {
//   count++;
//   // matrix[i][p] = count;
// } else if (matrix[i + 1][p] === true) {
//   count++;
//   // matrix[i][p] = count;
// } else if (matrix[i + 1][p + 1] === true) {
//   count++;
//   // matrix[i][p] = count;
// } else if (matrix[i - 1][p - 1] === true) {
//   count++;
//   // matrix[i][p] = count;
// }
