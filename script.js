document.addEventListener('DOMContentLoaded', function() {
    const menuIcon = document.querySelector('.menu-icon');
    const navUl = document.querySelector('nav ul');

    menuIcon.addEventListener('click', () => {
        navUl.classList.toggle('show');
    });

    let lastScrollTop = 0;
    const HEADER = document.querySelector('header');

    window.addEventListener('scroll', function() {
        let scrollTop = window.scrollY || document.documentElement.scrollTop;
        if (scrollTop > lastScrollTop){
            HEADER.style.top = "-100vh"; // Hide header
        } else {
            HEADER.style.top = "0"; // Show header
        }
        lastScrollTop = scrollTop;
    });
});