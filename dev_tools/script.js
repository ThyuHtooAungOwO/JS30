const dogs = [
  { name: "Bobby", age: 5 },
  { name: "Max", age: 3 },
];

function makeGreen() {
  const p = document.querySelector("p");

  if (!p.dataset.on) {
    p.style.color = "#BADA55";
    p.style.fontSize = "50px";
    p.dataset.on = "true";
  } else {
    p.style.color = "";
    p.style.fontSize = "";
    delete p.dataset.on;
  }
}

//Clearing
console.clear();

//Regular
console.log("Hello World");

//Interpolated
console.log("Hello %s", "World");
// console.log(`Hello ${"World"}`); //ES6 Template Literal

//Styled
console.log(
  "%c I am some great text",
  "font-size: 70px; background: blue; text-shadow: 10px 10px 0 red"
);

//Warning!
console.warn("Warning!");

//Error :|
console.error("Error!");

//Info
console.info("Info!");

//Testing
console.assert(1 === 2, "That is wrong!"); //Give you an error if the condition is false

//Viewing DOM Elements
const p = document.querySelector("p");
console.log(p);
console.dir(p); //Shows all properties of the element

//Grouping together
dogs.forEach((dog) => {
  console.groupCollapsed(`${dog.name}`);
  console.log(`This is ${dog.name}`);
  console.log(`${dog.name} is ${dog.age} years old`);
  console.groupEnd(`${dog.name}`);
});

//Counting
console.count("Bobby");
console.count("Bobby");
console.count("Max");

//Timing
console.time("fetching data");
fetch("https://api.github.com/users")
  .then((data) => data.json())
  .then((data) => {
    console.timeEnd("fetching data");
    console.log(data);
  })
  .catch((error) => {
    console.error("Error fetching data:", error);
  });
