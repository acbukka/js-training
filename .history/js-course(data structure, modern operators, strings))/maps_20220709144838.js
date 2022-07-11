'use strict'

const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays[5]]: {
    open: 0, // open 24 hours
    close: 24,
  },
};

const restaurant = {
  name: 'Classico Italiano',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  // ES6 enhanced object literals
  openingHours,
  // ES6 enhanced object literals (second feature, i can remove function declaration)
  order (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  // ES6 enhanced object literals (second feature, i can remove function declaration)
  orderDelivery ({
    starterIndex = 1,
    mainIndex = 1,
    time = '20:00',
    address
  }) {
    console.log(`Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delievered to ${address} at ${time}`);
  },
  // ES6 enhanced object literals (second feature, i can remove function declaration)
  orderPasta (ing1, ing2, ing3) {
    console.log(`Here is your delecious pasta with ${ing1}, ${ing2} and ${ing3}`);
  },
  // ES6 enhanced object literals (second feature, i can remove function declaration)
  orderPizza (mainIngredient, ...otherIngridients) {
    console.log(mainIngredient);
    console.log(otherIngridients);
  }
};

const rest = new Map();
rest.set('name', 'Classico Italiano');
rest.set(1, 'Firenze, Italy');
// set not only SET value to the map, but also return all map after
console.log(rest.set(2, 'Lisbon, Portugal'));

rest
  .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
  .set('open', 11)
  .set('close', 23)
  .set(true, 'We are open ^^')
  .set(false, 'We are close :(')


console.log(rest.get('name'));
console.log(rest.get(true));
console.log(rest.get(1));

const time = 21;
const isOpen = rest.get(time > rest.get('open') && time < rest.get('close'));
console.log(isOpen);

console.log(rest.has('categories'));
rest.delete(2)
// rest.clear();
rest.set([1, 2], 'Test');
console.log(rest);
console.log(rest.size);
// but in this case, it will not see this object, couse now it have other adress
console.log(rest.get([1, 2]));
// to fix that, do this
const arr = [1, 3];
rest.set(arr, 'Test1');
console.log(rest.get(arr));
// we can also add DOM elements
// rest.set(document.querySelector('h1'), 'Heading');

// Maps iteration
const question = new Map([
  ['question', 'What is the best programming language in the world?'],
  [1, 'C'],
  [2, 'Java'],
  [3, 'JavaScript'],
  ['correct', 3],
  [true, 'Correct :)'],
  [false, 'Try again!'],
]);

console.log(question);

// convert object to map
console.log(Object.entries(openingHours));
const hoursMap = new Map(Object.entries(openingHours));
console.log(hoursMap);

// Quiz app
console.log(question.get('question'));
for (const [key, value] of question) {
  if (typeof key === 'number') console.log(`Answer ${key}: ${value}`);
  // console.log();
}

const answer = Number(prompt('Your answer'));

