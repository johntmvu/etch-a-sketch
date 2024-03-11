const container = document.querySelector(".container")

function createGrid (num) {
    for (let i = 0; i < num; i++) {
        for (let j = 0; j < num; j++) {
            let newDiv = document.createElement('div')
    
            newDiv.classList.add('container-item')
            newDiv.style.flex = `calc(100% / ${num})`
            newDiv.style.minHeight = `calc(100% / ${num})`
    
            container.appendChild(newDiv)
        }
    }

    const item = document.querySelectorAll(".container-item")

    item.forEach((item) => {
        item.addEventListener('mouseover', () => {
            item.style.backgroundColor = 'black'
        })
    })
}

const newGrid = document.querySelector(".newGrid")

newGrid.addEventListener('click', () => {
    let userNum = prompt('Number of squares per side (1-100)')

    container.replaceChildren()


    if (userNum > 0 && userNum < 100) {
        createGrid(userNum)
    } else {
        userNum = prompt('Number of squares per side **(1-100)')
    }

    createGrid(userNum)

} )


createGrid(16)