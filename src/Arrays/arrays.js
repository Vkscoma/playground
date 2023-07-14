const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const names = ['John', 'Jane', 'Jack', 'Jill', 'James'];
const mainDiv = document.getElementById('main_div');

/* Static Methods */
function createRange(start, end) {
    const range = Array.from({ length: end - start + 1 },
        function (_item, index) {
            return index + start;
        });
    return range;
}

const myRange = createRange(3, 7);

/* Callback Methods */
const meats = {
    beyond: 10,
    beef: 5,
    pork: 7
}

Object.entries(meats).forEach(([key, value]) => {
    const div = document.createElement('div');
    div.innerText = `${key}: ${value}`;
    mainDiv.appendChild(div);
});

/* Looping Methods */

