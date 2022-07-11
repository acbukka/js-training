'use strict'

// console.log(this);

const calcAge = function (birthYear) {
  console.log(2037 - birthYear);
  // console.log(this);
}
calcAge(1991);

// arrow function doesn't have their own this keyword and grab it from the parent global scope (window in this case)
const calcAgeArrow = birthYear => {
  console.log(2037 - birthYear);
  // console.log(this);
}
calcAgeArrow(1980);

// and ye, this examplet show us what THIS keyword linked to the parent (or OWNER in other words) object anytime
const jonas = {
  firstName: 'Jonas',
  year: 1991,
  calcAge: function () {
    // console.log(this);

    const self = this; // self or that
    const isMillenial = function () {
      console.log(self.year >= 1981 && self.year <= 1996);
    };





    isMillenial();
  },

  greet: () => console.log(`Hey ${this.firstName}`)
}

jonas.greet();
jonas.calcAge();

// const matilda = {
//   year: 2017,
// };

// matilda.calcAge = jonas.calcAge;
// matilda.calcAge();

const f = jonas.calcAge();
f();
// console.log(f);