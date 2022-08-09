// 1. we need to grab <div> with the ID of "content"
let content = document.getElementById('content')
let button = document.getElementById('show-more')

// 2. change the max-height of the <div> element
// add event listener & handler via inline property approach
button.onclick = () => {
    if (content.className == "") {
        // expand the box
        content.className = "open"
        button.innerHTML = "Collapse Now"
    } else {
        // collapse the box
        content.className = ""
        button.innerHTML = "Expand"
    }

}
// 3. change the text of the button