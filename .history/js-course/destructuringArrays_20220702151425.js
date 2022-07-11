'use strict'


const restaurant = {
  name: 'Classico Italiano',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  }
}

const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

const [x, y, z] = arr;
console.log(x, y, z);


let [main, , secondary] = restaurant.categories;
console.log(main, secondary);

// Switching variables
// instead of this 
// const temp = main;
// main = secondary;
// secondary = temp;
// console.log(main, secondary);

// we can simply use this
[main, secondary] = [secondary, main]
console.log(main, secondary);


const [starter, mainCourse] = restaurant.order(2, 0)
console.log(starter, mainCourse);

// nested destructuring
const nested = [2, 4, [5, 6]];
// const [i, , j] = nested;
// console.log(i, j);

// destructuring inside destructoring
const [i, , [j, k]] = nested;
console.log(i, j, k);