// -------------------------
// Primitives (copied by value)
// -------------------------

let age = 100;
let age2 = age;

console.log(age, age2); // 100, 100
age = 200;
console.log(age, age2); // 200, 100

let name = "Kay";
let name2 = name;

console.log(name, name2); // Kay, Kay
name = "Kizito";
console.log(name, name2); // Kizito, Kay

// -------------------------
// Arrays (copied by reference)
// -------------------------

const players = ["Wes", "Sarah", "Ryan", "Poppy"];

// ❌ This just makes a reference (not a copy)
const team = players;
team[3] = "Lux";

console.log(players); // ['Wes', 'Sarah', 'Ryan', 'Lux']
console.log(team); // same array!

// Correct Ways to actually copy an array:
const team2 = players.slice(); // old-school slice
const team3 = [].concat(players); // concat trick
const team4 = [...players]; // ES6 spread
const team5 = Array.from(players); // Array.from

team4[3] = "Sucrose";
team5[2] = "Salam";

console.log(team4); // ['Wes', 'Sarah', 'Ryan', 'Sucrose']
console.log(team5); // ['Wes', 'Sarah', 'Salam', 'Lux']

// -------------------------
// Objects (copied by reference)
// -------------------------

const person = {
  name: "Wes Bos",
  age: 80,
};

// ❌ Just referencing would cause issues
// ✅ Shallow copies:
const cap2 = Object.assign({}, person, { number: 99, age: 12 });
const cap3 = { ...person };

console.log(cap2); // { name: 'Wes Bos', age: 12, number: 99 }
console.log(cap3); // { name: 'Wes Bos', age: 80 }

// -------------------------
// Nested Objects (still shallow!)
// -------------------------

const kay = {
  name: "Kay",
  age: 85,
  social: {
    twitter: "@kizitoakhilome",
    facebook: "kizitoakhilome",
  },
};

const dev = { ...kay };
console.log(dev);

// ⚠️ Note: This is a shallow copy!
// `dev.social` and `kay.social` still point to the same object.
// For deep copies, consider `structuredClone(obj)` (modern JS)
// or libraries like `lodash.cloneDeep`.
