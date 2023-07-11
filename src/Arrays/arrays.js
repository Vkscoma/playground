const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const names = ['John', 'Jane', 'Jack', 'Jill', 'James'];

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


/* Looping Methods */

