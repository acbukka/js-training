function getMatrixElementsSum(matrix) {
  let count = 0;
  for (let i = 1; i < matrix.length; i++) {
    for (let p = 0; p < matrix[i].length; p++) {
      if (matrix[i - 1][p] !== 0) {
        count += matrix[i][p];
      }
    }
  }
  return count + matrix[0].reduce((a, b) => a + b);
}
console.log(
  getMatrixElementsSum([
    [0, 1, 1, 2],
    [0, 5, 0, 0],
    [2, 0, 3, 3],
  ])
);
