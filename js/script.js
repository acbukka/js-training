'use strict';


// const firstName = 'Jonas';
// const job = 'teacher';
// const birthYear = 1991;
// const year = 2037;

// const jonas = "I'm " + firstName + ', a ' + (year - birthYear) + ' years old ' + job + '!';
// console.log(jonas);

// const jonasNew = `I'm ${firstName}, a ${year - birthYear} years old ${job}!`;
// console.log(jonasNew);

// console.log('String with \n\ muliple \n\ lines');

// console.log(`String with
// multiple
// lines`);


// const age = 15;
// const isOldEnough = age >= 18;

// if (isOldEnough) {
//   console.log('Sarah can start driving license');
// } else {
//   const yearLeft = 18 - age;
//   console.log(`Sarah is too young, wait another ${yearLeft} years :)`);
// }


// const birthYear = 2005;

// let century;
// if (birthYear <= 2000) {
//   century = 20;
// } else {
//   century = 21;
// }
// console.log(century);




// const MarkMass = 95;
// const MarkHeight = 1.88;
// const JohnMass = 85;
// const JohnHeight = 1.76;

const MarkMass = 78;
const MarkHeight = 1.69;
const JohnMass = 92;
const JohnHeight = 1.95;

const MarkBMI = MarkMass / (MarkHeight ** 2);
const JohnBMI = JohnMass / (JohnHeight ** 2);
const MarkHigherBMI = MarkBMI > JohnBMI;
console.log(MarkBMI, JohnBMI);
if (MarkBMI > JohnBMI) {
  console.log(`Mark's BMI (${MarkBMI}) is higher than John's (${JohnBMI})`);
} else {
  console.log(`John's BMI (${MarkBMI}) is higher than Mark's (${JohnBMI})`);
}







