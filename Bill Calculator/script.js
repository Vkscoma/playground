const billElement = document.querySelector('#total-bill'),
    calculateButton = document.querySelector('#calculate');


function calculateBill(bill, tax, tip) {
    bill = Number(document.querySelector('#bill').value);
    tax = Number(document.querySelector('#tax').value);
    tip = Number(document.querySelector('#tip').value);

    const total = Math.round(bill * (1 + tax / 100));
    const tipAmount = Math.round(total * (tip / 100));
    const totalBill = total + tipAmount;
    billElement.textContent = `Total: $${totalBill}`;
}

calculateButton.addEventListener('click', calculateBill);
