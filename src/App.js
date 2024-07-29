import React, { useEffect, useState, useRef } from 'react';
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa'; // Import icons
import './App.css';
import headshot from './images/headshot.JPG';
import Experience from './Experience';

const App = () => {
  const [activeSection, setActiveSection] = useState('About');

  const sectionRefs = {
    About: useRef(null),
    Experience: useRef(null),
    Education: useRef(null),
    Skills: useRef(null),
    Interests: useRef(null),
    Contact: useRef(null)
  };

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.6
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, options);

    Object.values(sectionRefs).forEach((ref) => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    return () => {
      Object.values(sectionRefs).forEach((ref) => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      });
    };
  }, []);

  const handleScrollToSection = (section) => {
    sectionRefs[section].current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="layout">
      <nav className="nav">
        <img src={headshot} alt="headshot" className="headshot-img" />
        <ul>
          <li className={activeSection === 'About' ? 'active' : ''} onClick={() => handleScrollToSection('About')}>ABOUT</li>
          <li className={activeSection === 'Experience' ? 'active' : ''} onClick={() => handleScrollToSection('Experience')}>EXPERIENCE</li>
          <li className={activeSection === 'Education' ? 'active' : ''} onClick={() => handleScrollToSection('Education')}>EDUCATION</li>
          <li className={activeSection === 'Skills' ? 'active' : ''} onClick={() => handleScrollToSection('Skills')}>SKILLS</li>
          <li className={activeSection === 'Interests' ? 'active' : ''} onClick={() => handleScrollToSection('Interests')}>INTERESTS</li>
          <li className={activeSection === 'Contact' ? 'active' : ''} onClick={() => handleScrollToSection('Contact')}>CONTACT</li>
        </ul>
      </nav>
      <div className="content">
        <section id="About" ref={sectionRefs.About} className="content-section">
          <h1>Matthew Hoang</h1>
          <h5>Garden Grove, CA | (714) 618-2844 | MattHoang19@gmail.com</h5>
          <p>hello world hello world hello world hello world hello world hello world hello world hello world hello world hello world hello world hello world hello world hello world hello world hello world hello world hello world hello world hello world hello world hello world hello world hello world hello world hello world hello world hello world hello world hello world hello world hello world hello world hello world hello world </p>
          <div className="social-icons">
            <a href="https://www.linkedin.com/in/matthewhhoang" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="icon" />
            </a>
            <a href="https://github.com/Matt-Hoang" target="_blank" rel="noopener noreferrer">
              <FaGithub className="icon" />
            </a>
            <a href="https://www.instagram.com/matt_hoang/" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="icon" />
            </a>
          </div>
        </section>
        <section id="Experience" ref={sectionRefs.Experience} className="content-section">
          <h1>EXPERIENCE</h1>
          <Experience
            position="Software Engineer"
            company="Tech Company"
            dates="Jan 2020 - Present"
            description="Developed various web applications using React and Node.js."
          />
          <Experience
            position="Software Engineer"
            company="Tech Company"
            dates="Jan 2020 - Present"
            description="Developed various web applications using React and Node.js."
          />
        </section>
        <section id="Education" ref={sectionRefs.Education} className="content-section">
          <h1>EDUCATION</h1>
          <p>This is the education section.</p>
        </section>
        <section id="Skills" ref={sectionRefs.Skills} className="content-section">
          <h1>SKILLS</h1>
          <p>This is the skills section.</p>
        </section>
        <section id="Interests" ref={sectionRefs.Interests} className="content-section">
          <h1>INTERESTS</h1>
          <p>This is the interests section.</p>
        </section>
        <section id="Contact" ref={sectionRefs.Contact} className="content-section">
          <h1>CONTACT</h1>
          <p>This is the contact section.</p>
        </section>
      </div>
    </div>
  );
};

export default App;
