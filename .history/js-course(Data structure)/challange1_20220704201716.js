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
const [players1, players2] = game.players;
// console.log(players1, players2);
// 2)
// console.log(...players1);
const [gk, ...fieldPlayers] = players1;
// console.log(gk, fieldPlayers);
// 3)
const allPlayers = [...players1, ...players2];
// console.log(allPlayers);
// 4)
const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
// console.log(players1Final);
// 5)
const { team1, x: draw, team2 } = game.odds;
// console.log(team1, draw, team2);
// 6)
function printGoals(...players) {
  console.log(`${players} hove scored ${players.length} goals`);
}
// printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
// 7)
const [winnerOne, winnerTwo] = [team1 > team2, team2 < team1];
const winner = winnerOne || winnerTwo;
console.log(`in this game, the winner is ${winner}`);
// console.log(game.odds.team1);


