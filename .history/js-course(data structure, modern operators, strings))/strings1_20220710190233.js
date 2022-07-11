'use strict';

const airline = 'TAP Air Portugal';
console.log(airline.indexOf('r'));
console.log(airline.lastIndexOf('r'));
console.log(airline.indexOf('portugal'));

console.log(airline.slice(4));
console.log(airline.slice(4, 7));

console.log(airline.slice(0, airline.indexOf(' ')));
console.log(airline.slice(0, airline.lastIndexOf(' ')));

const checkMiddleSeat = function (seat) {
  // B and E are middle seats
  const s = seat.slice(-1);
  if (s === 'B' || s === 'E')
    console.log('You got the middle seat');
  else console.log('You got lucky');
}

checkMiddleSeat('11B');
checkMiddleSeat('23C');
checkMiddleSeat('3E');

// Comparing emails
const email = 'hello@jonas.io';
const loginEmail = '   Hello@Jonas.Io \n';

const correctEmail = loginEmail.toLowerCase().trim();
console.log(correctEmail);

// replacing
const priceGB = '288,97Eur';
const priceUS = priceGB.replace('Eur', '$').replace(',', '.');
console.log(priceUS);

const announcement = 'All passengers come to brading door 23. Boarding door 23!'

console.log(announcement.replaceAll('door', 'gate'));
console.log(announcement.replaceAll('door', 'gate'));
console.log(announcement.replace(/door/g, 'gate'));

// Booleans
const plane = 'A320neo';
console.log(plane.includes('A320'));
console.log(plane.includes('Boeing'));
console.log(plane.includes('Air'));

if (plane.startsWith('Airbus') && plane.endsWith('neo')) {
  console.log('Part of the NEW Airbus family');
}

// Practice exercise
const checkBaggage = function (items) {
  const baggage = items.toLowerCase();
  if (baggage.includes('knife') || baggage.includes('gun')) {
    console.log('You are not allowed');
  } else {
    console.log('Welcome');
  }
}

checkBaggage('I have a laptop, some Food and a Pocket Knife');
checkBaggage('Socks and camera');
checkBaggage('Got some snacks and a gun for protection');


// split and join
const [firstName, lastName] = 'Nikita Romanov'.split(' ');
console.log(firstName, lastName);


const newName = ['Mr.', firstName, lastName.toUpperCase()].join(' ');
console.log(newName);

// const capitalizeName = function (name) {
//   let newName = name.split(' ');
//   let newArr = newName.forEach((word) => word + '1');
//   console.log(newArr);
// }
// console.log(capitalizeName('nikita romanov'));

const n = ['nikita', 'romanov'].forEach(function(item) {return item[0].toUpperCase()});
console.log(n);