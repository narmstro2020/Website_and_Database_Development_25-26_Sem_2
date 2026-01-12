/*
WEB_U1B2 — JavaScript Strings + Numbers
Pair Programming Lab: Strings & Numbers Boot Camp (NO FUNCTIONS YET)
Names: ______________________  ______________________  (______________________)

Instructions:
- Complete each TODO (no functions in this lab).
- Run often and compare your output to the “EXPECTED OUTPUT” comments.
- Keep your code readable: small steps, good variable names.

Roles (switch halfway)
Driver: types, runs the code, shares screen/keyboard
Navigator: reads instructions, watches for mistakes, explains “why”
(Optional 3rd) Coach: tests edge cases, keeps time

0–3 min: Assign roles, create file, run it once.
3–20 min: Complete Parts A–C.
20 min: Switch Driver/Navigator.
20–37 min: Complete Parts D–E.
37–40 min: Clean up: confirm output matches expected, add names, push to GitHub.

Each person will turn in a complete copy. Make sure all work is present for both students.
When finished turn this in on GitHub and Canvas.

This portion is worth 15 points.
*/

console.log("\n=== WEB_U1B2 Pair Lab: Strings & Numbers (No Functions) ===\n");

// ============================================================
// PART A (3–8 min): Strings — build + inspect
// ============================================================

console.log("\n=== PART A: Strings ===\n");

// TODO A1: Create a variable called firstName (string). Use your first name.
let firstName = ""; // TODO

// TODO A2: Create a variable called lastName (string). Use your last name.
let lastName = ""; // TODO

// TODO A3: Create fullName using concatenation (+) with a space between.
let fullName = ""; // TODO

// TODO A4: Print: Full name: <fullName>
console.log(""); // TODO

// TODO A5: Print: Length: <number of characters in fullName>
console.log(""); // TODO

// TODO A6: Print: First char: <first character of fullName>
console.log(""); // TODO

// TODO A7: Print: Last char: <last character of fullName>
// Hint: last index is fullName.length - 1
console.log(""); // TODO

/*
EXPECTED OUTPUT (your name will differ):
Full name: Ada Lovelace
Length: 12
First char: A
Last char: e
*/

// ============================================================
// PART B (8–14 min): Strings — cleaning + searching
// ============================================================

console.log("\n=== PART B: Clean + Search ===\n");

// TODO B1: Set messyUsername to a string with extra spaces AND mixed case.
// Example: "   NiCK Armstrong   "
let messyUsername = ""; // TODO

// TODO B2: Create cleanUsername by trimming spaces and lowercasing.
// Hint: messyUsername.trim().toLowerCase()
let cleanUsername = ""; // TODO

// TODO B3: Replace spaces inside the username with underscores.
// Hint: .replaceAll(" ", "_")
cleanUsername = ""; // TODO

// TODO B4: Print: Clean username: <cleanUsername>
console.log(""); // TODO

// TODO B5: Print: Includes 'nick': <true/false>
// Hint: cleanUsername.includes("nick")
console.log(""); // TODO

// TODO B6: Create a variable domain set to "school.edu"
let domain = ""; // TODO

// TODO B7: Create email = "<cleanUsername>@<domain>" using a template literal
let email = ""; // TODO

// TODO B8: Print: Email: <email>
console.log(""); // TODO

/*
EXPECTED OUTPUT (if messyUsername was "   NiCK Armstrong   "):
Clean username: nick_armstrong
Includes 'nick': true
Email: nick_armstrong@school.edu
*/

// ============================================================
// PART C (14–20 min): Numbers — math, rounding, modulo
// ============================================================

console.log("\n=== PART C: Numbers ===\n");

// TODO C1: Create price (number) and quantity (number)
let price = 0;    // TODO
let quantity = 0; // TODO

// TODO C2: Compute cost = price * quantity
let cost = 0; // TODO

// TODO C3: Print: Cost raw: <cost>
console.log(""); // TODO

// TODO C4: Print: Cost rounded: <cost to 2 decimals>
// Hint: cost.toFixed(2)
console.log(""); // TODO

