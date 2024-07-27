import React, { useEffect, useState, useRef } from 'react';
import './App.css';
import headshot from './images/headshot.JPG';

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
          <h1>ABOUT</h1>
          <p>This is the about section.</p>
        </section>
        <section id="Experience" ref={sectionRefs.Experience} className="content-section">
          <h1>EXPERIENCE</h1>
          <p>This is the experience section.</p>
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
