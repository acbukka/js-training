let arr = ['a', 2, '5', { 1: '2', 3: '4' }];

Array.prototype.myFilter = function (callback) {
  let res = [];
  for (let i = 0; i < this.length; i += 1) {
    if (callback(this[i])) {
      console.log();
      res.push(this[i])
    }
  }
  return res;
}
// console.log(arr.myFilter());
// тут аргумент стал функцией тк мы передали функцию в качестве аргумента и собсна вернули только те что true:
// console.log(arr.myFilter((it) => typeof it !== 'string'));

let arr2 = ['a', 2, '5'];
// теперь мы задали новый метод с помощью prototype и можем использовать его в любых Array
console.log(arr2.myFilter((it) => typeof it !== 'number'));

let funcExp = function () {
  return '1';
}
console.log(funcExp());
