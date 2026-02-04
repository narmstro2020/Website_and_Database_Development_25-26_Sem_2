/**
 * ============================================
 * JavaScript Events - Guided Notes
 * ============================================
 * Follow along as we explore how to make
 * web pages interactive with events!
 */

// ============================================
// DEMO 1: Basic Click Event
// ============================================
// The most common event - clicking a button!
// 
// SYNTAX: element.addEventListener('eventType', callbackFunction)
// 
// The callback function runs WHEN the event happens,
// not immediately when the code loads.

const demo1Btn = document.querySelector('#demo1-btn');
const demo1Output = document.querySelector('#demo1-output');

// Keep track of how many times clicked
let clickCount = 0;

// Using an arrow function as the callback
demo1Btn.addEventListener('click', () => {
    clickCount++;
    demo1Output.textContent = `Button clicked ${clickCount} time(s)! 🎉`;
    
    // Change button text after multiple clicks
    if (clickCount >= 5) {
        demo1Btn.textContent = "You're a clicking pro!";
    }
});


// ============================================
// DEMO 2: Multiple Mouse Events
// ============================================
// One element can listen for MANY different events!
// Let's see mouseenter, mouseleave, and click in action.

const demo2Box = document.querySelector('#demo2-box');
const demo2Log = document.querySelector('#demo2-log');

// Helper function to add messages to the log
function logEvent(message, color = '#ccd6f6') {
    const time = new Date().toLocaleTimeString();
    demo2Log.innerHTML += `<div style="color: ${color}">[${time}] ${message}</div>`;
    // Auto-scroll to bottom
    demo2Log.scrollTop = demo2Log.scrollHeight;
}

// Mouse enters the element
demo2Box.addEventListener('mouseenter', () => {
    demo2Box.style.background = '#4ecca3';
    demo2Box.textContent = 'Mouse is inside!';
    logEvent('mouseenter - Mouse entered the box', '#4ecca3');
});

// Mouse leaves the element
demo2Box.addEventListener('mouseleave', () => {
    demo2Box.style.background = '#7b68ee';
    demo2Box.textContent = 'Hover & Click Me!';
    logEvent('mouseleave - Mouse left the box', '#e94560');
});

// Click on the element
demo2Box.addEventListener('click', () => {
    logEvent('click - Box was clicked!', '#ffc107');
});


// ============================================
// DEMO 3: Keyboard Events & The Event Object
// ============================================
// When an event happens, the browser creates an "event object"
// containing information about what happened.
// 
// We access it by adding a parameter to our callback function!
// Common names: event, e, evt

const demo3Input = document.querySelector('#demo3-input');
const keyValue = document.querySelector('#key-value');
const codeValue = document.querySelector('#code-value');
const shiftValue = document.querySelector('#shift-value');

// 'keydown' fires when ANY key is pressed
demo3Input.addEventListener('keydown', (event) => {
    // event.key = the character or key name ("a", "Enter", "ArrowUp")
    keyValue.textContent = event.key;
    
    // event.code = the physical key ("KeyA", "Enter", "ArrowUp")
    codeValue.textContent = event.code;
    
    // event.shiftKey = boolean, true if Shift was held
    shiftValue.textContent = event.shiftKey ? 'Yes!' : 'No';
    
    // Fun: Change input border color based on key
    if (event.key === 'Enter') {
        demo3Input.style.borderColor = '#4ecca3';
    } else if (event.key === 'Escape') {
        demo3Input.value = ''; // Clear the input
        demo3Input.style.borderColor = '#e94560';
    }
});

// Reset border color when user types normally
demo3Input.addEventListener('input', () => {
    demo3Input.style.borderColor = '#4ecca3';
});


// ============================================
// DEMO 4: Form Events & preventDefault()
// ============================================
// When a form submits, the browser's DEFAULT behavior
// is to refresh the page and send data to a server.
// 
// We use event.preventDefault() to STOP that default
// behavior so we can handle the form with JavaScript!

