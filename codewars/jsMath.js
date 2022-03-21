function calculate(...args) {
  let sum1 = 0;
  for (let arg of args) {
    sum1 += arg;
  }
  return function calculate(...args) {
    let sum2 = 0;
    for (let arg of args) {
      sum2 += arg;
    }
    return sum1 + sum2;
  };
}
// вощвращаем функцию в функции

// Второй способ:
const calculated =
  (...outer) =>
  (...inner) =>
    outer.concat(inner).reduce((p, c) => p + c);
