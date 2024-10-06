import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import ReCAPTCHA from 'react-google-recaptcha';
import styles from './ContactForm.module.css';

const RECAPTCHA_SITE_KEY = process.env.REACT_APP_RECAPTCHA_SITE_KEY;

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [responseMessage, setResponseMessage] = useState('');
  const [captchaToken, setCaptchaToken] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
  
    const recaptchaValue = window.grecaptcha.getResponse();
    if (!recaptchaValue) {
      setResponseMessage('*Please complete the reCAPTCHA.');
      setIsSubmitting(false);
      return;
    }
  
    // Send the reCAPTCHA token to your backend for verification
    fetch('http://localhost:5000/verify-recaptcha', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ token: recaptchaValue }),
    })
    .then(response => response.json())
    .then(data => {
      if (data.message === 'reCAPTCHA verified successfully') {
        // reCAPTCHA verification passed, send the email
        const serviceID = process.env.REACT_APP_EMAILJS_SERVICE_ID;
        const templateID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
        const userID = process.env.REACT_APP_EMAILJS_USER_ID;
  
        emailjs.send(serviceID, templateID, { 
          ...formData, 
          'g-recaptcha-response': recaptchaValue 
        }, userID)
          .then(
            (response) => {
              console.log('SUCCESS!', response.status, response.text);
              setResponseMessage('*Your message has been sent!');
            },
            (err) => {
              console.error('FAILED...', err);
              setResponseMessage('*There was an error sending your message.');
            }
          )
          .finally(() => {
            setIsSubmitting(false);
            setFormData({
              name: '',
              email: '',
              message: '',
            });
            setCaptchaToken('');
            window.grecaptcha.reset();
          });
      } else {
        setResponseMessage('*reCAPTCHA verification failed. Please try again.');
        setIsSubmitting(false);
      }
    })
    .catch((error) => {
      console.error('Error verifying reCAPTCHA:', error);
      setResponseMessage('*There was an error verifying reCAPTCHA.');
      setIsSubmitting(false);
    });
  };
  

  return (
    <div className={styles.contactForm}>
      <p className={styles.backendDown}>*This widget has been disabled since backend is not running.</p>
      <h2>Contact Me</h2>
      <form onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="John Doe"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="JohnDoe@email.com"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="message">Message:</label>
          <textarea
            name="message"
            id="message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </div>
        <ReCAPTCHA
          sitekey={RECAPTCHA_SITE_KEY}
          onChange={setCaptchaToken}
        />
        <button type="submit" disabled /* ={isSubmitting} */>   
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </button>
      </form>
      {responseMessage && <p className={styles.responseMessage}>{responseMessage}</p>}
    </div>
  );
};

export default ContactForm;
