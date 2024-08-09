// global scope
let park = "mellat";

// block scope
{
  // var park = "university";
  let park = "university";
  // console.log(park);
}

// console.log(park);
// console.log(park); // ?? not defined

// ---------- separator ---------- //

function sayHi() {
  let user = "ali";
  var pass = "admin1234";
  console.log(user);
}

// console.log(user); // ❌
// console.log(pass); // ❌
// sayHi();

// ---------- separator ---------- //

function func1() {
  let password = "1234";
  // console.log(username); // ❌

  return function func2() {
    let username = "amk01";
    console.log(password);
  };

  // func2();
}

func1()();
