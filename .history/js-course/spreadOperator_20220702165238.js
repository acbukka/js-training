'use strict'

const arr = [7, 8, 9];

const badNewArr = [1, 2, arr[0], arr[1], arr[2]]
console.log(badNewArr);

// just use this
const goodNewArr = [1, 2, ...arr]
console.log(goodNewArr);