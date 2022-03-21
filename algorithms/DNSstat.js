function getDNSStats(domains) {
  let newObj = {};
  for (let i = 0; i < domains.length; i++) {
    let domainArr = domains[i]
      .split(".")
      .reverse()
      .map((item) => "." + item);
    for (let p = 0; p <= domainArr.length + 1; p++) {
      let copyArr = domainArr;
      let newElement = copyArr.join("");
      if (newObj.hasOwnProperty(newElement)) {
        newObj[newElement] = newObj[newElement] + 1;
      } else {
        newObj[newElement] = 1;
      }
      copyArr.pop();
    }
  }
  return Object.keys(newObj)
    .sort()
    .reduce((a, b) => {
      a[b] = newObj[b];
      return a;
    }, {});
  // console.log(newObj);
}
console.log(getDNSStats(["epam.com"]));
console.log(getDNSStats(["code.yandex.ru", "music.yandex.ru", "yandex.ru"]));

console.log("code.yandex.ru".split("."));
