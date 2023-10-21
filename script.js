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
            HEADER.style.top = "-10vh"; // Hide header
            HEADER.style.transition = "top 0.5s ease-in";
        } else {
            HEADER.style.top = "0"; // Show header
            HEADER.style.transition = "top 0.5s ease-out";
        }
        lastScrollTop = scrollTop;
    });
});