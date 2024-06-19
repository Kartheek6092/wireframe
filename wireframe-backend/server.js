const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware to parse JSON requests
app.use(express.json());

app.use(cors());

// Route to handle sending OTP via email
app.post('/api/send-otp', async (req, res) => {
  const { email } = req.body;

  // Generate a random OTP (4 digits)
  const otp = Math.floor(1000 + Math.random() * 9000);

  // Create a Nodemailer transporter with your email service credentials
  const transporter = nodemailer.createTransport({
    service: 'Gmail', // Update with your email service provider (e.g., 'Gmail', 'Outlook')
    auth: {
      user: 'nowitservicestestmail@gmail.com', // Your email address
      pass: 'oymq vemv ynwo ndyb', // Your email password or an app-specific password
    },
  });

  // Define email options
  const mailOptions = {
    from: 'nowitservicestestmail@gmail.com',
    to: email,
    subject: 'Your OTP for Verification',
    text: `Your OTP is: ${otp}`,
  };

  try {
    // Send the email
    await transporter.sendMail(mailOptions);
    console.log('Email sent successfully');
    res.status(200).json({ message: 'Email OTP sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ message: 'Error sending email' });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
