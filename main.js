const burgerIcon = document.getElementById('burger-btn')
const closeBtn = document.getElementById('close-btn')
const burgerMenu = document.getElementById('burger-menu')
const body = document.body


function burger() {

    burgerMenu.classList.toggle('show-burger-menu')
    closeBtn.classList.toggle('show-close-btn')
    burgerIcon.classList.toggle('hide-burger-btn')
    body.classList.toggle('no-scroll')


}


burgerIcon.addEventListener('click', burger)
closeBtn.addEventListener('click', burger)

