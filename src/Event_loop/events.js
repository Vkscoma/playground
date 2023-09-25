const button = document.querySelector('.click--me');

const wait = (ms = 0) => new Promise(resolve => setTimeout(resolve, ms));

function handleClick(event) {
    const element = event.currentTarget;
    element.textContent = 'Go!';

    // change to a circle
    wait(2000)
        .then(() => {
            element.classList.add('rounded-full');
            return wait(2000);
        })
        .then(() => {
            element.classList.remove('bg-teal-700');
            element.classList.add('bg-red-500');
            return wait(3000);
        })
        .then(() => {
            element.classList.add('opacity-25');
            return wait(4000);
        })
}

button.addEventListener('click', handleClick);
