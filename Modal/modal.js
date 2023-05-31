const openButton = document.querySelector('[data-open-modal]'),
    closeButton = document.querySelector('[data-close-modal]'),
    modal = document.querySelector('.modal');

openButton.addEventListener('click', () => {
    modal.showModal();
});

closeButton.addEventListener('click', () => {
    closeModal();
});

document.addEventListener('click', e => {
    if (e.target === modal) {
        closeModal();
    }
});

function closeModal() {
    modal.close();
}