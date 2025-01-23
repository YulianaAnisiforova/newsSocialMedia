let likeButton = document.querySelector('.likeButton')
let likeLabel = document.querySelector('.likeLabel')
let closeButton = document.querySelector('.closeButton')

let isRed = () => {
    isRed = false
}
isRed()

let isShown = () => {
    isShown = false
}
isShown()

likeButton.onclick = () => {
    if (!isRed) {
        likeButton.style.color = 'red'
        isRed = true
    } else {
        likeButton.style.color = 'rgb(71, 71, 71)'
        isRed = false
    }

    if (!isShown) {
        likeLabel.style.visibility = 'visible'
        isShown = true
    } else {
        likeLabel.style.visibility = 'hidden'
        isShown = false
    }
}

closeButton.onclick = () => {
    let index = closeButton.id
    let post = document.getElementById(index)
    post.style.display = 'none'
}

