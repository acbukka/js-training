'use strict';

const camelCase = function (str) {
  const [word1, word2] = str.split('_').map((item) => item.toLowerCase());
  const camelWord = word1 + word2[0].toUpperCase() + word2.slice(1);
  return camelWord;
}



// Test data (pasted to textarea, including spaces):
// underscore_case
// first_name
// Some_Variable
//  calculate_AGE
// delayed_departure

console.log(camelCase('underscore_case'));
console.log(camelCase('first_name'));
console.log(camelCase('Some_Variable'));
console.log(camelCase('calculate_AGE'));
console.log(camelCase('delayed_departure'));


// complited