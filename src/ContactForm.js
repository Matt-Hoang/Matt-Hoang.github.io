import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import ReCAPTCHA from 'react-google-recaptcha';
import styles from './ContactForm.module.css';
import SocialsComponent from './SocialsComponent';
import DownloadResumeBtn from './DownloadResumeBtn';

import { Store } from 'react-notifications-component'

// import icons
import { FaRegCopy } from "react-icons/fa";
import { FaCopy } from "react-icons/fa6";

let isMobile = window.innerWidth <= 700; // Initial check for screen size

function showNotification(title, message, type = "danger") {
  Store.addNotification({
    title: title,
    message: message,
    type: type, // 'default', 'success', 'info', 'warning', 'danger'
    insert: "top", // 'top' or 'bottom'
    container: isMobile ? "top-left" : "top-right", // 'top-left', 'top-right', 'top-center', 'bottom-left', 'bottom-right', 'bottom-center'
    animationIn: ["animate__animated", "animate__fadeIn"], // animate.css classes
    animationOut: ["animate__animated", "animate__fadeOut"], // animate.css classes
    dismiss: {
      duration: 5000, // auto-dismiss after 5 seconds
      onScreen: true,
      showIcon: true,
    },
  });
}

// Update `isMobile` on window resize
window.addEventListener("resize", () => {
  isMobile = window.innerWidth <= 700;
});

const RECAPTCHA_SITE_KEY = process.env.REACT_APP_RECAPTCHA_SITE_KEY;

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [responseMessage] = useState('');
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
      showNotification(
        "Incomplete form!",
        "Please complete the reCAPTCHA.",
        "warning",
      );
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
                showNotification(
                  "Success!",
                  "Your message has been sent!",
                  "success",
                );
              },
              (err) => {
                console.error('FAILED...', err);
                showNotification(
                  "FAILED!",
                  "There was an error sending your message.",
                  "danger",
                );
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
          showNotification(
            "Server Error!",
            "reCAPTCHA verification failed.",
            "danger",
          );
          setIsSubmitting(false);
        }
      })
      .catch((error) => {
        console.error('Error verifying reCAPTCHA:', error);
        showNotification(
          "FAILED!",
          "There was an error verifying reCAPTCHA.",
          "danger",
        );
        setIsSubmitting(false);
      });
  };

  function copyText() {
    // Get text content of element and copy text
    const copyText = document.getElementById("emailAddress").textContent;
    navigator.clipboard.writeText(copyText);

    // Update tooltip
    var tooltip = document.getElementById("copyToolTip");
    tooltip.innerHTML = "Copied!";
  }

  function resetToolTip() {
    var tooltip = document.getElementById("copyToolTip");
    tooltip.innerHTML = "Copy Email";
  }

  return (
    <div className={styles.contactContainer}>
      <div className={styles.contactForm}>
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
          <button type="submit" disabled ={isSubmitting}>
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </button>
        </form>
        {responseMessage && <p className={styles.responseMessage}>{responseMessage}</p>}
      </div>
      <div className={styles.contactInfo}>
        <h2>Contact Info</h2>
        <p>Matt Hoang</p>
        <p>Garden Grove, CA</p>
        <button onClick={copyText} onMouseLeave={resetToolTip}>
          <p id='emailAddress' className={styles.emailAddress}>matthoang19@gmail.com</p>
          <span id="copyToolTip" className={styles.copyToolTip}>Copy Email</span>
          <span className={styles.defaultCopyIcon}>
            <FaRegCopy className={styles.copyIcon}/>
          </span>
          <span className={styles.hoverCopyIcon}>
            <FaCopy className={styles.copyIcon}/>
          </span>
        </button>
        <DownloadResumeBtn customMargin="20px auto"/>
        <SocialsComponent customMargin="25px 0 0 0" customSpacing="space-evenly"/>
      </div>
    </div>
  );
};

export default ContactForm;