const demo4Form = document.querySelector('#demo4-form');
const demo4Output = document.querySelector('#demo4-output');

demo4Form.addEventListener('submit', (event) => {
    // IMPORTANT: Stop the page from refreshing!
    event.preventDefault();
    
    // event.target is the form element itself
    // We can get form data using FormData or directly accessing inputs
    const formData = new FormData(event.target);
    
    // Get the values
    const username = formData.get('username');
    const email = formData.get('email');
    
    // Display the submitted data
    demo4Output.innerHTML = `
        <strong style="color: #4ecca3">Form Submitted! ✅</strong><br>
        Name: ${username}<br>
        Email: ${email}
    `;
    
    // Optional: Clear the form after submission
    event.target.reset();
});

// BONUS: Real-time validation using 'input' event
const emailInput = demo4Form.querySelector('input[type="email"]');

emailInput.addEventListener('input', (event) => {
    const value = event.target.value;
    
    // Simple email check (contains @ and .)
    if (value.includes('@') && value.includes('.')) {
        event.target.classList.remove('error');
        event.target.classList.add('valid');
    } else if (value.length > 0) {
        event.target.classList.remove('valid');
        event.target.classList.add('error');
    } else {
        event.target.classList.remove('valid', 'error');
    }
});


// ============================================
// DEMO 5: Event Delegation
// ============================================
// Problem: If we add new elements dynamically,
// they won't have event listeners attached!
// 
// Solution: Add ONE listener to a parent element.
// Events "bubble up" from children to parents,
// so the parent will catch events from all children.
// 
// Use event.target to see what was ACTUALLY clicked.

const demo5List = document.querySelector('#demo5-list');
const demo5Input = document.querySelector('#demo5-input');
const demo5AddBtn = document.querySelector('#demo5-add-btn');

// ONE event listener on the parent <ul>
// This will catch clicks on ANY child element!
demo5List.addEventListener('click', (event) => {
    // Check if what was clicked is a delete button
    // .matches() checks if element matches a CSS selector
    if (event.target.matches('.delete-btn')) {
        // event.target is the button
        // .closest() finds the nearest ancestor matching selector
        const listItem = event.target.closest('li');
        
        // Remove the list item with a fade animation
        listItem.style.opacity = '0';
        listItem.style.transform = 'translateX(50px)';
        listItem.style.transition = 'all 0.3s';
        
        // Actually remove after animation
        setTimeout(() => {
            listItem.remove();
        }, 300);
    }
});

// Add new items - these will ALSO work with our delegation!
demo5AddBtn.addEventListener('click', () => {
    const text = demo5Input.value.trim();
    
    if (text) {
        // Create new list item
        const newItem = document.createElement('li');
        newItem.innerHTML = `
            <span>${text}</span>
            <button class="delete-btn">Delete</button>
        `;
        
        // Add to list
        demo5List.appendChild(newItem);
        
        // Clear input
        demo5Input.value = '';
        demo5Input.focus();
    }
});

// Allow pressing Enter to add items
demo5Input.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        demo5AddBtn.click(); // Trigger the add button's click
    }
});


// ============================================
// SUMMARY - Key Concepts to Remember:
// ============================================
// 
// 1. element.addEventListener('eventType', callback)
//    - eventType: 'click', 'keydown', 'submit', etc.
//    - callback: function that runs when event fires
// 
// 2. The Event Object (commonly named: event, e, evt)
//    - event.target - element that triggered the event
//    - event.key - which key was pressed (keyboard)
//    - event.preventDefault() - stop default behavior
// 
// 3. Common Events:
//    - Mouse: click, dblclick, mouseenter, mouseleave
//    - Keyboard: keydown, keyup
//    - Form: submit, input, change, focus, blur
// 
// 4. Event Delegation:
//    - Add listener to parent, check event.target
//    - Use .matches() and .closest() to find elements
//    - Works with dynamically added elements!
