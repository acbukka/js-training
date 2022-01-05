'use strict';


function reverseInt(num) {
  if (num.toString().length > 0) {
    return num.toString()[3] + num.toString()[2];
  }
}
console.log(reverseInt(1234));

// возвращаем номер в обратном порядке:
function reverseInt(num) {
  let x = num.toString().length;
  let revInt = "";
  while (x > 0) {
    revInt = revInt + num.toString()[x - 1];
    x--;
  }
  return revInt;
}
console.log(reverseInt(95034));


// Короткая запись: ~
// function reverseInt(num) {
//   if (num.toString().length > 0) {

//   }
// }
// console.log(reverseInt(152514));





// convert a number(from 0 to 999 to a readable number):

// module.exports = function toReadable(number) {
//   switch (number){
//     case 0: return 'zero';
//     case 1: return 'one';
//     case 2: return 'two';
//     case 3: return 'three';
//     case 4: return 'four';
//     case 5: return 'five';
//     case 6: return 'six';
//     case 7: return 'seven';
//     case 8: return 'eight';
//     case 9: return 'nine';
    
//   }
// };



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

// const MarkMass = 78;
// const MarkHeight = 1.69;
// const JohnMass = 92;
// const JohnHeight = 1.95;

// const MarkBMI = MarkMass / (MarkHeight ** 2);
// const JohnBMI = JohnMass / (JohnHeight ** 2);
// const MarkHigherBMI = MarkBMI > JohnBMI;
// console.log(MarkBMI, JohnBMI);
// if (MarkBMI > JohnBMI) {
//   console.log(`Mark's BMI (${MarkBMI}) is higher than John's (${JohnBMI})`);
// } else {
//   console.log(`John's BMI (${MarkBMI}) is higher than Mark's (${JohnBMI})`);
// }

// конвертация типов и присвоение типов, как это работает:

// type convercion
// const inputYear = '1991';
// console.log(Number(inputYear));
// console.log(Number(inputYear) + 18);

// console.log(Number('Jonas'));
// console.log(typeof NaN);

// console.log(String(23));

// // type coercion
// console.log('I am ' + 23 + ' years old');
// console.log('23' - '10' - 3);
// console.log('23' * '2');

// let n = '1' + 1; // '11'
// n = n - 1;
// console.log(n);

// console.log(Boolean(0));
// console.log(Boolean(''));
// console.log(Boolean(undefined));
// console.log(Boolean(null));
// console.log(Boolean({}));

// const money = 0;
// if (money) {
//   console.log("Don't spend it all ;)");
// } else {
//   console.log("You should get a job!");
// }

// let height = 0;
// if (height) {
//   console.log('YAY! Height is defined!');
// } else {
//   console.log('Height is UNDEFINED');
// }

// const age = '18';
// if (age === 18) console.log('You just became an adult :D (strict)');

// if (age == 18) console.log('You just became an adult :D (loose)');

// const favourite = Number(prompt("What's your favorite number?"));
// console.log(favourite);
// console.log(typeof favourite);

// if (favourite === 23) {
//   console.log('Cool! 23 is an amazing number!');
// } else if (favourite === 7) {
//   console.log('7 is also a cool number');
// } else if (favourite === 9) {
//   console.log('9 is also a cool number');
// } else {
//   console.log('Number is not 23 or 7 or 9');
// }

// if (favourite !== 23) console.log('Why not 23?');


// const age = 15;
// const isOldEnough = age >= 18;

// if (isOldEnough) {
//   console.log('Sarah can start driving license');
// } else {
//   const yearLeft = 18 - age;
//   console.log(`Sarah is too young, wait another ${yearLeft} years :)`);
// }

// const hasDriverLicense = true; // A
// const hasGoodVision = true; // B

// console.log(hasDriverLicense && hasGoodVision);
// console.log(hasDriverLicense || hasGoodVision);
// console.log(!hasDriverLicense);

// const shoulDrive = hasDriverLicense && hasGoodVision;

// if (shoulDrive) {
//   console.log('Sarah is able to drive!');
// } else {
//   console.log('Someone else should drive...');
// }

