function greet() {
    console.log("Hello!");
}

greet();
greet();


function sayHi() {
    console.log("hi");
}
sayHi();

function greetName(name) {
    console.log("Hello, " + name + "!");
}

greetName("Ada");
greetName("Grace");

function add(a, b) {
    console.log(a + b);
}
add(3, 4); // 7

function add(a, b) {
    return a + b;
}

let result = add(10, 5);
console.log(result); // 15

function example() {
    return "done";
    console.log("This will never run");
}

function double(n) { return n * 2; }
let x = double(6);

const multiply = function(a, b) {
    return a * b;
};

console.log(multiply(3, 5)); // 15

greet;   // nope (this is the function itself)
greet(); // yes (this runs it)

function add(a, b) { return a + b; }
add(2, 3); // returned, but ignored
