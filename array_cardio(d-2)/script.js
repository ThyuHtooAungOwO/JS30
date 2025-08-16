const people = [
  { name: "Wes", year: 1988 },
  { name: "Kait", year: 1986 },
  { name: "Irv", year: 1970 },
  { name: "Lux", year: 2015 },
];

const comments = [
  { text: "Love this!", id: 12345 },
  { text: "Super good", id: 54321 },
  { text: "You are the best", id: 19876 },
  { text: "Ramen is my fav food ever", id: 98765 },
  { text: "Nice blog post", id: 67890 },
  { text: "10/10 would read again", id: 13579 },
];

// 1. Some and Every Checks
// Array.prototype.some() // is at least one person 19 or older?
const isAdult = people.some((person) => {
  const currentYear = new Date().getFullYear();
  return currentYear - person.year >= 18;
});
console.log(isAdult); // true

// 2. Array.prototype.every() // is everyone 19 or older?
const AllAdults = people.every((person) => {
  const currentYear = new Date().getFullYear();
  return currentYear - person.year >= 18;
});
console.log(AllAdults); // false

// 3. Array.prototype.find() // find the comment with the ID of 54321
const comment = comments.find((comment) => comment.id === 54321);
console.log(comment); // { text: "Super good", id: 54321 }

// 4. Array.prototype.findIndex() // find the comment with this ID and delete it
const index = comments.findIndex((comment) => comment.id === 54321);
comments.splice(index, 1);
console.table(comments); // Remaining comments after deletion (mutates the original array)

const newComments = [...comments.slice(0, index), ...comments.slice(index + 1)];
console.table(newComments); // Alternative way to delete the comment without mutating the original array
