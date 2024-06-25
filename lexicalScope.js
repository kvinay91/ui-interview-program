function outer() {
  var x = 1;

  function inner() {
    if (true) {
      console.log(`printing of x ${x}`);
    }
    function innerMost() {
      var y = 2;
      if (true) {
        console.log(`printing y of innermost ${y}`);
        console.log(`printing x of inner ${x}`);
      }
    }
    innerMost();
  }
  outside(); // calling then getting error
  inner();
}

function outside() {
  console.log("I am outside");
  console.log(`printng x value of ${x}`);
}
outer();
