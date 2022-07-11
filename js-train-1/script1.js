/* first */
const cities = (arr) => {
  return arr.join(', ') + '.'
}
let arr = ['Москва', 'Санкт-Петербург', 'Воронеж']
// (Решение: ~ 20 секунд)

/* second */
const floor = (num) => {
  return Math.round(num/5) * 5
}
let num = 27.8;
// (Решение: 4 минуты)

/* third */
const thisCase = (num) => {
  let newNum = num.toString().split('');
  let phrase = "компьютер"
  newNum = Number(newNum[newNum.length - 1])
  if (newNum < 2) {
    return `${num + ' ' + phrase}`
  } else if (newNum >= 2 && newNum < 5) {
    return `${num + ' ' + phrase + 'а'}`
  } else {
    return `${num + ' ' + phrase + 'ов'}`
  }
}
// (Решение: ~ 6 мин)

/* four */
const isPrime = (num) => {
  if (num <= 1) {
    return false;
  } else if (num < 4) {
    return true;
  } else if (num % 2 == 0 || num % 3 == 0) {
    return false;
  }
  for (let i = 5, N = Math.sqrt(num); i <= N; i += 2) {
    if (num % i == 0) return false;
  }
  return true;
}
// (Решение: ~ 15 мин)

/* five */
const doublesInArr = (...args) => {
  let count = [];
  for (let i = 0; i < args.length; i += 1) {
    let doubles = args[i].filter((item, index) => args[i].indexOf(item) !== index)
    count.push(doubles);
    continue;
  }
  
  for (let i = 0; i < count.length; i += 1) {
    let newCount = count[i].filter((item) => {
      let numberOfCounters = 0;
      for (let p = 1; p < count.length; p += 1) {
        if (count[p].includes(item)) {
          numberOfCounters++;
        }
        if (numberOfCounters === count.length - 1) {
          return item;
        }
      }
    })
    return newCount;
  }
}
// (Решение: ~ 45 минут)
