// script.js file to handle scroll animations, smooth transitions, back-to-top button, form validation, and interactive elements

// Scroll animations
window.addEventListener('scroll', function() {
    const scrollPosition = window.scrollY;
    // Implement your scroll animation logic here
});

// Smooth transitions
const smoothScroll = (target) => {
    const targetPosition = document.querySelector(target).offsetTop;
    window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
    });
};

// Back-to-top button
const backToTopButton = document.createElement('button');
backToTopButton.innerText = 'Back to Top';
backToTopButton.id = 'backToTop';
backToTopButton.style.display = 'none'; // initially hidden

backToTopButton.addEventListener('click', () => {
    smoothScroll('body');
});

document.body.appendChild(backToTopButton);

window.addEventListener('scroll', () => {
    if (window.scrollY > 200) {
        backToTopButton.style.display = 'block';
    } else {
        backToTopButton.style.display = 'none';
    }
});

// Form validation
const form = document.querySelector('form');
form.addEventListener('submit', (event) => {
    event.preventDefault();
    const inputs = form.querySelectorAll('input');
    let valid = true;

    inputs.forEach(input => {
        if (!input.value) {
            valid = false;
            input.classList.add('input-error'); // Highlight error
        } else {
            input.classList.remove('input-error');
        }
    });

    if (valid) {
        form.submit(); // Submit if all fields are valid
    }
});

// Interactive elements
const interactiveElements = document.querySelectorAll('.interactive');
interactiveElements.forEach(element => {
    element.addEventListener('click', () => {
        // Implement interactive functionality here
    });
});