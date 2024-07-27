import React from 'react';
import './App.css';
import headshot from './images/headshot.JPG'

const App = () => {
  return (
    <div className="layout">
      <nav className="nav">
        <img src={headshot} alt="headshot" className='headshot-img'/>
        <ul>
          <li>ABOUT</li>
          <li>EXPERIENCE</li>
          <li>EDUCATION</li>
          <li>SKILLS</li>
          <li>INTERESTS</li>
          <li>CONTACT</li>
        </ul>
      </nav>
      <div className="content">
        <section className='content-section'>
          <h1>ABOUT</h1>
          <p>This is the about section.</p>
        </section>
        <section className='content-section'>
          <h1>EXPERIENCE</h1>
          <p>This is the experience section.</p>
        </section>
        <section className='content-section'>
          <h1>EDUCATION</h1>
          <p>This is the education section.</p>
        </section>
        <section className='content-section'>
          <h1>SKILLS</h1>
          <p>This is the skills section.</p>
        </section>
        <section className='content-section'>
          <h1>INTERESTS</h1>
          <p>This is the interests section.</p>
        </section>
        <section className='content-section'>
          <h1>CONTACT</h1>
          <p>This is the contact section.</p>
        </section>
      </div>
    </div>
  );
};

export default App;
