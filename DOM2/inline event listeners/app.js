// first step: grabbing the elements we want to change
let title = document.getElementById('title')
let para1 = document.getElementById('first-para')
let para2 = document.getElementById('second-para')

// second step: define our blue() & red() functions
function blue() {
    let color = 'blue'
    title.setAttribute('style', 'color: ' + color)
    para1.setAttribute('style', `color:   ${color}`)
    para2.setAttribute('style', 'color: ' + color)
}

function red() {
    let color = 'red'
    title.setAttribute('style', 'color: ' + color)
    para1.setAttribute('style', `color:   ${color}`)
    para2.setAttribute('style', 'color: ' + color)
}