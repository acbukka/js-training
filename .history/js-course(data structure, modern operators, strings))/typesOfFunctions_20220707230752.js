'use strict'

// console.log(this);

const calcAge = function (birthYear) {
  // console.log(2037 - birthYear);
  // console.log(this);
}
calcAge(1991);

// arrow function doesn't have their own this keyword and grab it from the parent global scope (window in this case)
const calcAgeArrow = birthYear => {
  console.log(2037 - birthYear);
  console.log(this);
}
// calcAgeArrow(1980);

// and ye, this example show us what THIS keyword linked to the parent (or OWNER in other words) object anytime
const jonas = {
  firstName: 'Jonas',
  year: 1991,
  calcAge: function () {
    console.log(this);

    // solution 1 (with new variable for THIS)
    // const self = this; // self or that
    // const isMillenial = function () {
    //   console.log(self);
    //   console.log(self.year >= 1981 && self.year <= 1996);
    // };


    // solution 2 
    // const isMillenial = () => {
    //   console.log(this);
    //   console.log(this.year >= 1981 && this.year <= 1996);
    // };

    // isMillenial();
  },

  greet: () => console.log(`Hey ${this.firstName}`)
}

// jonas.greet();
jonas.calcAge();

// arguments keyword
const addExpr = function (a, b) {
  // console.log(arguments);
  return a + b;
}
addExpr(2, 5)

// arguments can't use in arrow functions
var addArrow = (a, b) => {
  // console.log(arguments);
  return a + b;
}
addArrow(2, 3, 5)

// we can just copy a method, or evem get him in the new variable
// const matilda = {
//   year: 2017,
// };

// matilda.calcAge = jonas.calcAge;
// matilda.calcAge();

// const f = jonas.calcAge;
// f();
// console.log(f);

const ala2 = {
  name: 'Peter',
  func: () => {
      console.log(this.name)
  },
}
// ala2.func();

function getCounter() {
  let counter = 0;
  return function() {
    return counter++;
  }
}
let count = getCounter();
console.log(count());  // 0
console.log(count());  // 1
console.log(count());