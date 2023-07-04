const dropButton = document.querySelector('.drop-button > button')
const dropBars = document.querySelector('.drop-bars')

const bars = document.querySelectorAll('.bar')
const barsText = document.querySelectorAll('.bar > h2')

const mainContent = document.querySelector('.content')

console.log(dropButton)

let counter = 0

dropButton.addEventListener('click', () => {
    counter++
    if (counter % 2 === 0 || counter === 0) {
        dropBars.style.display = 'none'
    } else {
        dropBars.style.display = 'flex'

    }
})

let content = null

bars.forEach((x) => {
    x.addEventListener('click', (e) => {
        if (e.target.nodeName === 'DIV') {
            console.log(e.target.children[1])
            mainContent.textContent = e.target.children[1].textContent
        }
        // console.log(e.target.nodeName)
        if (e.target.nodeName === 'IMG') {
            console.log(e.target.parentNode.children[1])
            mainContent.textContent = e.target.parentNode.children[1].textContent

        }
        if (e.target.nodeName === 'H2') {
            mainContent.textContent = e.target.textContent
        }

    })
})