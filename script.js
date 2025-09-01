// ------------------------------------
//  Part 1: Variables, Data Types, and Conditionals
// ------------------------------------

let userName = ""; // Global variable to store user name

function greetUser() {
  userName = document.getElementById("nameInput").value;

  if (userName.trim() === "") {
    document.getElementById("greetingText").textContent =
      "Please enter your name.";
  } else {
    document.getElementById(
      "greetingText"
    ).textContent = `Hello, ${userName}! Welcome!`;
  }
}

// ------------------------------------
//  Part 2: Functions
// ------------------------------------

// Function 1: Calculate total price with tax
function calculateTotal(price, taxRate) {
  return price + price * taxRate;
}

// Function 2: Format a string to title case
function toTitleCase(str) {
  return str
    .toLowerCase()
    .split(" ")
    .map((word) => word[0].toUpperCase() + word.slice(1))
    .join(" ");
}

// Example usage:
console.log("Total: $" + calculateTotal(50, 0.07));
console.log(toTitleCase("make this a title"));

// ------------------------------------
//  Part 3: Loops
// ------------------------------------

// Loop 1: Create a list of numbers using for loop
const loopList = document.getElementById("loopList");
for (let i = 1; i <= 5; i++) {
  let listItem = document.createElement("li");
  listItem.textContent = `Item ${i}`;
  loopList.appendChild(listItem);
}

// Loop 2: Countdown using while loop
let countdown = 5;
while (countdown > 0) {
  console.log("Countdown: " + countdown);
  countdown--;
}

// ------------------------------------
// Part 4: DOM Manipulation
// ------------------------------------

document.getElementById("toggleBtn").addEventListener("click", () => {
  const box = document.getElementById("box");
  box.classList.toggle("hidden");
});

// 3. Create a new element on the fly
const newPara = document.createElement("p");
newPara.textContent = "This paragraph was added via JavaScript!";
document.body.appendChild(newPara);
