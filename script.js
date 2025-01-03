document.addEventListener('DOMContentLoaded', function() {
    // Shows and hides the menu when the menu icon is clicked
    const menuIcon = document.querySelector('.menu-icon');
    const navUl = document.querySelector('nav ul');

    menuIcon.addEventListener('click', () => {
        navUl.classList.toggle('show');
    });

    // Show and hide the header when scrolling up and down
    let lastScrollTop = 0;
    const HEADER = document.querySelector('.header-container');

    window.addEventListener('scroll', function() {
        let scrollTop = window.scrollY || document.documentElement.scrollTop;
        
        if (scrollTop > lastScrollTop) {
            // Hide header - move up by 20vh (total height of header + alert)
            HEADER.style.top = "-20vh";
            HEADER.style.transition = "top 0.5s ease-in";
        } else {
            // Show header
            HEADER.style.top = "0";
            HEADER.style.transition = "top 0.5s ease-out";
        }
        lastScrollTop = scrollTop;
        
        // Change the arm images when scrolling
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


        // Fade in and out the "I am" elements
        var iAmElements = document.querySelectorAll('.i-am');

        iAmElements.forEach(function(element) {
            var position = element.getBoundingClientRect();

            // checking whether fully visible
            if(position.bottom <= window.innerHeight) {
                element.classList.add('fade-in');
                element.classList.remove('fade-out-fast');
            } else {
                element.classList.add('fade-out-fast');
                element.classList.remove('fade-in');
            }
        });
    });
});

// Copy my button link to clipboard
function copyToClipboard() {
    navigator.clipboard.writeText('<a href="https://boop.website"><img src="https://boop.website/badges/boop.gif"></a>')
}