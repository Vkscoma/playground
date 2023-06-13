function createElements() {
    const div = document.createElement('div')
    const h1 = document.createElement('h1')
    h1.textContent = "New h1"
    div.appendChild(h1)

    document.body.appendChild(div)
}

createElements();

const modalButton = document.querySelector('#open-prompt'),
    modal = document.querySelector('#modal');


modalButton.addEventListener("click", () => {
    if (!modal.open) {
        modal.showModal();
    } else {
        modal.close()
    }
})