document.addEventListener('DOMContentLoaded', function() {
    const menuIcon = document.querySelector('.menu img');
    const nav = document.querySelector('nav');
    const headerBtn = document.querySelector('.header__btn');
    const navUl = document.querySelector('nav ul');

    menuIcon.addEventListener('click', function() {
        nav.classList.toggle('toggled');
        headerBtn.classList.toggle('toggled');
        navUl.classList.toggle('toggled');
    });
});
