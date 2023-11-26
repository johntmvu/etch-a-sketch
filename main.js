const container = document.querySelector(".container")


for (let i = 0; i < 16; i++) {
    for (let j = 0; j < 16; j++) {
        let newDiv = document.createElement('div')

        newDiv.classList.add('container-item')

        container.appendChild(newDiv)
    }
}

const item = document.querySelectorAll(".container-item")

item.forEach((item) => {
    item.addEventListener('mouseover', () => {
        item.style.backgroundColor = 'black'
    })
})