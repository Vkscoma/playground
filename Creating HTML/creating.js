function createElements() {
    const div = document.createElement('div')
    const h1 = document.createElement('h1')
    h1.textContent = "New h1"
    div.appendChild(h1)

    document.body.appendChild(div)
}

createElements();