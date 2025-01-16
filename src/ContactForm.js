import React, { useState, useRef, useEffect, createRef } from 'react';
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

const ContactForm = () => {
  const [status, setStatus] = useState(null);
  const [formValue, setFormValue] = useState({
    user_name: "",
    message: "",
    user_email: "",
  });

  const refCaptcha = createRef();
  const form = useRef();

  useEffect(() => {
    let timeout;

    if (status === true || false) {
      // Show the info message for 9 seconds
      timeout = setTimeout(() => {
        setStatus(null);
      }, 10000);
    }

    return () => {
      if (timeout) {
        clearTimeout(timeout);
        setStatus(null);
      }
    };
  }, [status]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const token = refCaptcha.current.getValue();
    setStatus(true);

    const params = {
      ...formValue,
      "g-recaptcha-response": token,
    };

    switch (true) {
      case formValue.user_name === "":
        showNotification(
          "Name Required!",
          "Name cannot be blank",
          "warning",
        );
        setStatus(false);
        break;

      case formValue.user_email === "":
        showNotification(
          "Email Required!",
          "Email cannot be blank",
          "warning",
        );
        setStatus(false);
        break;

      case formValue.message === "":
          showNotification(
            "Message Required!",
            "Please include a message",
            "warning",
          );
          setStatus(false);
          break;

      case token === undefined:
        console.log("reCAPTCHA error");
        showNotification(
          "reCAPTCHA error!",
          "There was an error sending your message.",
          "danger",
        );
        setStatus(false);
        break;

      default:
        emailjs
          .sendForm( 
            process.env.REACT_APP_EMAILJS_SERVICE_ID,
            process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
            form.current,
            process.env.REACT_APP_ACCOUNT_PUBLIC_KEY
          )
          .then(
            (response) => {
              if (response.status === 200) {
                showNotification(
                  "Success!",
                  "Your message has been sent!",
                  "success",
                );
                window.grecaptcha.reset();
                setStatus(false);
                setFormValue({
                  user_name: "",
                  message: "",
                  user_email: ""
                });
              }
            },
            (err) => {
              showNotification(
                "Missing reCAPTCHA!",
                "Please verify reCAPTCHA",
                "warning",
              );
              setStatus(false);
              setFormValue({});
              console.error(err)
            }
          );
    }
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
        <form ref={form} onSubmit={handleSubmit}>
          <div className={styles.formGroup}>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              name="user_name"
              placeholder="John Doe"
              value={formValue.user_name}
              onChange={(e) =>
                setFormValue({ ...formValue, user_name: e.target.value })
              }
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              name="user_email"
              placeholder="JohnDoe@email.com"
              value={formValue.user_email}
              onChange={(e) =>
                setFormValue({ ...formValue, user_email: e.target.value })
              }
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="message">Message:</label>
            <textarea
              name="message"
              rows="5"
              value={formValue.message}
              onChange={(e) =>
                setFormValue({ ...formValue, message: e.target.value })
              }
            />
          </div>
          <ReCAPTCHA
            sitekey={process.env.REACT_APP_RECAPTCHA_SITE_KEY}
            ref={refCaptcha}
            onChange={() => setStatus(null)}
          />
          <button type="submit">
            Send Message
          </button>
        </form>
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
