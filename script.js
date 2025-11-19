/* ========================
   Part 1: Variables & Conditionals
   ======================== */

// Variable declarations
let userAge = 20;
let accessMessage = "";

// Conditional statement
if (userAge >= 18) {
    accessMessage = "You are allowed access!";
} else {
    accessMessage = "Access denied. You must be 18 or older.";
}

// Display in HTML
document.getElementById("part1-output").textContent = accessMessage;


/* ========================
   Part 2: Custom Functions
   ======================== */

// Function 1: Greet user
function greetUser(name) {
    return `Hello, ${name}! Welcome to the site.`;
}

// Function 2: Sum of two numbers
function sumNumbers(a, b) {
    return a + b;
}

// Button event to demonstrate greetUser
document.getElementById("greetBtn").addEventListener("click", function() {
    const greeting = greetUser("Achieng");
    document.getElementById("greetOutput").textContent = greeting;
});


/* ========================
   Part 3: Loops
   ======================== */

// Loop example 1: for loop
function showNumbers() {
    let numbers = "";
    for (let i = 1; i <= 5; i++) {
        numbers += i + " ";
    }
    return numbers;
}

// Loop example 2: while loop
function showEvenNumbers() {
    let result = "";
    let num = 2;
    while (num <= 10) {
        result += num + " ";
        num += 2;
    }
    return result;
}

// Button event to show loops
document.getElementById("loopBtn").addEventListener("click", function() {
    const allNumbers = showNumbers() + " | Even: " + showEvenNumbers();
    document.getElementById("loopOutput").textContent = allNumbers;
});


/* ========================
   Part 4: DOM Interactions
   ======================== */

// DOM Interaction 1: Change background color
document.getElementById("changeColorBtn").addEventListener("click", function() {
    document.body.style.backgroundColor = "#cceeff";
});

// DOM Interaction 2: Add list item
document.getElementById("addItemBtn").addEventListener("click", function() {
    const ul = document.getElementById("itemList");
    const li = document.createElement("li");
    li.textContent = "New List Item " + (ul.children.length + 1);
    ul.appendChild(li);
});

// DOM Interaction 3: Update text dynamically
document.getElementById("part1-output").style.color = "green";
