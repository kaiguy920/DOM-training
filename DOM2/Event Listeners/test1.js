// step 1: add text dynmaically to the div
let id = document.getElementById('note')
id.textContent = "This is pure DOM manipulation"

// step 2: changing the background of the circle on a click event
let circle = document.getElementById('circle')
circle.addEventListener('click', changeColor)

function changeColor() {
    let randomColor = Math.floor(Math.random() * 16777216).toString(16)
    console.log(randomColor);
    circle.style.backgroundColor = `#${randomColor}`
}