/*
JavaScript Functions Boot Camp
Complete each TODO. Run often.
*/

// Simple test helper (so we can verify quickly)
function test(label, actual, expected) {
    const pass = actual === expected;
    console.log(`${pass ? "✅" : "❌"} ${label} | got: ${actual} | expected: ${expected}`);
}

// ------------------------------------------------------------
// PART A: Warm-up (no parameters)
// ------------------------------------------------------------

/*
TODO A1:
Create a function named sayHello that prints: Hello!
Then CALL it 2 times.
*/

// TODO A1 here


// ------------------------------------------------------------
// PART B: Parameters + Arguments
// ------------------------------------------------------------

/*
TODO B1:
Write a function named shout that takes 1 parameter: word
It should RETURN the word in all caps.
Example: shout("hey") -> "HEY"
*/
function shout(word) {
    // TODO B1
}

test("B1 shout('hey')", shout("hey"), "HEY");
test("B1 shout('JavaScript')", shout("JavaScript"), "JAVASCRIPT");

/*
TODO B2:
Write a function named fullName that takes (first, last)
Return "first last" with a single space between.
Example: fullName("Ada", "Lovelace") -> "Ada Lovelace"
*/
function fullName(first, last) {
    // TODO B2
}

test("B2 fullName", fullName("Ada", "Lovelace"), "Ada Lovelace");
test("B2 fullName", fullName("Alan", "Turing"), "Alan Turing");

/*
TODO B3:
Write a function named isEven that takes (n)
Return true if n is even, false otherwise.
Hint: use the % operator.
*/
function isEven(n) {
    // TODO B3
}

test("B3 isEven(4)", isEven(4), true);
test("B3 isEven(7)", isEven(7), false);

// ------------------------------------------------------------
// PART C: Return values used later
// ------------------------------------------------------------

/*
TODO C1:
Write a function named add that takes (a, b)
Return the sum.
*/
function add(a, b) {
    // TODO C1
}

test("C1 add(2,3)", add(2, 3), 5);
test("C1 add(-5,10)", add(-5, 10), 5);

/*
TODO C2:
Write a function named average that takes (a, b)
Return the average of the two numbers.
Example: average(10, 20) -> 15
*/
function average(a, b) {
    // TODO C2
}

test("C2 average(10,20)", average(10, 20), 15);
test("C2 average(5,6)", average(5, 6), 5.5);

// ------------------------------------------------------------
// PART D: Small logic inside functions
// ------------------------------------------------------------

/*
TODO D1:
Write a function named clamp that takes (value, min, max)
- If value < min, return min
- If value > max, return max
- Otherwise return value
*/
function clamp(value, min, max) {
    // TODO D1
}

test("D1 clamp low", clamp(-5, 0, 10), 0);
test("D1 clamp mid", clamp(7, 0, 10), 7);
test("D1 clamp high", clamp(99, 0, 10), 10);

/*
TODO D2:
Write a function named repeatWord that takes (word, times)
Return a single string where word is repeated times times with "-" between.
Example: repeatWord("go", 3) -> "go-go-go"
Hint: loop
*/
function repeatWord(word, times) {
    // TODO D2
}

test("D2 repeatWord", repeatWord("go", 3), "go-go-go");
test("D2 repeatWord", repeatWord("a", 1), "a");

// ------------------------------------------------------------
// PART E: Function expression
// ------------------------------------------------------------

/*
TODO E1:
Create a function expression stored in a const named subtract.
It should take (a, b) and RETURN a - b.
*/
const subtract = function(a, b) {
    // TODO E1
};

test("E1 subtract(10,3)", subtract(10, 3), 7);
test("E1 subtract(3,10)", subtract(3, 10), -7);

// ------------------------------------------------------------
// PART F: Tiny “real world” mini-task
// ------------------------------------------------------------

/*
You are building a points system for a simple game.

TODO F1:
Write a function named calculateScore that takes (coins, gems)
Rules:
- Each coin is worth 10 points
- Each gem is worth 50 points
Return total score.

TODO F2:
Write a function named scoreMessage that takes (name, score)
Return: "<name>'s score is <score>."
Example: scoreMessage("Nick", 120) -> "Nick's score is 120."
*/
function calculateScore(coins, gems) {
    // TODO F1
}

function scoreMessage(name, score) {
    // TODO F2
}

test("F1 calculateScore", calculateScore(3, 2), 130);
test("F2 scoreMessage", scoreMessage("Nick", 130), "Nick's score is 130.");

// Final output check (should be readable)
const finalScore = calculateScore(5, 1);
console.log(scoreMessage("Player1", finalScore));
