/*
WEB U1B1 + U1B2 Practice
Strings + Numbers (NO functions)
*/

console.log("\n=== PART A: Variables + typeof ===\n");

// TODO A1: Create a variable called firstName (string)
// TODO A2: Create a variable called lastName (string)
// TODO A3: Create a variable called gradeLevel (number)
// TODO A4: Log each variable and its typeof

// Example output style (you can match this format):
// firstName: Nick | type: string


console.log("\n=== PART B: Building strings ===\n");

// TODO B1: Create fullName using firstName + lastName (include a space)
// TODO B2: Create a username using:
// - first letter of firstName + lastName
// - all lowercase
// Example: "narmstrong"
// TODO B3: Log fullName and username

// Helpful hints (not required):
// - firstName[0]
// - .toLowerCase()


console.log("\n=== PART C: String skills ===\n");

// TODO C1: Log the length of fullName
// TODO C2: Log fullName in ALL CAPS
// TODO C3: Log the last character of fullName
// TODO C4: Check if fullName includes a space (true/false) and log it
// TODO C5: Replace spaces in fullName with hyphens and log it
// Example: "Nick-Armstrong"


console.log("\n=== PART D: Numbers + math ===\n");

// Scenario: You run a tiny school store.
// You sold some items and need totals.

// TODO D1: Create variables:
// - pencilsSold (number)
// - pencilPrice (number)
// - notebooksSold (number)
// - notebookPrice (number)
// Choose realistic values (example: pencilsSold = 17, pencilPrice = 0.25)

// TODO D2: Calculate subtotal = (pencilsSold * pencilPrice) + (notebooksSold * notebookPrice)
// TODO D3: Create taxRate (example: 0.07)
// TODO D4: Calculate taxAmount
// TODO D5: Calculate total
// TODO D6: Log subtotal, taxAmount, total
// IMPORTANT: Use .toFixed(2) when logging money


console.log("\n=== PART E: Converting strings to numbers ===\n");

// Scenario: Data came in as strings (like form inputs)
const inputA = "12";
const inputB = "5.5";

// TODO E1: Create numA and numB as numbers (not strings)
// TODO E2: Log numA + numB (should be 17.5 if done right)
// TODO E3: Log inputA + inputB (this will be string concatenation)
// TODO E4: Log the typeof of inputA and numA to prove the difference

// Stretch (still no functions):
// TODO E5: Round numB to the nearest whole number and log it
// TODO E6: Use Math.floor and Math.ceil on numB and log both
