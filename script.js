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
            HEADER.style.top = (-HEADER.offsetHeight).toString() + "px"; // Hide header
            HEADER.style.transition = "top 0.5s ease-in";
        } else {
            HEADER.style.top = "0"; // Show header
            HEADER.style.transition = "top 0.5s ease-out";
        }
        lastScrollTop = scrollTop;

        var leftImg = document.querySelector('.left-image'); 
        var rightImg = document.querySelector('.right-image');
        var leftRect = leftImg.getBoundingClientRect();
        var third = window.innerHeight / 3;

        if (leftRect.top < third) {
            leftImg.src = 'images/pixel arm raising3.png';
            rightImg.src = 'images/pixel arm raising3.png';
        } else if (leftRect.top < 2 * third) {
            leftImg.src = 'images/pixel arm raising2.png';
            rightImg.src = 'images/pixel arm raising2.png';
        } else {
            leftImg.src = 'images/pixel arm raising1.png';
            rightImg.src = 'images/pixel arm raising1.png';
        }
    });

    
});