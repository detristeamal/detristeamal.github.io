const hamburger = document.querySelector('.header__btn_me'),
    menu = document.querySelector('.hamburger'),
    closeElem = document.querySelector('.hamburger__menu_close'),
    closeOverlay = document.querySelector('.hamburger__overlay');

hamburger.addEventListener('click', ()=> {
    menu.classList.add('active')
});

closeElem.addEventListener('click', ()=> {
    menu.classList.remove('active')
});

closeOverlay.addEventListener('click', ()=> {
    menu.classList.remove('active')
});
 