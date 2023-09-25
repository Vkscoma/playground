const app = document.getElementById('app');

function Pizza() {
    console.log(this);
}

const cheesePizza = new Pizza();
console.log(cheesePizza.toppings = ['cheese', 'sauce']);
console.log(cheesePizza.constructor);
console.log(cheesePizza instanceof Pizza);
