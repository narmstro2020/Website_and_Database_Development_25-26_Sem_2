/*
WEB_U1B2 (20 min Guided Notes) — JavaScript Strings + Numbers
Names: ____________________________  ____________________________

Students:
- Fill in the blanks by writing answers in COMMENTS.
- Complete the TODOs.
- Run this file often (node WEB_U1B2_GuidedNotes.js).

Agenda (20 min)
0–2   | Warm-Up: predict outputs
2–6   | Strings: quotes, escapes, +, template literals
6–10  | String tools: length, indexing, slice, case, trim, includes
10–15 | Numbers: operators, precedence, %, Math, rounding
15–18 | Conversions: Number(), parseInt/parseFloat, NaN
18–20 | Exit Ticket
*/

// ============================================================
// 0–2 min — WARM-UP (Predict BEFORE running)
// ============================================================

console.log("\n=== WARM-UP: Predict the output ===");

// Predict in comments:
// 1) "5" + 2 -> ____________________________
// 2) "5" - 2 -> ____________________________
// 3) 10 / "2" -> ____________________________
// 4) "Hello".length -> ____________________________
// 5) "Hello"[1] -> ____________________________

console.log("1)", "5" + 2);
console.log("2)", "5" - 2);
console.log("3)", 10 / "2");
console.log("4)", "Hello".length);
console.log("5)", "Hello"[1]);

// Key idea (write it in your own words):
// The + operator with a string usually does ____________________________ (not math).
// Other operators like -, *, / often try to ____________________________ to numbers.

// ============================================================
// 2–6 min — STRINGS BASICS
// ============================================================

console.log("\n=== STRINGS: Quotes, escapes, concatenation, template literals ===");

// Fill in the blanks:
// A string is a sequence of __________.
// Common quotes: '  "  and ` (backticks) for ____________________________.

// Escape characters examples:
console.log("New line:\nLine 2");
console.log("Quote inside string: \"quoted\"");

// Concatenation:
let firstName = "Ada";
let lastName = "Lovelace";
let full1 = firstName + " " + lastName; // using +
console.log("concat:", full1);

// Template literal (recommended for building strings):
let full2 = `${firstName} ${lastName}`;
console.log("template:", full2);

// TODO: Make a new variable called favoriteFood and print:
// "Ada's favorite food is ___."
let favoriteFood = "pizza"; // TODO: change this
console.log(`${firstName}'s favorite food is ${favoriteFood}.`);

// ============================================================
// 6–10 min — STRING TOOLS
// ============================================================

console.log("\n=== STRINGS: length, indexing, slice, case, trim, includes ===");

let msg = "  Hello, World!  ";

// Vocabulary (fill in):
// length = number of __________ in a string
// index = position (starts at __________)
// slice(a, b) = substring from index a up to (but not including) index __________

console.log("raw:", JSON.stringify(msg));
console.log("length:", msg.length);
console.log("trim:", JSON.stringify(msg.trim()));
console.log("upper:", msg.toUpperCase());
console.log("lower:", msg.toLowerCase());

// Indexing:
let trimmed = msg.trim();
console.log("first char:", trimmed[0]);
console.log("last char:", trimmed[trimmed.length - 1]);

// slice examples:
console.log("slice(0, 5):", trimmed.slice(0, 5)); // "Hello"
console.log("slice(7):", trimmed.slice(7));       // from index 7 to end

// Searching:
console.log("includes 'World':", trimmed.includes("World"));
console.log("startsWith 'Hello':", trimmed.startsWith("Hello"));
console.log("endsWith '!':", trimmed.endsWith("!"));

// TODO: Given a username with messy spaces/case, clean it to lowercase and trimmed.
let usernameRaw = "   NiCK_ARMStrong   ";
let usernameClean = usernameRaw.trim().toLowerCase(); // TODO: ensure both trim + lower
console.log("clean username:", usernameClean);

// ============================================================
// 10–15 min — NUMBERS BASICS
// ============================================================

console.log("\n=== NUMBERS: operators, precedence, %, Math, rounding ===");

// Operators: +  -  *  /  **  %
// Fill in:
// % (modulo) gives the __________ after division.

console.log("7 % 3 =", 7 % 3); // remainder is 1

// Precedence (order of operations): parentheses, exponents, multiply/divide, add/subtract
console.log("2 + 3 * 4 =", 2 + 3 * 4);
console.log("(2 + 3) * 4 =", (2 + 3) * 4);

// Math object:
console.log("Math.floor(4.9) =", Math.floor(4.9));
console.log("Math.ceil(4.1)  =", Math.ceil(4.1));
console.log("Math.round(4.5) =", Math.round(4.5));
console.log("Math.max(3, 9)  =", Math.max(3, 9));
console.log("Math.random()   =", Math.random()); // 0 <= x < 1

// toFixed returns a STRING (important!)
let price = 3.5;
console.log("price.toFixed(2) =", price.toFixed(2), "type:", typeof price.toFixed(2));

// ============================================================
// 15–18 min — CONVERSIONS + NaN
// ============================================================

console.log("\n=== CONVERSIONS: Number(), parseInt/parseFloat, NaN ===");

// Fill in:
// Number("12") converts a string to a __________.
// NaN means “Not a __________”.

console.log("Number('12') =", Number("12"));
console.log("parseInt('12.9') =", parseInt("12.9", 10));     // 12
console.log("parseFloat('12.9') =", parseFloat("12.9"));     // 12.9

let weird = Number("twelve");
console.log("Number('twelve') =", weird);
console.log("isNaN(weird) =", Number.isNaN(weird));

// IMPORTANT: parseInt should usually include base 10:
console.log("parseInt('08', 10) =", parseInt("08", 10));

// ============================================================
// 18–20 min — EXIT TICKET
// ============================================================

// Answer in comments, then (optionally) code it:
//
// 1) What is the difference between "5" + 2 and Number("5") + 2?
//    ______________________________________________________________
//
// 2) How do you get the last character of a string s?
//    ______________________________________________________________
//
// 3) What does % do? Give an example you could use to check “even/odd”.
//    ______________________________________________________________

// TODO (Exit Ticket Coding):
// Create a variable s = "Robot" and print:
// - its length
// - its last character
// - whether it includes "bot"
let s = "Robot";
console.log("\n=== EXIT TICKET CODE ===");
console.log("length:", s.length);
console.log("last char:", s[s.length - 1]);
console.log("includes 'bot':", s.toLowerCase().includes("bot"));
