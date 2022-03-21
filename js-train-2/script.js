'use strict';

// npm run test -- test/transform-array.test.js

/* Нам нужно вывести амплитуду температур, мы визуально уже видим что это 23 (16 - (-7)) , для того чтобы вывести это 
из функции, нужно понять как найти самое отрицательное и самое положительное число и провести вычисление*/
// function amplitude(arr) {
//   let filtered = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (typeof arr[i] == 'number') {
//       filtered.push(arr[i]);
//     }
//   }
//   let newStr = '';
//   newStr += Math.min.apply(Math, filtered) + ' - ';
//   newStr += Math.max.apply(Math, filtered);
//   return newStr;
// }
// const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];
// console.log(amplitude(temperatures));

// // solution 2
// function amplitude(temps) {
//   let max = temps[0];
//   let min = temps[0];
//   for (let i = 0; i < temps.length; i++) {
//     const curTemp = temps[i];
//     if (typeof curTemp !== 'number') continue;
//     if (curTemp > max) max = curTemp;
//     if (curTemp < min) min = curTemp;
//   }
//   console.log(max, min);
//   return max - min;
// }
// const temps = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];
// console.log(amplitude(temps));

// // POBLEM 2:
// // Function should now recieve 2 arrays of temps
// // Для начала нужно понять, следует ли нам вычислять амплитуду у каждой из двух массивов, или соединить их в одну
// /* В данном случае нужно просто их соединить и вычислить по предыдущему алгоритму*/
// function amplitudeNew(t1, t2) {
//   let temps = t1.concat(t2);
//   let max = temps[0];
//   let min = temps[0];
//   console.log(temps);
//   for (let i = 0; i < temps.length; i++) {
//     const curTemp = temps[i];
//     if (typeof curTemp !== 'number') continue;
//     if (curTemp > max) max = curTemp;
//     if (curTemp < min) min = curTemp;
//   }

//   console.log(max, min);
//   return max - min;
// }
// const tempos = amplitudeNew([3, 5, 1], [9, 0, 5]);
// console.log(tempos);

// const measureKelvin = function () {
//   const measurement = {
//     type: 'temp',
//     unit: 'cels',
//     value: Number(prompt('Degrees calsius:')),
//   };
//   console.log(measurement);
//   console.log(measurement.value);
//   const kelvin = measurement.value + 273;
//   return kelvin;
// };
// console.log(measureKelvin());

// выводим температуры по дням из массива температур:
// const printForecast = function (arr) {
//   let newStr = '... ';
//   for (let i = 0; i < arr.length; i++) {
//     newStr += `${arr[i]}°C in ${i + 1} days ` + '... ';
//   }
//   return newStr;
// };
// console.log(printForecast([17, 21, 23]));
