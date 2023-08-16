// Script for the title //
const originalTitle = document.title;

function updateTitle(text) {
    document.title = `${text} | ${originalTitle}`;
    sessionStorage.setItem('currentPageTitle', text);
}

window.addEventListener('load', function () {
    const currentPageTitle = sessionStorage.getItem('currentPageTitle');
    if (currentPageTitle) {
        updateTitle(currentPageTitle);
    }
});

const logoLink = document.querySelector('.logo a');
logoLink.addEventListener('click', function (event) {
    event.preventDefault();
    updateTitle("home");
});

const navLinks = document.querySelectorAll('.nav-link, .footer-about, .button2, .button-menu');
navLinks.forEach(link => {
    link.addEventListener('click', function (event) {
        event.preventDefault();
        const href = this.getAttribute('href');
        const fileName = href.split('/').pop().split('.')[0];
        updateTitle(fileName);
        sessionStorage.setItem('currentPageURL', href);
        setTimeout(function () {
            window.location.href = href;
        }, 500);
    });
});

// End of script //
// Script for disabling drag//

document.addEventListener('dragstart', function (event) {
    event.preventDefault();
});

// End of script //
// Script for redirecting page to nav-link//

const nav = document.querySelectorAll('.nav-link, .nav-logo, .button2, .button-menu');
const body = document.body;

nav.forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();

        const href = link.getAttribute('href');

        if (href) {
            body.classList.add('fade-out');
            setTimeout(() => {
                window.location.href = href;
            }, 500); // Redirect after half a second
        }
    });
});

//End of script //
// Script for ham-menu  //

if (window.innerWidth < 921) {
    const hamburger = document.querySelector('#hamburger');
    const mobileMenu = document.querySelector('.top-nav');

    hamburger.addEventListener('click', function () {
        this.classList.toggle('active');
        mobileMenu.classList.toggle('hide')
    });
}

//End of script //
// Script for smooth scroll //

const navscroll = document.querySelectorAll('.button1, .button, .button-1');

navscroll.forEach((link) => {
    link.addEventListener('click', (event) => {
        event.preventDefault();

        const targetId = link.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        targetSection.scrollIntoView({
            behavior: 'smooth'
        });
    });
});
