
import {greet1} from 'moddemo_mkg'  ;
let age = 25;               // number
const name = "mihika";     // string
var isTrainer = false;       // boolean

const skills = ["Java", "Python", "AI"]; // array
let profile = { name: "Nikhil", role: "Trainer" }; // object

function toFetchData(url, callback) {
  // Simulate an API call
  setTimeout(() => {
    const data = { userId: 1, userName: "Nikhil" };
    callback(data);
    }   ,1000 );
  }

//function definition
function greet(user) {
  return `Hello, ${user}!`;
}

// Function Expression
const add = function(a, b) {
  return a + b;
};

// Arrow Function
const multiply = (x, y) => x * y;

// `this` keyword
const trainer = {
  name: "Rashmi",
  showName: function() {
    console.log(this.name); // refers to trainer object
  }
};
trainer.showName();
// if/else
let score = 85;
if (score > 90) {
  console.log("Excellent");
} else {
  console.log("Keep improving");
}

// switch
let role = "admin";
switch (role) {
  case "admin": console.log("Full access"); break;
  case "user": console.log("Limited access"); break;
  default: console.log("No access");
}

// for loop
for (let i = 0; i < 3; i++) {
  console.log(`Step ${i}`);
}

// while loop
let count = 0;
while (count < 3) {
  console.log(`Count is ${count}`);
  count++;
}

// Object literal
const course = {
  title: "JavaScript Basics",
  duration: "4 weeks"
};

// Destructuring
const { title, duration } = course;
console.log(title, duration);


// Spread operator
const extendedSkills = [...skills, "DevOps"];



// Array methods
const numbers = [1, 2, 3, 4, 5];

const doubled = numbers.map(n => n * 2);
const evens = numbers.filter(n => n % 2 === 0);
const sum = numbers.reduce((acc, val) => acc + val, 0);

console.log(doubled, evens, sum);
// Callback
function fetchData(callback) {
  setTimeout(() => callback("Data loaded"), 1000);
}

// Promise
const fetchPromise = new Promise((resolve, reject) => {
  setTimeout(() => resolve("Promise resolved"), 1000);
});

// async/await
async function loadData() {
  const result = await fetchPromise;
  console.log(result);
}


console.log(greet1("World"));