// TODO C5: Compute quantityIsEven (boolean) using modulo (%)
// Hint: (quantity % 2) === 0
let quantityIsEven = false; // TODO

// TODO C6: Print: Quantity is even: <true/false>
console.log(""); // TODO

// TODO C7: Create rand1to10 = random integer 1..10 inclusive
// Hint: Math.floor(Math.random() * 10) + 1
let rand1to10 = 0; // TODO

// TODO C8: Print: Random 1-10: <rand1to10>
console.log(""); // TODO

/*
EXPECTED OUTPUT (random will differ):
Cost raw: 11
Cost rounded: 11.00
Quantity is even: true
Random 1-10: <some number 1..10>
*/

// ===================== SWITCH ROLES @ 20 MIN =====================

// ============================================================
// PART D (20–30 min): Conversions + NaN
// ============================================================

console.log("\n=== PART D: Conversions + NaN ===\n");

// TODO D1: Create three “input” strings:
let inputA = ""; // TODO example: "12"
let inputB = ""; // TODO example: "3.5"
let inputC = ""; // TODO example: "nope"

// TODO D2: Convert inputA and inputB into numbers using Number()
let numA = 0; // TODO
let numB = 0; // TODO

// TODO D3: Print: A + B = <sum>
console.log(""); // TODO

// TODO D4: Convert inputC into a number (it might become NaN)
let numC = 0; // TODO

// TODO D5: Print: C as number: <numC>
console.log(""); // TODO

// TODO D6: Create cIsNaN using Number.isNaN(numC)
let cIsNaN = false; // TODO

// TODO D7: Print: C is NaN: <true/false>
console.log(""); // TODO

// TODO D8: Create safeC
// If cIsNaN is true, safeC should be 0. Otherwise safeC should be numC.
// Hint: use the ternary operator: condition ? valueIfTrue : valueIfFalse
let safeC = 0; // TODO

// TODO D9: Print: safeC: <safeC>
console.log(""); // TODO

/*
EXPECTED OUTPUT (if inputA="12", inputB="3.5", inputC="nope"):
A + B = 15.5
C as number: NaN
C is NaN: true
safeC: 0
*/

// ============================================================
// PART E (30–37 min): Mini Receipt (no functions, just steps)
// ============================================================

console.log("\n=== PART E: Mini Receipt ===\n");

// TODO E1: Create item1Name (string) and item1Price (number)
let item1Name = ""; // TODO
let item1Price = 0; // TODO

// TODO E2: Create item2Name (string) and item2Price (number)
let item2Name = ""; // TODO
let item2Price = 0; // TODO

// TODO E3: Create taxRate (number). Example: 0.07
let taxRate = 0; // TODO

// TODO E4: Compute subtotal (add the two prices)
let subtotal = 0; // TODO

// TODO E5: Compute taxAmount = subtotal * taxRate
let taxAmount = 0; // TODO

// TODO E6: Compute total = subtotal + taxAmount
let total = 0; // TODO

// TODO E7: Print the receipt exactly in this format:
//
// Receipt
// Item: Soda  | Price: $1.50
// Item: Chips | Price: $2.00
// Subtotal: $3.50
// Tax:      $0.25
// Total:    $3.75
//
// Tips:
// - Use toFixed(2) on numbers for 2 decimals (money)
// - Use template literals: `text ${variable} more text`
//
// TODO E7a: Print "Receipt"
console.log(""); // TODO

// TODO E7b: Print item 1 line (use item1Name and item1Price.toFixed(2))
console.log(""); // TODO

// TODO E7c: Print item 2 line
console.log(""); // TODO

// TODO E7d: Print subtotal line
console.log(""); // TODO

// TODO E7e: Print tax line
console.log(""); // TODO

// TODO E7f: Print total line
console.log(""); // TODO

// ============================================================
// 37–40 min: CLEAN UP + REFLECTION (comments)
// ============================================================
//
// TODO REFLECTION 1: One string method you used today: ____________________________
// TODO REFLECTION 2: One number concept you used today (%, rounding, conversion, etc.): ____________________________
//
// TODO SUBMISSION: Add both names at the top, push to GitHub, submit on Canvas.
