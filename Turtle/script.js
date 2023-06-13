const turtle = document.querySelector('#turtle'),
    turtleEl = document.querySelector('.turtle');

let x = 0;
let y = 0;

function handleKeyDown(event) {
    if (!event.key.includes('Arrow')) return;

    switch (event.key) {
        case 'ArrowUp':
            y -= 10;
            break;
        case 'ArrowDown':
            y += 10;
            break;
        case 'ArrowLeft':
            x += 10;
            break;
        case 'ArrowRight':
            x -= 10;
            break;
        default:
            alert('That is not a valid move!');
            break;
    }
    turtleEl.style.setProperty('--x', `${x}px`)
    turtleEl.style.setProperty('--y', `${y}px`);
}

window.addEventListener('keydown', handleKeyDown);