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


const gameEvents = new Map([
  [17, '⚽ GOAL'],
  [36, 'Substitution'],
  [47, '⚽ GOAL'],
  [61, 'Substitution'],
  [64, 'Yellow card'],
  [69, 'Red card'],
  [70, 'Substitution'],
  [72, 'Substitution'],
  [76, '⚽ GOAL'],
  [80, '⚽ GOAL'],
  [92, 'Yellow card'],
]);
  
// console.log(gameEvents);
// console.log(new Set(gameEvents.values()));
// 1)
const events = [...new Set(gameEvents.values())];
console.log(events);
// 2)
gameEvents.delete(64);
// console.log(gameEvents);
// 3)
const gameTime = 90;
const gameEventsSize = gameEvents.size;
console.log(`An event happened, on avarage, every ${gameTime / gameEventsSize} minutes`);
// 4)
for (const events of gameEvents) {
  const gameMinute = events[0];
  gameMinute = gameMinute < 45 ? '[FIRST HALF]' : '[SECOND HALF]';
  console.log(gameMinute);
  // console.log(events[0]);
}
