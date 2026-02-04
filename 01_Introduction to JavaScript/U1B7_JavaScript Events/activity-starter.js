/**
 * ============================================
 * Memory Card Game - Student Activity
 * ============================================
 * 
 * Your Task: Complete this JavaScript file to make
 * the memory card game fully functional!
 * 
 * Skills you'll practice:
 * - addEventListener() for click events
 * - Event delegation (one listener for many cards)
 * - The event object (event.target)
 * - DOM manipulation with events
 * 
 * Look for TODO comments to find where you need to write code.
 * The reference section at the bottom shows syntax examples.
 */

// ============================================
// GAME DATA - Don't modify this section
// ============================================
const emojis = ['🎮', '🎯', '🎨', '🎭', '🎪', '🎫', '🎬', '🎤', '🎧'];

const difficulties = {
    easy: { pairs: 4, columns: 4 },
    medium: { pairs: 6, columns: 4 },
    hard: { pairs: 9, columns: 6 }
};

// ============================================
// GAME STATE - Variables to track the game
// ============================================
let cards = [];
let flippedCards = [];
let matchedPairs = 0;
let moves = 0;
let gameStarted = false;
let timerInterval = null;
let seconds = 0;

// ============================================
// DOM ELEMENTS - Get references to HTML elements
// ============================================
const gameBoard = document.querySelector('#game-board');
const movesDisplay = document.querySelector('#moves');
const matchesDisplay = document.querySelector('#matches');
const timerDisplay = document.querySelector('#timer');
const startBtn = document.querySelector('#start-btn');
const resetBtn = document.querySelector('#reset-btn');
const difficultySelect = document.querySelector('#difficulty');
const winMessage = document.querySelector('#win-message');
const overlay = document.querySelector('#overlay');
const playAgainBtn = document.querySelector('#play-again-btn');
const finalMoves = document.querySelector('#final-moves');
const finalTime = document.querySelector('#final-time');


// ============================================
// HELPER FUNCTIONS - These are done for you
// ============================================

/**
 * Shuffle an array using Fisher-Yates algorithm
 */