// const isTired =  false; // C
// console.log(hasDriverLicense && hasGoodVision && isTired);


// if (hasDriverLicense && hasGoodVision && !isTired) {
//   console.log('Sarah is able to drive!');
// } else {
//   console.log('Someone else should drive...');
// }






  // testData:

// const DolphinsScoresOne = 96;
// const DolphinsScoresTwo = 108;
// const DolphinsScoresThree = 89;

// const KoalasScoresOne = 88;
// const KoalasScoresTwo = 91;
// const KoalasScoresThree = 110;

// Bonus 1
// const DolphinsScoresOne = 97;
// const DolphinsScoresTwo = 112;
// const DolphinsScoresThree = 101;

// const KoalasScoresOne = 109;
// const KoalasScoresTwo = 95;
// const KoalasScoresThree = 123;


  //solution:

// const DolphinScore = (200 + 60 + 60) / 3;
// const KoalasScore = (60 + 200 + 60) / 3;

// const MinimumScore = 100;

// console.log(DolphinScore, KoalasScore);

// if (DolphinScore > KoalasScore && DolphinScore >= MinimumScore) {
//   console.log('Dolphins are winner!');
// } else if (KoalasScore > DolphinScore && KoalasScore >= MinimumScore) {
//   console.log('Koalas are winner!');
// } else if (DolphinScore === KoalasScore && KoalasScore >= MinimumScore && DolphinScore >= MinimumScore) {
//   console.log("Both win the trophy!");
// } else {
//   console.log("There's no winners :(");
// }


// with switch statement:

// const day = 'wednesday';

// switch (day) {
//   case 'monday': // day === 'monday'
//     console.log('Plan course structure');
//     console.log('Go to coding meetup');
//     break;
//   case 'tuesday':
//     console.log('Prepare theory videos');
//     break;
//   case 'wednesday':
//   case 'thursday':
//     console.log('Write code examples');
//     break;
//   case 'friday':
//     console.log('record videos');
//     break;
//   case 'saturday':
//   case 'sunday':
//     console.log('Enjoy the weekend :D');
//     break;
//   default:
//     console.log('Not a valid day!');
// }


// with if/else statements:

// const day = 'monday';

// if (day === 'monday') {
//   console.log('Plan course structure');
//   console.log('Go to coding meetup');
// } else if (day === 'tuesday') {
//   console.log('Prepare theory videos');
// } else if (day === 'wednesday' || day === 'thursday') {
//   console.log('Write code examples');
// } else if (day === 'friday') {
//   console.log('record videos');
// } else if (day === 'saturday' || day === 'sunday') {
//   console.log('Enjoy the weekend :D');
// } else {
//   console.log('Not a valid day!');
// }


// const age = 23;

// const drink = age >= 18 ? 'wine' : 'water';
// console.log(drink);

// let drink2;
// if (age >= 18) {
//   drink2 = 'wine';
// } else {
//   drink2 = 'water';
// }

// console.log(drink2);

// console.log(`I like to drink ${age >= 18 ? 'wine' : 'water'}`);

// A little tip calculator:

// const billValue = 430;

// let tip = billValue >= 50 && billValue <= 300 ? billValue * 0.15 : billValue * 0.2;
// console.log(`Bill value is: ${billValue}, the tip was: ${tip}, and the total value: ${billValue + tip}`);

// function logger() {
//   console.log('My name is Jonas');
// }

// calling / running / invoking function:
// logger();
// logger();
// logger();


// function fruitProcessor(apples, oranges) {
//   const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
//   return juice;
// }


// const appleJuice = fruitProcessor(5, 0);
// console.log(appleJuice);
// // тут мы задали аргументы для функции (5, 0), которые вставли на позиции apple и oranges соответсвенно,
// // затем, оператор return в функции возвращает значение переменной самой функции (fruitProcessor) и затем,
// // чтобы увидеть этот результат нам необходимо получить это значение в переменную (appleJuice), мы могли увидеть
// // результат и без переменной, используя console.log(fruitProcessor(5, 0)).

// const appleOrangeJuice = fruitProcessor(2, 4);
// console.log(appleOrangeJuice);


