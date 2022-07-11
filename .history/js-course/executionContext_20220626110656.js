'use strict'

const name = 'Jonas'

const first = () => {
  let a = 1;
  const b = second(7, 9);
  a = a + b;
  return a;
}

function second(x, y) {
  var c = 2;
  return c;
}

const x = first();
console.log(x);


// variables hoisting
console.log(me);
console.log(jon);
console.log(year);

var me = 'Jonas';
let job = 'teacher';
const year = 1991;

// functions hoisting
console.log(addDecl(2, 3));
// console.log(addExpr(2, 3));
console.log(addArrow(2, 3));

function addDecl(a, b) {
  return a + b;
}

const addExpr = function (a, b) {
  return a + b;
}

const addArrow = (a, b) => a + b;
