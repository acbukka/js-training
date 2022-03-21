function deleteDigit(n) {
  let newNum = n.toString().split("");
  let stack = [];
  for (let i = 0; i < newNum.length; i++) {
    stack.push(
      Number(
        newNum
          .slice(0, i)
          .concat(newNum.slice(i + 1))
          .join("")
      )
    );
  }
  return Math.max(...stack);
}
console.log(deleteDigit(1001));
console.log(deleteDigit(222219));
let scc = [22, 33, 42, 14];
console.log(Math.max(...scc));

console.log(
  [1, 2, 3, 4, 5, 6].slice(0, 1).concat([1, 2, 3, 4, 5, 6].slice(1 + 1))
);
