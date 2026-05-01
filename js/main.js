// main.js - Core interactivity and animations

document.addEventListener('componentsLoaded', () => {
    initNavigation();
    initScrollAnimations();
    setActiveNavLink();
});

function initNavigation() {
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const navLinks = document.getElementById('nav-links');
    const navbar = document.getElementById('navbar');

    if (mobileMenuBtn && navLinks) {
        mobileMenuBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            
            // Hamburger animation
            const bars = mobileMenuBtn.querySelectorAll('span');
            if(navLinks.classList.contains('active')) {
                bars[0].style.transform = 'rotate(-45deg) translate(-5px, 6px)';
                bars[1].style.opacity = '0';
                bars[2].style.transform = 'rotate(45deg) translate(-5px, -6px)';
            } else {
                bars[0].style.transform = 'none';
                bars[1].style.opacity = '1';
                bars[2].style.transform = 'none';
            }
        });
    }

    // Navbar scroll effect
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
}

function setActiveNavLink() {
    // Get the current page filename from the URL, or default to index.html
    let path = window.location.pathname;
    let page = path.split("/").pop();
    if (!page || page === "") page = "index.html";

    const links = document.querySelectorAll('.nav-link');
    links.forEach(link => {
        const linkHref = link.getAttribute('href');
        // Match href to current page
        if (linkHref === page) {
            link.classList.add('active');
        }
    });
}

function initScrollAnimations() {
    const fadeElements = document.querySelectorAll('.fade-in');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // Optional: Stop observing once visible if you only want it to fade in once
                // observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    });

    fadeElements.forEach(el => {
        observer.observe(el);
    });
}
