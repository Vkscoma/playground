// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const names = ['John', 'Jane', 'Jack', 'Jill', 'James'];
// const mainDiv = document.getElementById('main_div');
// const ul = document.getElementById('array-home');

// /* Static Methods */
// function createRange(start, end) {
//     const range = Array.from({ length: end - start + 1 },
//         function (_item, index) {
//             return index + start;
//         });
//     return range;
// }

// const myRange = createRange(3, 7);

// /* Callback Methods */
// const meats = {
//     beyond: 10,
//     beef: 5,
//     pork: 7
// }

// Object.entries(meats).forEach(([key, value]) => {
//     const li = document.createElement('li');
//     const keyValueText = `${key}: ${value}`
//     const capitalizeText = keyValueText.charAt(0).toUpperCase() + keyValueText.slice(1);
//     li.innerText = capitalizeText;
//     ul.appendChild(li);
// });

// Looping Methods
const toppings = [
    'Mushrooms ',
    'Tomatoes',
    'Eggs',
    'Chili',
    'Lettuce',
    'Avocado',
    'Chiles',
    'Bacon',
    'Pickles',
    'Onions',
    'Cheese',
];

function logTopping(topping, index, originalArray) {
    const nextTopping = originalArray[index + 1];
    const previousTopping = originalArray[index - 1];
    const lastItem = originalArray.length - 1;

    //log out the topping
    console.log(topping);
    //log the previous topping if there is one
    previousTopping ? console.log(previousTopping) : null;
    //log the next topping if there is one
    nextTopping ? console.log(nextTopping) : null;
    //if last item of the array, say end of the order
    lastItem === index ? console.log('End of the order') : console.log("Getting next Item");
};

toppings.forEach(logTopping);
