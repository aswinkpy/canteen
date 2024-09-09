function showMenu() {
    document.getElementById('home').style.opacity = 0;
    setTimeout(() => {
        document.getElementById('home').style.display = 'none';
        document.getElementById('menu').style.display = 'flex';
        document.getElementById('menu').style.opacity = 1;
    }, 500);
}

function calculateTotal() {
    const item1Qty = parseInt(document.getElementById('item1Qty').value) || 0;
    const item2Qty = parseInt(document.getElementById('item2Qty').value) || 0;

    const item1Price = 5;
    const item2Price = 7;

    const total = (item1Qty * item1Price) + (item2Qty * item2Price);

    document.getElementById('totalAmount').innerText = Total Amount: $${total};

    document.getElementById('menu').style.opacity = 0;
    setTimeout(() => {
        document.getElementById('menu').style.display = 'none';
        document.getElementById('result').style.display = 'flex';
        document.getElementById('result').style.opacity = 1;
    }, 500);
}

function goHome() {
    document.getElementById('result').style.opacity = 0;
    setTimeout(() => {
        document.getElementById('result').style.display = 'none';
        document.getElementById('home').style.display = 'flex';
        document.getElementById('home').style.opacity = 1;
    }, 500);
}
