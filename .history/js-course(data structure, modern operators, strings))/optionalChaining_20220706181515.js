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

// if (restaurant.openingHours &&
  // restaurant.openingHours.mon) console.log(restaurant.openingHours.mon.open);

// WITH optional chaining
console.log(restaurant.openingHours.mon?.open);
console.log(restaurant.openingHours?.mon?.open);


// Example
const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
for (const day of days) {
  const open = (restaurant.openingHours[day]?.open || 10) + ':00';
  console.log(`On ${day}, we open at ${open}`);
}
