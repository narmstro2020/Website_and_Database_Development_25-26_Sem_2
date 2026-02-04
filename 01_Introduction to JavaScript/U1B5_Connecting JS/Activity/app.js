let name = prompt("What is your name?");

if (name === null) {
    name = "Anonymous Wizard";
} else if (name.trim() === "") {
    name = "Nameless Hero";
}

const nameSpan = document.getElementById("studentName");
nameSpan.textContent = name;

let luckyInput = prompt("Pick a lucky number (0–100):");
let luckyNumber = Number(luckyInput);

const luckySpan = document.getElementById("luckyNumber");
luckySpan.textContent = luckyNumber.toString();

const statusSpan = document.getElementById("statusMessage");

if (Number.isNaN(luckyNumber)) {
    statusSpan.textContent = "That wasn’t a number… the universe is confused.";
} else if (luckyNumber > 50) {
    statusSpan.textContent = "High roller energy.";
} else if (luckyNumber === 50) {
    statusSpan.textContent = "Perfectly balanced, as all things should be.";
} else {
    statusSpan.textContent = "Underdog numbers. Respect.";
}

const factsList = document.getElementById("factsList");
let factsHTML = "";

for (let i = 1; i <= 5; i++) {
    factsHTML += `<li>${luckyNumber} × ${i} = ${luckyNumber * i}</li>`;
}

factsList.innerHTML = factsHTML;
