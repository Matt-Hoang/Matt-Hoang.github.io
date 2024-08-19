import React, { useEffect, useState, useRef } from 'react';
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa'; // Import icons
import './App.css';
import Experience from './Experience';
import Projects from './Projects';
import TechnicalSkills from './technical-skills';


const App = () => {
  const [activeSection, setActiveSection] = useState('About');

  const sectionRefs = {
    About: useRef(null),
    Experience: useRef(null),
    Projects: useRef(null),
    Skills: useRef(null),
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
        <img src={require('./images/headshot.JPG')} alt="headshot" className="headshot-img" />
        <ul>
          <li className={activeSection === 'About' ? 'active' : ''} onClick={() => handleScrollToSection('About')}>ABOUT</li>
          <li className={activeSection === 'Experience' ? 'active' : ''} onClick={() => handleScrollToSection('Experience')}>EXPERIENCE</li>
          <li className={activeSection === 'Projects' ? 'active' : ''} onClick={() => handleScrollToSection('Projects')}>PROJECTS</li>
          <li className={activeSection === 'Skills' ? 'active' : ''} onClick={() => handleScrollToSection('Skills')}>SKILLS</li>
          <li className={activeSection === 'Contact' ? 'active' : ''} onClick={() => handleScrollToSection('Contact')}>CONTACT</li>
        </ul>
      </nav>
      <div className="content">
        <section id="About" ref={sectionRefs.About} className="content-section">
          <h1>
            <span className="first-name">MATT </span>
            <span className="last-name">HOANG</span>
          </h1>
          <h5>Garden Grove, CA • (714) 618-2844 • MattHoang19@gmail.com</h5>
          <p>Hi, I’m Matt Hoang! I graduated from California State University Long Beach (CSULB) with a bachelor’s degree in computer science. My primary focus is software development, where I’ve built a variety of web and desktop applications. I’m also keen on expanding my expertise into data and analytics as well as IT infrastructure and security.</p>
          <p>Outside of my professional pursuits, I cherish time with my dog Lulu and my family. I’m passionate about staying active, whether it’s indoor bouldering and lifting during the week or exploring the great outdoors with hiking and backpacking whenever I can.</p>
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
            position="Information Technolgy Leadership Program"
            company="Pacific Life"
            dates="July 2024 - Present"
            description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga deleniti labore excepturi magni porro tempore iure ipsa quidem perspiciatis aliquid laudantium eum id, facere vitae assumenda consequuntur quae! Minus, natus! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga deleniti labore excepturi magni porro tempore iure ipsa quidem perspiciatis aliquid laudantium eum id, facere vitae assumenda consequuntur quae! Minus, natus! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga deleniti labore excepturi magni porro tempore iure ipsa quidem perspiciatis aliquid laudantium eum id, facere vitae assumenda consequuntur quae! Minus, natus!"
          />
          <Experience
            position="Application Developer"
            company="Pacific Life"
            dates="January 2024 - June 2024"
            description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga deleniti labore excepturi magni porro tempore iure ipsa quidem perspiciatis aliquid laudantium eum id, facere vitae assumenda consequuntur quae! Minus, natus! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga deleniti labore excepturi magni porro tempore iure ipsa quidem perspiciatis aliquid laudantium eum id, facere vitae assumenda consequuntur quae! Minus, natus! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga deleniti labore excepturi magni porro tempore iure ipsa quidem perspiciatis aliquid laudantium eum id, facere vitae assumenda consequuntur quae! Minus, natus!"
          />
          <Experience
            position="Digital Technology Intern"
            company="Pacific Life"
            dates="May 2023 - December 2023"
            description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga deleniti labore excepturi magni porro tempore iure ipsa quidem perspiciatis aliquid laudantium eum id, facere vitae assumenda consequuntur quae! Minus, natus! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga deleniti labore excepturi magni porro tempore iure ipsa quidem perspiciatis aliquid laudantium eum id, facere vitae assumenda consequuntur quae! Minus, natus! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga deleniti labore excepturi magni porro tempore iure ipsa quidem perspiciatis aliquid laudantium eum id, facere vitae assumenda consequuntur quae! Minus, natus!"
          />
          <Experience
            position="Cloud Engineering/Computer Science Intern"
            company="Scientific Applications & Research Associates, (SARA) Inc. · Internship"
            dates="May 2022 - March 2023"
            description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga deleniti labore excepturi magni porro tempore iure ipsa quidem perspiciatis aliquid laudantium eum id, facere vitae assumenda consequuntur quae! Minus, natus! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga deleniti labore excepturi magni porro tempore iure ipsa quidem perspiciatis aliquid laudantium eum id, facere vitae assumenda consequuntur quae! Minus, natus! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga deleniti labore excepturi magni porro tempore iure ipsa quidem perspiciatis aliquid laudantium eum id, facere vitae assumenda consequuntur quae! Minus, natus!"
          />
        </section>
        <section id="Projects" ref={sectionRefs.Projects} className="content-section">
          <h1>PROJECTS</h1>
          <div>
            <Projects
              title="Personal Website"
              skills="React"
              image={require('./images/projects/Personal-Website.png')}
              description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga deleniti labore excepturi magni porro tempore iure ipsa quidem perspiciatis aliquid laudantium eum id, facere vitae assumenda consequuntur quae! Minus, natus! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga deleniti labore excepturi magni porro tempore iure ipsa quidem perspiciatis aliquid laudantium eum id, facere vitae assumenda consequuntur quae! Minus, natus!"
              links = {[
                {text: "GitHub", url: ""},
              ]}
            />
            <Projects
              title="Census Helper Tool"
              skills="Python | MVC | JFrog Artifactory | SonarQube | Pipelines"
              image={require('./images/projects/Census-Helper.png')}
              description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga deleniti labore excepturi magni porro tempore iure ipsa quidem perspiciatis aliquid laudantium eum id, facere vitae assumenda consequuntur quae! Minus, natus! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga deleniti labore excepturi magni porro tempore iure ipsa quidem perspiciatis aliquid laudantium eum id, facere vitae assumenda consequuntur quae! Minus, natus!"
            />
            <Projects
              title="QuackQuackGo"
              skills="HTML | CSS | JS | Firebase | APIs"
              image={require('./images/projects/QuackQuackGo.jpeg')}
              description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga deleniti labore excepturi magni porro tempore iure ipsa quidem perspiciatis aliquid laudantium eum id, facere vitae assumenda consequuntur quae! Minus, natus! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga deleniti labore excepturi magni porro tempore iure ipsa quidem perspiciatis aliquid laudantium eum id, facere vitae assumenda consequuntur quae! Minus, natus!"
              links = {[
                {text: "GitHub", url: ""},
                {text: "Youtube", url: ""}
              ]}
            />
            <Projects
              title="Dungeon Master"
              skills="Java - Design Patterns"
              image={require('./images/projects/Dungeon-Master.jpg')}
              description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga deleniti labore excepturi magni porro tempore iure ipsa quidem perspiciatis aliquid laudantium eum id, facere vitae assumenda consequuntur quae! Minus, natus! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga deleniti labore excepturi magni porro tempore iure ipsa quidem perspiciatis aliquid laudantium eum id, facere vitae assumenda consequuntur quae! Minus, natus!"
              links = {[
                {text: "GitHub", url: ""},
                {text: "Youtube", url: ""},
                {text: "Replit", url: ""},
              ]}
            />
          </div>
        </section>
        <section id="Skills" ref={sectionRefs.Skills} className="content-section">
          <h1>SKILLS</h1>
          <TechnicalSkills
            title="Programming and Development"
            subsections={[
              { 
                title: 'Programming Languages', 
                skills: [
                  {name: 'Python', logo: require('./images/skills/python-logo.png')},
                  {name: 'Java', logo: require('./images/skills/java-logo.png')},
                  {name: 'C++', logo: require('./images/skills/cpp-logo.png')},
                  {name: 'JavaScript', logo: require('./images/skills/js-logo.png')},
                  {name: 'HTML', logo: require('./images/skills/html-logo.png')},
                  {name: 'CSS', logo: require('./images/skills/css-logo.png')},
                  {name: 'SQL', logo: require('./images/skills/sql-icon.png')},
                ] 
              },
              { 
                title: 'Web Development', 
                skills: [
                  {name: 'React.js', logo: require('./images/skills/react-icon.png')},
                  {name: 'Node.js', logo: require('./images/skills/node-js-icon.png')},
                  {name: 'Angular', logo: require('./images/skills/angular-icon.png')},
                ] 
              },
            ]}
          />
          <TechnicalSkills
            title="Systems and Infrastructure"
            subsections={[
              { 
                title: 'DevOps and Cloud', 
                skills: [
                  {name: 'Azure DevOps', logo: require('./images/skills/azure-devops-icon.png')},
                ] 
              },
              { 
                title: 'Operating Systems', 
                skills: [
                  {name: 'Windows', logo: require('./images/skills/windows-icon.png')},
                  {name: 'Linux', logo: require('./images/skills/linux-icon.png')},
                ] 
              },
              { 
                title: 'Databases', 
                skills: [
                  {name: 'PostgresSQL', logo: require('./images/skills/postgresql-icon.png')},
                  {name: 'Firebase', logo: require('./images/skills/firebase-icon.png')},
                ] 
              },
            ]}
          />
          <TechnicalSkills
            title="Tools and Methodologies"
            subsections={[
              { 
                title: 'Version Control', 
                skills: [
                  {name: 'Git', logo: require('./images/skills/git-icon.png')},
                  {name: 'GitHub', logo: require('./images/skills/github-icon.png')},
                ] 
              },
              { 
                title: 'Software Development Methodologies', 
                skills: [
                  {name: 'Agile', logo: ''},
                  {name: 'Scrum', logo: ''},
                  {name: 'Waterfall', logo: ''},
                ] 
              },
              { 
                title: 'Other Tools', 
                skills: [
                  {name: 'Visual Studio Code', logo: require('./images/skills/visual-studio-code-icon.png')},
                  {name: 'Postman', logo: require('./images/skills/postman-icon.png')},
                  {name: 'Figma', logo: require('./images/skills/figma-icon.png')},
                ] 
              },
            ]}
          />
          <TechnicalSkills
            title="Soft Skills"
            subsections={[
              { 
                title: 'Problem-Solving', 
                skills: [
                  {name: 'Analytical thinking', logo: ''},
                  {name: 'Debugging and troubleshooting', logo: ''},
                ] 
              },
              { 
                title: 'Communication', 
                skills: [
                  {name: 'Written and verbal communication', logo: ''},
                  {name: 'Technical writing', logo: ''},
                ] 
              },
              { 
                title: 'Teamwork and Collaboration', 
                skills: [
                  {name: 'Experience working in teams', logo: ''},
                  {name: 'Collaboration tools (Microsoft Teams)', logo: ''},
                ] 
              },
              { 
                title: 'Project Management', 
                skills: [
                  {name: 'Task prioritization', logo: ''},
                  {name: 'Time management', logo: ''},
                ] 
              },
              { 
                title: 'Creativity', 
                skills: [
                  {name: 'Innovating thinking', logo: ''},
                  {name: 'Designing user-friendly interfaces', logo: ''},
                ] 
              },
              { 
                title: 'Adatability', 
                skills: [
                  {name: 'Ability to learn new technolgies quickly', logo: ''},
                ] 
              }
            ]}
          />
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
