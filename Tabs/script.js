const tabContent = document.querySelectorAll('.tab--content');
const tabButton = document.querySelectorAll('.tab--button');

function tabClick(event) {
    tabButton.forEach((button) => {
        button.classList.remove('active');
        button.classList.remove('background--match');
    }
    );
    tabContent.forEach((content) => {
        content.classList.remove('active');
    }
    );
    for (let i = 0; i < tabButton.length; i++) {
        if (tabButton[i] === event.currentTarget) {
            tabButton[i].classList.add('background--match');
            tabContent[i].classList.add('active');
        }
    }
}

tabButton.forEach((button) => {
    button.addEventListener('click', tabClick);
});