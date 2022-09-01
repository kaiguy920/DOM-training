// step 1: add text dynmaically to the div
let id = document.getElementById('note')
id.textContent = "This is pure DOM manipulation"

// step 2: changing the background of the circle on a click event
let circle = document.getElementById('circle')
circle.addEventListener('click', changeColor)

function changeColor() {
    // use a base of 16 as the hexadecimal numerical systerm has 16 different types of digits
    let randomColor = Math.floor(Math.random() * 16777216).toString(16)
    // making sure our hex number always has 6 digits, we can add/pad "0"s to the beginning of our string to ensure that the total string length is always 6
    randomColor = randomColor.padStart(6, "0")
    console.log(randomColor);
    circle.style.backgroundColor = `#${randomColor}`
}