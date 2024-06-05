const fadeText = document.getElementById('fadeText');
const messages = 
[
"Typing 1s and 0s...", 
"Moving the satellite into position...",
"Clicking the Save button...", 
"Convincing the AI not to turn evil...",
"Killing bugs...",
"It's not you it's me",
"Adjusting the flux capacitor...",
"(Insert Quarter)",
"Counting backwards from infinity...",
"Spinning the wheel of fortune..."
];
let currentIndex = 0;

function updateText() {
    fadeText.textContent = messages[currentIndex];
    currentIndex = (currentIndex + 1) % messages.length;
}

updateText(); // Initial update

setInterval(updateText, 8000); // Switch text every x seconds
