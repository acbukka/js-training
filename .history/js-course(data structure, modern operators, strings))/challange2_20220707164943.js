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
for (const [i, player] of game.scored.entries()) {
  console.log(`Goal ${i + 1}: ${player}`);
}

// 2)
const odds = Object.values(game.odds);
let avarageOdd = 0;
for (const value of odds) avarageOdd += value;
avarageOdd /= odds.length;
console.log(avarageOdd);

// 3)
for (const [name, value] of Object.entries(game.odds)) {
  const teamStr = 
  console.log(`Odd of ${}: ${value}`);
  // name === 'x' ?
  //   console.log(`Odd of draw: ${value}`) :
  //   console.log(`Odd of victory ${game[name]}: ${value}`);
  // if (name === 'x') {
  //   console.log(`Odd of draw: ${value}`);
  // } else {
  //   console.log(`Odd of victory ${game[name]}: ${value}`);
  // }
}

// BONUS
const scorers = {}
for (const name of Object.values(game.scored)) {
  scorers?.[name] ? scorers[name] += 1 : scorers[name] = 1;
}
console.log(scorers);
