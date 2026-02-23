const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Test route
app.get('/', (req, res) => {
    res.send('Server is running');
});

// Contact form route
app.post('/contact', async (req, res) => {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
        return res.status(400).json({ error: 'All fields are required' });
    }

    // Configure transporter (use your Gmail / SMTP settings)
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'your_email@gmail.com',      // your Gmail
            pass: 'your_app_password',         // Gmail App Password
        },
    });

    let mailOptions = {
        from: email,
        to: 'your_email@gmail.com',           // receive emails here
        subject: `Contact Form Submission from ${name}`,
        text: message,
    };

    try {
        await transporter.sendMail(mailOptions);
        res.json({ success: 'Message sent successfully!' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Failed to send message' });
    }
});

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
