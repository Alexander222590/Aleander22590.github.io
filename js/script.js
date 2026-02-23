// Mobile menu toggle
const toggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

toggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Form validation
const form = document.getElementById('contactForm');
const message = document.getElementById('formMessage');

form.addEventListener('submit', async function(e) {
    e.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const userMessage = document.getElementById('message').value.trim();

    if (!name || !email || !userMessage) {
        message.style.color = 'red';
        message.textContent = 'Please fill in all fields.';
        return;
    }

    try {
        const response = await fetch('http://localhost:5000/contact', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name, email, message: userMessage })
        });

        const data = await response.json();

        if (data.error) {
            message.style.color = 'red';
            message.textContent = data.error;
        } else {
            message.style.color = 'green';
            message.textContent = data.success;
            form.reset();
        }

    } catch (err) {
        message.style.color = 'red';
        message.textContent = 'Server error, try again later.';
        console.error(err);
    }
});