// возвращаем факториал:

// function factorial(num) {
//   var x = num;
//   while (x > 1) {
//     num *= x-1;
//     x--;
//   }
//   return num;
// }

// const numValue = factorial(5);
// console.log(numValue);



// function declaration:
// function calcAge1(birthYear) {
//   return 2037 - birthYear;
// }
// const age1 = calcAge1(1991);


// // function expression:
// const calcAge2 = function (birthYear) {
//   return 2037 - birthYear;
// };

// const age2 = calcAge2(1991);
// console.log(age1, age2);



// Arrow functions:
// const calcAge3 = birthYear => 2037 - birthYear;
// const age3 = calcAge3(1991);
// console.log(age3);


// const yearsUntilRetirement = (birthYear, firstName) => {
//   const age = 2037 - birthYear;
//   const retirement = 65 - age;
//   return `${firstName} retires in ${retirement} years`;
// };

// console.log(yearsUntilRetirement(1991, 'Jonas'));
// console.log(yearsUntilRetirement(1980, 'Bob'));



// function cutFruitPieces(fruit) {
//   return fruit * 4;
// }



  // functions calling in fuction:
// function fruitProcessor(apples, oranges) {

//   const applePieces = cutFruitPieces(apples);
//   const orangePieces = cutFruitPieces(oranges);
  
//   const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange.`;
//   return juice;
// }

// console.log(fruitProcessor(2, 3));


const calcAge3 = birthYear => 2037 - birthYear;
const age3 = calcAge3(1991);
console.log(age3);



const calcAge = function (birthYear) {
  return 2037 - birthYear;
};

const yearsUntilRetirement = function (birthYear, firstName) {
  const age = calcAge(birthYear);
  const retirement = 65 - age;

  if (retirement > 0) {
    console.log(`${firstName} retires in ${retirement} years`);
    return retirement;
  } else {
    console.log(`${firstName} has already retired`);
    return -1;
  }
};

console.log(yearsUntilRetirement(1991, 'Jonas'));


// const dolphinsScore = 44 + 23 + 71;
// const koalasScore = 65 + 54 + 49;

// 1:
const calcAverage = (firstScore, secondScore, thirdScore) => (firstScore + secondScore + thirdScore) / 3;

// 2:
const avgDolphins = calcAverage(44, 23, 71);
const avgKoalas = calcAverage(65, 54, 49);

const avgDolphins2 = calcAverage(85, 54, 41);
const avgKoalas2 = calcAverage(23, 34, 27);

// 3:
const checkWinner = function (avgDolphins, avgKoalas) {
  if (avgDolphins > avgKoalas) {
    console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
  } else {
    console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
  }
}; 
checkWinner(avgDolphins, avgKoalas);

// 4:
checkWinner(avgDolphins2, avgKoalas2);









// проверям на правдивость окончание слова, используя slice:
function solution(str, ending){
  return str.slice(-ending.length) === ending || ending === '' ? true : false;
}
console.log(solution('zombie', ''));


// убираем пробелы из строки с помощью slice:
function noSpace(x){
  return x.replace(/ /g, '');
}
console.log(noSpace("hbhhjbjhb   jhjhjbhbb  jjhjj"));




// опеределяем длину введенного числа:
function digits(num) {
  return num.toString().length;
}
console.log(digits(777777));




// создаем fakeBin, заменяя все что 5 и больше на 1, а что меньше 5 на 0
function fakeBin(num) {
  return num.replace(/[0-4]/g, "0").replace(/[5-9]/g, "1");
}
const fBin = fakeBin('55665522');
console.log(fBin);



// создаем аббревиатуру имени, с использованием split (выделяя сначала слово в массиве а затем порядковый номер буквы)
function abbrevName(name) {
   return name.split(" ")[0][0].toUpperCase() + '.' + name.split(" ")[1][0].toUpperCase();
}
console.log(abbrevName('Sam Harris'));




function cookingTime(eggs) {
  const maxEggs = 8;
  if (eggs == 0) {
    return 0;
  } else {
    return Math.round(eggs / maxEggs) * 5;
  }
}