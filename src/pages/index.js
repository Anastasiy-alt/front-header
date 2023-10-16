const search = document.querySelector('.header__search')
const navHeader = document.querySelector('.header__nav-block')
const inputSearch = document.querySelector('.header__input')
const decoSearch = document.querySelector('.header__deco')
const menuButton = document.querySelector('.menu__button')


function hiddenNav() {
    if (navHeader.classList.contains('header__nav-block_anim_close')) {
        navHeader.classList.remove('header__nav-block_anim_close')
        navHeader.classList.add('header__nav-block_anim_open')
    } else {
        navHeader.classList.add('header__nav-block_anim_close')
        navHeader.classList.remove('header__nav-block_anim_open')
    }
}

function toggleMenu() {
    menuButton.classList.toggle('menu__button_type_open')
}

search.addEventListener('click', hiddenNav)
menuButton.addEventListener('click', toggleMenu)