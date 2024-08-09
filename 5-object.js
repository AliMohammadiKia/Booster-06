const person = {
  firstName: "ali",
  lastName: "mohammadi",
  age: 23,
  laptop: {
    brand: "lenevo",
    cpu: "i5",
    ram: 16,
  },
  favoriteColors: ["orange", "orangered", "black", "white"],
  fullName() {
    return this.firstName + " " + this.lastName;
  },
};

// for (let key in person) {
//   console.log(person[key]);
// }
for (const [key, value] of Object.entries(person)) {
  console.log(key, value);
}

// console.log(person);

// console.log(person.firstName + " " + person.lastName);
// console.log(person.favoriteColors[1]);

// console.log(person["age"]);
// console.log(person.laptop.cpu);

// console.log(person.fullName());

// ---------- separator ---------- //

// nested array
const arr1 = [1, 2, 3, [4, 5, 6]];
console.log(arr1[3]);
console.log(arr1[3][1]);
