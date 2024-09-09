// Event listener for the Menu button on the first window
document.getElementById('menuButton').addEventListener('click', function() {
    document.getElementById('window1').classList.add('hidden'); // Hide window 1
    document.getElementById('window2').classList.remove('hidden'); // Show window 2
});

let totalAmount = 0; // Initialize total amount

// Function to add item price to the total
function addItem(amount) {
    totalAmount += amount;
}

// Event listener for the Calculate Total button on the second window
document.getElementById('calculateButton').addEventListener('click', function() {
    document.getElementById('window2').classList.add('hidden'); // Hide window 2
    document.getElementById('window3').classList.remove('hidden'); // Show window 3
    document.getElementById('totalAmount').innerText = `$${totalAmount}`; // Update total amount display
});

// Event listener for all back buttons
document.querySelectorAll('.backButton').forEach(function(button) {
    button.addEventListener('click', function() {
        const targetWindow = this.getAttribute('data-target'); // Get the target window ID
        // Hide all windows
        document.querySelectorAll('.window').forEach(function(win) {
            win.classList.add('hidden');
        });
        // Show the target window
        document.getElementById(targetWindow).classList.remove('hidden');
    });
});



