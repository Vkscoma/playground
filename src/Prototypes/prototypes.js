const btnOne = document.querySelector('.btn-one');
const btnTwo = document.querySelector('.btn-two');

function Pizza(toppings = [], customer) {
    this.toppings = toppings;
    this.customer = customer;
    this.id = Math.floor(Math.random() * 16777215).toString(16);
    this.slices = 10;
}

Pizza.prototype.eat = function () {
    this.slices -= 1;
    console.log(`You have ${this.slices} slices left`);
}

const cheesePizzaOrder = new Pizza(['cheese'], 'John');
const pepperoniPizzaOrder = new Pizza(['cheese', 'pepperoni'], 'Jane');

btnOne.addEventListener('click', () => {
    console.log(cheesePizzaOrder);
});

btnTwo.addEventListener('click', () => {
    console.log(pepperoniPizzaOrder);
});
