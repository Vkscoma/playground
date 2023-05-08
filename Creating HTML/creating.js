const p = document.createElement('p');
p.textContent = `Hey I'm red!`;
p.classList.add('red');

const img = document.createElement('img');
img.src = 'https://www.stickpng.com/assets/images/580b57fcd9996e24bc43c529.png';
img.alt = 'Star Wars Logo';

const div = document.createElement('div');
div.classList.add('container');
div.style.border = '1px solid black';
div.style.backgroundColor = 'pink';

div.appendChild(p);
div.appendChild(img);
document.body.appendChild(div);

const h2 = document.createElement('h2');
h2.textContent = `I'm a heading`;

div.insertAdjacentElement('afterbegin', h2);

const ulDiv = document.createElement('div');
const ul = document.createElement('ul');
const li1 = document.createElement('li');
const li2 = document.createElement('li');
const li3 = document.createElement('li');
li1.textContent = 'one';
li2.textContent = 'two';
li3.textContent = 'three';

ul.appendChild(li1);
ul.appendChild(li2);
ul.appendChild(li3);
ulDiv.appendChild(ul);

document.body.appendChild(ulDiv);

const li5 = document.createElement('li');
li5.textContent = 'five';
li3.insertAdjacentElement('afterend', li5);

const li4 = document.createElement('li');
li4.textContent = 'four';
li5.insertAdjacentElement('beforebegin', li4);