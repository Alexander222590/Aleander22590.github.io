const express = require('express');
const router = express.Router();

// POST contact form API endpoint
router.post('/contact', (req, res) => {
    const { name, email, message } = req.body;

    // Here, you would typically handle the contact form submission,
    // such as saving to a database or sending an email.

    res.status(200).json({
        status: 'success',
        message: 'Contact form submitted successfully!'
    });
});

module.exports = router;