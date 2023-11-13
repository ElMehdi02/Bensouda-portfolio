const header = document.querySelector("header");

function stickyNavbar(){
    header.classList.toggle("scrolled", window.pageYOffset > 0 && 'sicky', window.scrollY > 100);

    menuIcon.classList.remove('uil-times');
    navbar.classList.remove('active')
}

window.addEventListener("scroll", stickyNavbar);

/* menu icon */

let menuIcon = document.querySelector('#menu');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('uil-times');
    navbar.classList.toggle('active');
}


/* scolling */

ScrollReveal({
    duration: 1500,
    distance: "60px",
});


ScrollReveal().reveal('.programming', { delay: 10});
ScrollReveal().reveal('.sub-heading', { delay: 1000});
ScrollReveal().reveal('.heading', { delay: 100});
ScrollReveal().reveal('.text', { delay: 1800});

/* btn */

ScrollReveal().reveal(".cta .second-btn", { delay: 2500});
ScrollReveal().reveal(".cta .btn", { delay: 2000});
ScrollReveal().reveal(".btn-hire", { delay: 2000});
 
/* work */
ScrollReveal().reveal('.text-work', { delay: 300});
ScrollReveal().reveal('.text-chat', { delay: 300});
ScrollReveal().reveal('.heading-work', { delay: 100});
ScrollReveal().reveal('.heading-service', { delay: 100});

/* pics */

ScrollReveal().reveal('.image-container', { delay: 1800});

