function solution(number) {
  let newNum = 0;
  for (let i = 0; i < number; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      newNum += i;
    }
  }
  return newNum;
}
console.log(solution(10));
