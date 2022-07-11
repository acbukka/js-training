'use strict'

const weekdays = ['mon', 'tue', 'wed']
const openingHours = {
  thu: {
    open: 12,
    close: 22,
  },
  fri: {
    open: 11,
    close: 23,
  },
  sat: {
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

