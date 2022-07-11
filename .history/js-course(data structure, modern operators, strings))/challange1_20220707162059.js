'use strict'

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
  [
  'Neuer',
  'Pavard',
  'Martinez',
  'Alaba',
  'Davies',
  'Kimmich',
  'Goretzka',
  'Coman',
  'Muller',
  'Gnarby',
  'Lewandowski',
  ],
  [
  'Burki',
  'Schulz',
  'Hummels',
  'Akanji',
  'Hakimi',
  'Weigl',
  'Witsel',
  'Hazard',
  'Brandt',
  'Sancho',
  'Gotze',
  ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski',
  'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
  // winner: 'Team 1' && this.odds.team1 > this.odds.team2 || 'Team 2' && this.odds.team2 > this.odds.team1,
};

// 1)
let scoreValues = Object.values(game.scored);
for (let i = 0; i < scoreValues.length; i += 1) {
  console.log(`Goal ${i + 1}: ${scoreValues[i]}`);
}
// 2)
let avarageOdd = 0;
for (const value of Object.values(game.odds)) {
  avarageOdd += value;
}
avarageOdd = avarageOdd / Object.values(game.odds).length;
console.log(avarageOdd);
// 3)
console.log(Object.entries(game.odds));
for (const [name, value] of Object.entries(game.odds)) {
  if (name === 'x') {
    console.log(`Odd of draw: ${value}`);
  } else {
    console.log(`Odd of victory ${game[name]}: ${value}`);
  }
}

// BONUS
const scorers = {}
// for (const name of Object.values(game.scored)) {
//   if (scorers?.[name]) {
//     scorers[name] += 1;
//   } else {
//     scorers[name] = 1;
//   }
// }
// console.log(scorers);
console.log(game?.scored);