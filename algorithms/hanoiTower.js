const hanoiTower = function (disksNumber, turnsSpeed) {
  let obj = {};
  obj.turns = 2 ** disksNumber - 1;
  obj.seconds = Math.floor(obj.turns / (turnsSpeed / 3600));
  return obj;
};
console.log(hanoiTower(9, 4308));
