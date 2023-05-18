// Make a div
const div = document.createElement('div');
// add a class of wrapper to it
div.className = 'wrapper';
// put it into the body
document.body.appendChild(div);
// make an unordered list
const ul = document.createElement('ul');
// add three list items with the words "one, two, three" in them
// put that list into the above wrapper
const li = document.createElement('li');
li.textContent = 'one';
const li2 = document.createElement('li');
li2.textContent = 'two';
const li3 = document.createElement('li');
li3.textContent = 'three';
ul.appendChild(li);
ul.appendChild(li2);
ul.appendChild(li3);
div.appendChild(ul);
// create an image
const image = document.createElement('img');
// set the source to an image
// set the width to 250
// add a class of cute
// add an alt of Cute Puppy
// Append that image to the wrapper
image.src = 'https://picsum.photos/250';
image.width = 250;
image.className = 'cute';
image.alt = 'Cute Puppy';
div.appendChild(image);

// with HTML string, make a div, with two paragraphs inside of it
// put this div before the unordered list from above
const newDiv = document.createElement('div');
const p1 = document.createElement('p');
p1.textContent = 'Paragraph 1';
const p2 = document.createElement('p');
p2.textContent = 'Paragraph 2';
newDiv.appendChild(p1);
newDiv.appendChild(p2);

div.insertAdjacentElement('afterbegin', newDiv);
// add a class to the second paragraph called warning
// remove the first paragraph
p2.className = 'warning';
p1.remove();
// create a function called generatePlayerCard that takes in three arguments: name, age, and height
function generatePlayerCard(name, age, height) {
    const div = document.createElement('div');
    div.className = 'playerCard';
    const h2 = document.createElement('h2');
    h2.textContent = `${name} — ${age}`;
    const p = document.createElement('p');
    p.textContent = `They are ${height} and ${age} years old. In Dog years this person would be ${age * 7}. That would be a tall dog!`;
    div.appendChild(h2);
    div.appendChild(p);
    return div;
}
// have that function return html that looks like this:
// <div class="playerCard">
//   <h2>NAME — AGE</h2>
//   <p>They are HEIGHT and AGE years old. In Dog years this person would be AGEINDOGYEARS. That would be a tall dog!</p>
// </div>

// make a new div with a class of cards
const newDiv2 = document.createElement('div');
newDiv2.className = 'cards';
// make 4 player cards using generatePlayerCard
let player1 = generatePlayerCard('Vincent', 32, 150);
let player2 = generatePlayerCard('Michelle', 31, 100);
let player3 = generatePlayerCard('Milo', 2, 80);
let player4 = generatePlayerCard('Minnie', 10, 5);
// append those cards to the div
// put the div into the DOM just before the wrapper element
// Bonus, put a delete Button on each card so when you click it, the whole card is removed
newDiv2.appendChild(player1);
newDiv2.appendChild(player2);
newDiv2.appendChild(player3);
newDiv2.appendChild(player4);
player1.insertAdjacentHTML('afterend', '<button class="delete">Delete</button>');
player2.insertAdjacentHTML('afterend', '<button class="delete">Delete</button>');
player3.insertAdjacentHTML('afterend', '<button class="delete">Delete</button>');
player4.insertAdjacentHTML('afterend', '<button class="delete">Delete</button>');
div.insertAdjacentHTML('beforeend', newDiv2.outerHTML);
// select all the buttons!
// make out delete function
// loop over them and attach a listener
const deleteButton = document.querySelector('.delete');
deleteButton.addEventListener('click', e => {
    console.log(e.newDiv2);
    e.target.parentElement.remove();
});

// buttons.forEach(button => {
//     button.addEventListener('click', e => {
//         e.target.parentElement.remove();
//     });
// });