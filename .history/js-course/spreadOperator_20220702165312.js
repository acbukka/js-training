'use strict'

const arr = [7, 8, 9];

// we can do this
const badNewArr = [1, 2, arr[0], arr[1], arr[2]]
console.log(badNewArr);

// but better use this
const goodNewArr = [1, 2, ...arr]
console.log(goodNewArr);