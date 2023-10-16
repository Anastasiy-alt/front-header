const search = document.querySelector('.header__search')
const navHeader = document.querySelector('.header__nav-block')
const inputSearch = document.querySelector('.header__input')
const decoSearch = document.querySelector('.header__deco')
const menuButton = document.querySelector('.menu__button')
const menu = document.querySelector('.menu__nav')
const menuFirstItem = document.getElementById('first')
const menuFirstListDesk = document.getElementById('first-list')
const menuFirstListMob = document.getElementById('first-list-mob')
const menuSecondItem = document.getElementById('second')
const menuSecondListDesk = document.getElementById('second-list')
const menuSecondListMob = document.getElementById('second-list-mob')
const arrowButtonFirst = document.getElementById('arrow-button-first')
const arrowButtonSecond = document.getElementById('arrow-button-second')
const header = document.querySelector('.header')

function openFirstItemList() {
    menuFirstListDesk.classList.toggle('menu_is-open_true')
    menuFirstListMob.classList.toggle('menu_is-open_true')
    arrowButtonFirst.classList.toggle('menu__item-button_type_mob')
    if (menuSecondListDesk.classList.contains('menu_is-open_true')) {
        menuSecondListDesk.classList.remove('menu_is-open_true')
    }
}
menuFirstItem.addEventListener('click', openFirstItemList)

function openSecondItemList() {
    menuSecondListDesk.classList.toggle('menu_is-open_true')
    if (menuFirstListDesk.classList.contains('menu_is-open_true')) {
        menuFirstListDesk.classList.remove('menu_is-open_true')
    }
    menuSecondListMob.classList.toggle('menu_is-open_true')
    arrowButtonSecond.classList.toggle('menu__item-button_type_mob')
}
menuSecondItem.addEventListener('click', openSecondItemList)


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
    menu.classList.toggle('menu_is-open_true')
    header.classList.toggle('header_type_visible')
}

search.addEventListener('click', hiddenNav)
menuButton.addEventListener('click', toggleMenu)