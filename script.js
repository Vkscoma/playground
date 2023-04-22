const billElement = document.querySelector('#total-bill'),
    calculateButton = document.querySelector('#calculate');


function calculateBill(bill, tax, tip) {
    bill = Number(document.querySelector('#bill').value);
    tax = Number(document.querySelector('#tax').value);
    tip = Number(document.querySelector('#tip').value);

    const total = Math.round(bill * (1 + tax / 100) + tip).toFixed(2);
    billElement.textContent = `Total: $${total}`;
}

calculateButton.addEventListener('click', calculateBill);
