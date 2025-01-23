let likeButton = document.querySelectorAll('.likeButton')
let likeLabel = document.querySelectorAll('.likeLabel')
let closeButton = document.querySelectorAll('.closeButton')
let newsBox = document.querySelector('.newsBox')

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

newsBox.addEventListener('click', (event) => {
    if (event.target.className == 'closeButton') {
        for (let i = 0; i < closeButton.length; i++) {
            let index = event.target.id
            let post = document.getElementById(index)
            post.style.display = 'none'
        }
    }

    if (event.target.className == 'likeButton') {
        for (let i = 0; i < likeButton.length; i++) {
            let index = event.target
            if (index.style.color === 'rgb(71, 71, 71)') {
                index.style.color = 'red'
                let text = document.getElementById(index)
                text.style.visibility = 'visible'
            } else {
                index.style.color = 'rgb(71, 71, 71)'
            }
        }
    }
})