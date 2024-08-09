// () => {};
// function sayHi() {} // regular function

// ---------- separator ---------- //

function sum(a, b) {
  console.log(a, b);
  let result = 0;
  result = a + b;
  return result;
}

const sum = function () {
  console.log("regular func");
};
sum();

// const sum = (a, b) => a + b;
