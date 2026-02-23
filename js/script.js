// Mobile menu toggle
const toggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

toggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Form validation
const form = document.getElementById('contactForm');
const message = document.getElementById('formMessage');

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const userMessage = document.getElementById('message').value.trim();

    if (name === '' || email === '' || userMessage === '') {
        message.style.color = 'red';
        message.textContent = 'Please fill in all fields.';
        return;
    }

    message.style.color = 'green';
    message.textContent = 'Message sent successfully!';
    form.reset();
});
