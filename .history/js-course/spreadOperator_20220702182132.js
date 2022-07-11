'use strict'

const restaurant = {
  name: 'Classico Italiano',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
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
  },

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 1,
    time = '20:00',
    address
  }) {
    console.log(`Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delievered to ${address} at ${time}`);
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(`Here is your delecious pasta with ${ing1}, ${ing2} and ${ing3}`);
  }
}


const arr = [7, 8, 9];

// we can do this
const badNewArr = [1, 2, arr[0], arr[1], arr[2]]
console.log(badNewArr);

// but better use this
const newArr = [1, 2, ...arr]
console.log(newArr);
// spread operator gets elements individually
console.log(...newArr);


const newMenu = [...restaurant.mainMenu, 'Gnocci']
console.log(newMenu);

const mainMenuCopy = [...restaurant.mainMenu];

const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menu);

// Iterables: arrays, strings, maps, sets. NOT objects
const str = 'Jonas';
const letters = [...str, ' ', 'S.']
console.log(letters);
// but this is not will work
// console.log(`${...str}`);


// more real case, how we put this arguments with spread operator
// const ingredients = [
//   prompt('Let\s make pasta! Ingredient 1?'),
//   prompt('Ingredient 2?'),
//   prompt('Ingridient 3?')
// ];
// console.log(ingredients);
// restaurant.orderPasta(...ingredients);

// Also works with Objects
const newRestaurant = { foundedIn: 1998, ...restaurant, founder: 'Guiseppe' }
console.log(newRestaurant);

// 
const restaurantCopy = { ...restaurant };
restaurantCopy.name = 'Ristorante Roma'
console.log(restaurantCopy.name);
console.log(restaurant.name);