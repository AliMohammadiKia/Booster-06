const names = [
  "ali",
  "sahar",
  "fateme",
  "niloufar",
  "mobina",
  "fat",
  "mahsa",
  "faeze",
];

// names.forEach((name) => {
//   console.log(name);
// });

// const newNames = names.forEach((name) => {
//   console.log(name);
//   return "new " + name;
// });
// console.log(newNames);

// ---------- separator ---------- //

// const newNames = names.map((name) => {
//   console.log(name);
//   return "new " + name;
// });
// console.log(newNames);

// ---------- separator ---------- //

// const filteredNames = names.filter((name) => {
//   return name.length > 3;
//   // if (name.length > 3) {
//   //   return name;
//   // }
//   // return name.length > 3 ? name : undefined;
//   // return name.length > 3 && name;
// });
const filteredNames = names.filter((name) => name.length > 3);
console.log(filteredNames);
