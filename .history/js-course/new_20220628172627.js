'use strict'

console.log(this);

const calcAge = function (birthYear) {
  console.log(2037 - birthYear);
  console.log(this);
}
calcAge(1991);

// arrow function doesn't have their own this keyword and grab it from the parent global scope (window in this case)
const calcAgeArrow = birthYear => {
  console.log(2037 - birthYear);
  console.log(this);
}
calcAgeArrow(1980);

// and ye, this examplet show us what THIS keyword linked to the parent object anytime
const jonas = {
  year: 1991,
  calcAge: function () {
    console.log(this);
  }
}

jonas.calcAge();