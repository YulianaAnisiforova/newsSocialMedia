let likeButton = document.querySelectorAll('.likeButton')
let closeButton = document.querySelectorAll('.closeButton')
let newsBox = document.querySelector('.newsBox')

let isRed = () => {
    isRed =  false
}

isRed()

newsBox.addEventListener('click', (event) => {
    if (event.target.className == 'closeButton') {
        let index = event.target.id
        let post = document.getElementById(index)
        post.style.display = 'none'
    }

    if (event.target.className == 'likeButton') {
        if (!isRed) {
            event.target.style.color = 'red'
            isRed = true
        } else {
            event.target.style.color = 'rgb(71, 71, 71)'
            isRed = false
        }
    }
})