function createFunctions(n) {
  var callbacks = [];

  let fanc = function (x) {
    return function () {
      return x;
    };
  };

  for (var i = 0; i < n; i++) {
    callbacks.push(fanc(i));
  }
  console.log(callbacks);
  return callbacks[3];
}
console.log(createFunctions(5));

function createFunctions(n) {
  var callbacks = [];

  for (let i = 0; i < n; i++) {
    callbacks.push(function () {
      return i;
    });
  }

  return callbacks;
}
