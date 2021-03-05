let hamburger = document.querySelector('.hamburger-menu__hamburger'),
    menu = document.querySelector('.hamburger-menu__menu');

hamburger.addEventListener('click', function() {
    hamburger.classList.toggle('is-active');
    menu.classList.toggle('hamburger-menu__menu-active');
});