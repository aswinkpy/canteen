document.getElementById('menuButton').addEventListener('click', function() {
    document.getElementById('window1').classList.add('hidden');
    document.getElementById('window2').classList.remove('hidden');
});

let totalAmount = 0;

function addItem(amount) {
    totalAmount += amount;
}

document.getElementById('calculateButton').addEventListener('click', function() {
    document.getElementById('window2').classList.add('hidden');
    document.getElementById('window3').classList.remove('hidden');
    document.getElementById('totalAmount').innerText = `$${totalAmount}`;
});

