function makeAdder(x) {
  var sum = x || 0;
  return function (y) {
    return (sum += y);
  };
}

var adder = makeAdder(10);
console.log(adder(2)); // 12
console.log(adder(4)); // 16
console.log(adder(10)); // 26
