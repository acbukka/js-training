const transformArray = function (arr) {
  // arr = arr.reduce((a, b) => a.concat(b));
  // console.log(arr);
  // if (arr.map(item => typeof ))
  // let newArr = arr;
  let newArr = arr.slice();
  if (newArr instanceof Array === false) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }
  for (let i = 0; i < newArr.length; i++) {
    if (newArr[i] === "--discard-next" && typeof newArr[i + 1] === "number") {
      newArr.splice(i + 1, 1);
    }
    if (newArr[i] === "--discard-prev" && i !== 0) {
      newArr.splice(i - 1, 1);
    }
    if (newArr[i] === "--double-next" && typeof newArr[i + 1] === "number") {
      newArr.splice(i, 1, newArr[i + 1]);
    }
    if (newArr[i] === "--double-prev" && i !== 0) {
      newArr.splice(i, 1, newArr[i - 1]);
    }
  }
  // for (let i = 0; i < arr.length; i++) {}
  newArr = newArr.filter(
    (item) =>
      item !== "--double-prev" &&
      item !== "--double-next" &&
      item !== "--discard-prev" &&
      item !== "--discard-next" &&
      item !== undefined
  );
  return newArr;
};
console.log(transformArray(["--discard-prev", 1, 2, 3]));
console.log(
  transformArray([
    ["--discard-prev", 1, 2, 3],
    ["--double-prev", 1, 2, 3],
    [1, 2, 3, "--double-next"],
    [1, 2, 3, "--discard-next"],
  ])
);
console.log(transformArray(3.312312));
console.log(
  transformArray([1, 2, 3, "--discard-next", 1337, "--discard-prev", 4, 5])
);
console.log(
  transformArray([1, 2, 3, "--double-next", 1337, "--discard-prev", 4, 5])
);
console.log(transformArray(["--double-next", true]));
