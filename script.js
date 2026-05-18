// Target the HTML elements
const button = document.getElementById('USA');
const timeDisplay = document.getElementById('time');
let intervalId = null;

// Function to fetch and format live NYC time
function showNYCTime() {
    const now = new Date();
    
    const options = {
        timeZone: 'America/New_York',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true
    };

    const formatter = new Intl.DateTimeFormat('en-US', options);
    timeDisplay.textContent = formatter.format(now);
}

// Listen for the click event to start the live clock
button.addEventListener('click', function() {
    // Clear any existing timer to prevent bugs
    if (intervalId) {
        clearInterval(intervalId);
    }
    
    // Show the time immediately on click
    showNYCTime();
    
    // Keep updating the time every second live
    intervalId = setInterval(showNYCTime, 1000);
});

