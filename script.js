// JavaScript functionality for scroll animations, smooth transitions, back-to-top button, form validation, and interactive elements

// Scroll animations
window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    const elements = document.querySelectorAll('.scroll-animation');
    elements.forEach((el) => {
        const elementY = el.getBoundingClientRect().top + window.scrollY;
        if (scrollY + window.innerHeight > elementY) {
            el.classList.add('visible');
        }
    });
});

// Smooth transitions
const links = document.querySelectorAll('a[href^="#"]');
links.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({ behavior: 'smooth' });
    });
});

// Back-to-top button
const backToTopButton = document.createElement('button');
backToTopButton.innerText = 'Back to Top';
backToTopButton.className = 'back-to-top';
document.body.appendChild(backToTopButton);

backToTopButton.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Form validation
const forms = document.querySelectorAll('form');
forms.forEach(form => {
    form.addEventListener('submit', (e) => {
        let isValid = true;
        const inputs = form.querySelectorAll('input, textarea');
        inputs.forEach(input => {
            if (!input.value) {
                isValid = false;
                input.classList.add('error');
            }
        });
        if (!isValid) {
            e.preventDefault();
            alert('Please fill in all fields.');
        }
    });
});

// Interactive elements
const interactiveElements = document.querySelectorAll('.interactive');
interactiveElements.forEach(el => {
    el.addEventListener('click', () => {
        el.classList.toggle('active');
    });
});