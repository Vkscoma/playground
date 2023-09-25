const rcRadioButtons = document.querySelectorAll("input[type=radio][name=purchase_type]");
const rcOneTimePrice = document.querySelector('#price-template--16158322557101__main > div > div > div.price__regular > span.price-item.price-item--regular');

const removeTrailingZero = (price) => {
    const priceArr = price.split('.');
    const lastDigit = priceArr[1];
    if (lastDigit === '00') {
        return priceArr[0];
    }
    return price;
}

rcRadioButtons.forEach((radio) => {
    radio.addEventListener('change', (e) => {
        // Calculate the price dynamically based on the selected radio button's value
        const selectedValue = e.target.value;
        const dynamicPrice = (selectedValue === 'onetime') ? "" : removeTrailingZero(rcOneTimePrice.textContent);

        // Update the price element
        rcOneTimePrice.textContent = dynamicPrice;
        console.log(dynamicPrice);
    });
});
