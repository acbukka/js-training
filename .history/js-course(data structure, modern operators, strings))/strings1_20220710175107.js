'use strict';

const airline = 'TAP Air Portugal';
const plane = 'A320';
console.log(airline.indexOf('r'));
console.log(airline.lastIndexOf('r'));
console.log(airline.indexOf('portugal'));

console.log(airline.slice(4));
console.log(airline.slice(4, 7));

console.log(airline.slice(0, airline.indexOf(' ')));
console.log(airline.slice(0, airline.lastIndexOf(' ')));

const checkMiddleSeat = function (seat) { }

checkMiddleSeat('11B');