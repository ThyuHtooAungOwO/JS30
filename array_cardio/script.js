const inventors = [
  { first: "Albert", last: "Einstein", year: 1879, passed: 1955 },
  { first: "Isaac", last: "Newton", year: 1643, passed: 1727 },
  { first: "Galileo", last: "Galilei", year: 1564, passed: 1642 },
  { first: "Marie", last: "Curie", year: 1867, passed: 1934 },
  { first: "Johannes", last: "Kepler", year: 1571, passed: 1630 },
  { first: "Nicolaus", last: "Copernicus", year: 1473, passed: 1543 },
  { first: "Max", last: "Planck", year: 1858, passed: 1947 },
  { first: "Katherine", last: "Blodgett", year: 1898, passed: 1979 },
  { first: "Ada", last: "Lovelace", year: 1815, passed: 1852 },
  { first: "Sarah E.", last: "Goode", year: 1855, passed: 1905 },
  { first: "Lise", last: "Meitner", year: 1878, passed: 1968 },
  { first: "Hanna", last: "Hammarström", year: 1829, passed: 1909 },
];

const people = [
  "Bernhard, Sandra",
  "Bethea, Erin",
  "Becker, Carl",
  "Bentsen, Lloyd",
  "Beckett, Samuel",
  "Blake, William",
  "Berger, Ric",
  "Beddoes, Mick",
  "Beethoven, Ludwig",
  "Belloc, Hilaire",
  "Begin, Menachem",
  "Bellow, Saul",
  "Benchley, Robert",
  "Blair, Tony",
  "Beecher, Henry",
  "Biondo, Frank",
  "Berle, Milton",
  "Benenson, Peter",
  "Biden, Joseph",
  "Ben-Gurion, David",
  "Birrell, Augustine",
  "Brando, Marlon",
  "Bardot, Brigitte",
  "Breslin, Jimmy",
  "Brooks, Mel",
  "Brooke, Rupert",
  "Bunyan, John",
  "Burns, Robert",
  "Burr, Aaron",
  "Bush, George",
  "Bush, George W.",
  "Gere, Richard",
  "Griffith, Andy",
  "Griffin, Merv",
  "Grimes, William",
  "Grimm, Jacob",
  "Grimm, Wilhelm",
  "Galifianakis, Zach",
  "Galsworthy, John",
  "Gandhi, Indira",
  "Gandhi, Mahatma",
  "Gable, Clark",
  "Grant, Cary",
  "Gore, Al",
  "Gonzalez, Speedy",
];

const data = [
  "car",
  "car",
  "truck",
  "truck",
  "bike",
  "walk",
  "car",
  "van",
  "bike",
  "walk",
  "car",
  "van",
  "car",
  "truck",
];

// Array Cardio Day 1
// .filter
// 1. filter the list of inventors for those who were born in the 1500's
const fifteen = inventors.filter(
  (inventor) => inventor.year >= 1500 && inventor.year < 1600
);
console.log(fifteen); // new array of inventors born in the 1500s

// .map
// 2. give us an array of the inventors' first and last names
const fullNames = inventors.map(
  (inventor) => `First Name: ${inventor.first}, Last Name: ${inventor.last}`
);
console.table(fullNames); // new array of full names of inventors

// .sort
// 3. sort the inventors by birthdate, oldest to youngest
const ordered = inventors.sort((a, b) => a.year - b.year);
console.table(ordered); // sorted array of inventors by birthdate

// .reduce
// 4. how many years did all the inventors live?
const totalYears = inventors.reduce(
  (total, inventor) => total + (inventor.passed - inventor.year),
  0
);
console.log(totalYears);

// 5. sort the inventor by years lived
const sortedByYears = inventors.sort(
  (a, b) => b.passed - b.year - (a.passed - a.year)
);
console.table(sortedByYears); // sorted array of inventors by years lived

// 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
const peopleWithDe = people.filter((person) => person.includes("de"));
console.log(peopleWithDe); // new array of people with 'de' in their names

// 7. sort the people alphabetically by last name
const alpha = people.sort((a, b) => {
  const [lastA, firstA] = a.split(", ");
  const [lastB, firstB] = b.split(", ");
  return lastA > lastB ? 1 : -1;
});
console.table(alpha); // sorted array of people by last name

// 8. sum up the instances of each transportation method
const transportationCount = data.reduce((acc, item) => {
  acc[item] = (acc[item] || 0) + 1;
  return acc;
}, {});
console.log(transportationCount); // object with counts of each transportation method
