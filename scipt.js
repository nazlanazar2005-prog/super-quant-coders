// Function to handle the join action
function handleJoin() {
    alert("Thanks for your interest! We will contact you soon.");
    const messageArea = document.getElementById('messageArea');
    messageArea.textContent = "You've expressed interest in joining!";
}

// Get the button element by its ID
const joinButton = document.getElementById('joinButton');

// Add an event listener to call handleJoin when the button is clicked
joinButton.addEventListener('click', handleJoin);