function shuffleArray(array) {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

/**
 * Format seconds into MM:SS string
 */
function formatTime(totalSeconds) {
    const minutes = Math.floor(totalSeconds / 60);
    const secs = totalSeconds % 60;
    return `${minutes}:${secs.toString().padStart(2, '0')}`;
}

/**
 * Create card HTML element
 */
function createCardElement(emoji, index) {
    const card = document.createElement('div');
    card.classList.add('card');
    card.dataset.emoji = emoji;
    card.dataset.index = index;
    card.innerHTML = `
        <span class="card-back">❓</span>
        <span class="card-front">${emoji}</span>
    `;
    return card;
}

/**
 * Update the stats display
 */
function updateDisplay() {
    movesDisplay.textContent = moves;
    matchesDisplay.textContent = matchedPairs;
    timerDisplay.textContent = formatTime(seconds);
}


// ============================================
// TODO #1: Start the Game Timer
// ============================================
// This function should start a timer that increments
// the 'seconds' variable every 1000ms and updates the display.
// 
// HINT: Use setInterval() and store the interval ID in timerInterval
// HINT: Call updateDisplay() to refresh the timer on screen

function startTimer() {
    // TODO: Clear any existing interval first (in case timer is already running)
    // Use: clearInterval(timerInterval)
    
    // TODO: Set up a new interval that runs every 1000ms (1 second)
    // Inside the interval callback:
    //   1. Increment the 'seconds' variable
    //   2. Call updateDisplay()
    
    // YOUR CODE HERE:
    
}


// ============================================
// TODO #2: Stop the Timer
// ============================================
// This function should stop the timer from running.

function stopTimer() {
    // TODO: Use clearInterval() to stop the timer
    // The interval ID is stored in 'timerInterval'
    
    // YOUR CODE HERE:
    
}


// ============================================
// TODO #3: Initialize the Game
// ============================================
// This function sets up a new game:
// 1. Reset all game state variables
// 2. Create shuffled card pairs
// 3. Render the cards to the game board

function initGame() {
    // Get difficulty settings
    const difficulty = difficultySelect.value;
    const { pairs, columns } = difficulties[difficulty];
    
    // TODO: Reset game state variables
    // Set these back to starting values:
    //   - cards = []
    //   - flippedCards = []
    //   - matchedPairs = 0
    //   - moves = 0
    //   - seconds = 0
    //   - gameStarted = true
    
    // YOUR CODE HERE:
    
    
    // Create pairs of emojis
    const gameEmojis = emojis.slice(0, pairs);
    const cardPairs = [...gameEmojis, ...gameEmojis]; // Double for pairs
    const shuffledCards = shuffleArray(cardPairs);
    
    // Update board CSS class for grid layout
    gameBoard.className = `game-board ${difficulty}`;
    
    // TODO: Clear the game board and create new cards
    // 1. Clear the board: gameBoard.innerHTML = ''
    // 2. Loop through shuffledCards
    // 3. For each emoji, create a card using createCardElement(emoji, index)
    // 4. Append the card to gameBoard
    // 5. Also push the card to the 'cards' array
    
    // YOUR CODE HERE:
    
    
    // Update display and start timer
    updateDisplay();
    startTimer();
}


// ============================================
// TODO #4: Flip a Card
// ============================================
// This function handles flipping a single card.
// It should:
// 1. Add the 'flipped' class to show the card
// 2. Add the card to the flippedCards array

function flipCard(card) {
    // TODO: Add 'flipped' class to the card
    // HINT: Use card.classList.add('flipped')
    
    // TODO: Add this card to the flippedCards array
    // HINT: Use flippedCards.push(card)
    
    // YOUR CODE HERE:
    
}


// ============================================
// TODO #5: Check for a Match
// ============================================
// This function checks if two flipped cards match.
// Called when exactly 2 cards are flipped.

function checkMatch() {
    const [card1, card2] = flippedCards;
    
    // Get the emoji from each card's data attribute
    const emoji1 = card1.dataset.emoji;
    const emoji2 = card2.dataset.emoji;
    
    // TODO: Check if emojis match
    // If they match:
    //   1. Add 'matched' class to both cards
    //   2. Increment matchedPairs
    //   3. Check if game is won (matchedPairs === total pairs)
    // If they don't match:
    //   1. After a short delay (1000ms), remove 'flipped' class from both
    //   
    // Either way:
    //   - Increment moves
    //   - Clear the flippedCards array
    //   - Call updateDisplay()
    
    // YOUR CODE HERE:
    
}


// ============================================
// TODO #6: Handle Card Click (EVENT DELEGATION)
// ============================================
// Instead of adding a listener to EACH card,
// we add ONE listener to the game board!
// This uses EVENT DELEGATION.

function handleCardClick(event) {
    // TODO: Check if the game has started
    // If not, return early (do nothing)
    
    // YOUR CODE HERE:
    
    
    // TODO: Get the clicked card
    // Use event.target.closest('.card') to get the card element
    // (This handles clicking on the emoji inside the card)
    // If no card was clicked (clicked on board background), return early
    
    // YOUR CODE HERE:
    
    
    // TODO: Check if card is already flipped or matched
    // If the card has 'flipped' or 'matched' class, return early
    // HINT: Use card.classList.contains('flipped')
    
    // YOUR CODE HERE:
    
    
    // TODO: Check if we already have 2 cards flipped
    // If flippedCards.length >= 2, return early (still checking previous pair)
    
    // YOUR CODE HERE:
    
    
    // TODO: Flip the card and check for match if needed
    // 1. Call flipCard(card)
    // 2. If flippedCards.length === 2, call checkMatch()
    
    // YOUR CODE HERE:
    
}


// ============================================
// Game Won Function - Done for you
// ============================================
function gameWon() {
    stopTimer();
    gameStarted = false;
    
    // Show win message
    finalMoves.textContent = moves;
    finalTime.textContent = formatTime(seconds);
    overlay.classList.add('show');
    winMessage.classList.add('show');
}


// ============================================
// Reset Game Function - Done for you
// ============================================
function resetGame() {
    stopTimer();
    gameStarted = false;
    cards = [];
    flippedCards = [];
    matchedPairs = 0;
    moves = 0;
    seconds = 0;
    updateDisplay();
    
    // Clear board
    gameBoard.innerHTML = `
        <div class="placeholder" style="grid-column: span 4; text-align: center; padding: 3rem; color: #8892b0;">
            Click "Start Game" to begin!
        </div>
    `;
    gameBoard.className = 'game-board medium';
    
    // Hide win message
    overlay.classList.remove('show');
    winMessage.classList.remove('show');
}


// ============================================
// TODO #7: Set Up Event Listeners
// ============================================
// Add all the event listeners to make the game interactive!

// TODO: Add click listener to Start button
// When clicked, call initGame()
// HINT: startBtn.addEventListener('click', ...)

// YOUR CODE HERE:



// TODO: Add click listener to Reset button  
// When clicked, call resetGame()

// YOUR CODE HERE:



// TODO: Add click listener to Play Again button
// When clicked, call resetGame() then initGame()

// YOUR CODE HERE:



// TODO: Add click listener to game board (EVENT DELEGATION!)
// This ONE listener handles clicks on ALL cards
// When clicked, call handleCardClick and pass the event

// YOUR CODE HERE:




// ============================================
// BONUS CHALLENGES (Optional)
// ============================================
// 
// 1. Add keyboard support: Press 'R' to reset, 'S' to start
//    HINT: document.addEventListener('keydown', (e) => { ... })
//    HINT: Check e.key === 'r' or e.key === 's'
//
// 2. Add sound effects when cards flip or match
//    HINT: const audio = new Audio('sound.mp3'); audio.play();
//
// 3. Save high scores to localStorage
//    HINT: localStorage.setItem('highScore', JSON.stringify(score))
//
// 4. Add a "hint" button that briefly shows all cards
//


// ============================================
// REFERENCE - Syntax Examples from Today's Notes
// ============================================
/*
// Adding an event listener:
element.addEventListener('click', () => {
    // code runs when clicked
});

// Adding an event listener with event object:
element.addEventListener('click', (event) => {
    console.log(event.target); // element that was clicked
});

// Event delegation - check what was clicked:
parent.addEventListener('click', (event) => {
    const card = event.target.closest('.card');
    if (card) {
        // A card was clicked!
    }
});

// Check if element has a class:
if (element.classList.contains('flipped')) {
    // element has the 'flipped' class
}

// Add/remove classes:
element.classList.add('flipped');
element.classList.remove('flipped');

// Get data attribute:
const value = element.dataset.emoji; // gets data-emoji="..."

// setTimeout - run code after delay:
setTimeout(() => {
    // runs after 1000ms (1 second)
}, 1000);

// setInterval - run code repeatedly:
const intervalId = setInterval(() => {
    // runs every 1000ms
}, 1000);

// clearInterval - stop the interval:
clearInterval(intervalId);
*/
