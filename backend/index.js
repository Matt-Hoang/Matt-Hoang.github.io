const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const axios = require('axios');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(bodyParser.json());
app.use(cors({
  origin: 'http://localhost:3000', // Allow frontend to access backend
}));

// Define your routes here
app.get('/', (req, res) => {
  res.send('Server is running!');
});

// reCAPTCHA verification endpoint
app.post('/verify-recaptcha', async (req, res) => {
  const { token } = req.body;

  if (!token) {
    return res.status(400).json({ message: 'Token is missing' });
  }

  try {
    const secretKey = process.env.RECAPTCHA_SECRET_KEY; 
    const verificationURL = `https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${token}`;

    const response = await axios.post(verificationURL, null, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    });

    if (response.data.success) {
      return res.status(200).json({ message: 'reCAPTCHA verified successfully' });
    } else {
        console.log('reCAPTCHA verification failed:', response.data['error-codes']);
        return res.status(400).json({ message: `reCAPTCHA verification failed: ${response.data['error-codes'].join(', ')}` });
    }
  } catch (error) {
    console.error('Error verifying reCAPTCHA:', error.response ? error.response.data : error.message);
    return res.status(500).json({ message: 'Internal server error' });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});