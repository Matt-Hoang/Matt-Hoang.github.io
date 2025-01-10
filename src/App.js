import React, { useEffect, useState, useRef } from 'react';
import { FaLinkedin, FaGithub, FaInstagram, FaEnvelope } from 'react-icons/fa'; // Import icons
import './App.css';
import Experience from './Experience';
import Projects from './Projects';
import TechnicalSkills from './technical-skills';
import ContactForm from './ContactForm';


const App = () => {
  const [activeSection, setActiveSection] = useState('About');
  const [isChecked, setIsChecked] = useState(false);

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

    setIsChecked((prev) => !prev);
  };

  return (
    <div className="layout">
      <div className='mobile-nav-banner'>
        <h1>MATT HOANG</h1>
      </div>
      <label className = "hamburger-menu">
        <input type="checkbox" checked={isChecked} onChange={() => setIsChecked((prev) => !prev)}></input>
      </label>
      <nav className="nav">
        <img src={require('./images/headshot.JPG')} alt="headshot" className="headshot-img-desktop" />
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
          <img src={require('./images/headshot.JPG')} alt="headshot" className="headshot-img-mobile" />
          <p>Hey, I’m Matt Hoang! I graduated from California State University Long Beach (CSULB) with a bachelor’s degree in computer science. My primary focus is software development, where I’ve worked on building various web and desktop applications. I’m also actively expanding my skill set in areas that complement and enhance my software engineering expertise, such as cloud computing, DevOps, and automation.</p>
          <p>Outside of my professional pursuits, I cherish spending time with my family and my dog, Lulu. I’m passionate about staying active, whether it’s indoor bouldering, weightlifting, or exploring the great outdoors through hiking and backpacking.</p>
          <div className="social-icons">
            <a href="mailto:matthoang19@gmail.com" target="_blank" rel="noopener noreferrer">
              <FaEnvelope className="icon" />
            </a>
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
            company={{
              logo: require('./images/experiences/paclife_logo.JPG'),
              name: "Pacific Life"
            }}
            positions={[
              {
                position: "IT Leadership Program",
                dates: "July 2024 - Present",
                description: [
                  { type: "level-one", content: "Participating in a rotational program consisting of four 6-month rotations though various technology departments at Pacific Life to build strong technical and analytical skills." },
                  { type: "level-one", content: "Rotation 1: Applications Developer" },
                  { type: "level-one", content: "Rotation 2: TBD" },
                  { type: "level-one", content: "Rotation 3: TBD" },
                  { type: "level-one", content: "Rotation 4: TBD" },

                ]
              },
              {
                position: "Application Developer",
                dates: "January 2024 - June 2024",
                description: [
                  { type: "level-one", content: "Census Application" },
                  { type: "level-two", content: "Led refactor of Python-based UI tool, improving quote generation for Workforce Benefits Division." },
                  { type: "level-two", content: "Transitioned to PyQt Model View architecture, enhancing data integrity and maintainability." },
                  { type: "level-two", content: "Implemented SonarQube pipeline for security compliance and automated build deployment." },
                  { type: "level-two", content: "Documented processes and led Knowledge Transfer (KT) sessions." },
                  { type: "level-one", content: "Document Generation" },
                  { type: "level-two", content: "Contributed to document management using OpenText ExStream for personalized, compliant communications." },
                  { type: "level-two", content: "Designed documents with complex data logic and created extraction rule instructions." },
                  { type: "level-two", content: "Supported integration team with KT sessions, testing, and debugging." }
                ]  
              },
              {
                position: "Digital Technology Intern",
                dates: "May 2023 - December 2023",
                description: [
                  { type: "level-one", content: "Gained experience in architecture, application development, and technology operations as a key member of the Workforce Benefits technology team." },
                  { type: "level-one", content: "Enhanced communication by creating a comprehensive library of 80 system icons and templates, streamlining architectural diagram creation." },
                  { type: "level-one", content: "Led implementation of DocuSign Click by researching, creating, and presenting a proof of concept, enabling quick development of a static user interface." },
                  { type: "level-one", content: "Generated JSON schemas using a schema generation tool, expediting API development and saving days of manual work." },
                  { type: "level-one", content: "Developed interpersonal and networking skills through active engagement with the internship cohort and company events." },
                  { type: "level-one", content: "Thrived in an agile environment, effectively handling frequent changes and challenges." },
                ]
              }
            ]}
          />
          <Experience
            company={{
              logo: require('./images/experiences/sara_logo.JPG'),
              name: "Scientific Applications & Research Associates, (SARA) Inc."
            }}
            positions={[
              {
                position: "Cloud Engineering & Computer Science Intern",
                dates: "May 2022 - March 2023",
                description: [
                  { type: "level-one", content: "Self-taught MS Azure, Apache Kafka, LabVIEW, and other tools for designing and testing cloud architecture for low-latency computations." },
                  { type: "level-one", content: "Set up C/C++ source code, Apache Kafka, and Azure Blob Storage on an Ubuntu VM." },
                  { type: "level-one", content: "Developed a LabVIEW program to upload inputs to Azure Blob Storage and display computed results, also used for latency testing." },
                  { type: "level-one", content: "Deployed MATLAB Production Server (MPS) on Azure using a custom ARM template, tested connection via Postman with RESTful API." },
                  { type: "level-one", content: "Created presentations, demonstrations, and detailed documentation with block diagrams." },
                  { type: "level-one", content: "Assisted with software tasks and maintained thorough system documentation." },
                ]  
              }
            ]}
                      />
        </section>
        <section id="Projects" ref={sectionRefs.Projects} className="content-section">
          <h1>PROJECTS</h1>
          <div>
            <Projects
              title="Personal Website"
              skills="React | UI/UX"
              image={require('./images/projects/Personal-Website.png')}
              description="Rebuilt my personal website to replace an older version, using the project as an opportunity to learn React. I was able to create a more dynamic and responsive experience, while refining the visual design to provide a more polished and user-friendly interface. This project served as both a practical learning experience and a way to showcase my growth in web development."
              links = {[
                {text: "Figma", url: ""},
                {text: "GitHub", url: "https://github.com/Matt-Hoang/Personal-Website"}
              ]}
            />
            <Projects
              title="Census Helper Tool"
              skills="Python | MVC | JFrog Artifactory | SonarQube | Pipelines"
              image={require('./images/projects/Census-Helper.png')}
              description="Refactored an internal tool from a monolithic approach to the MVC pattern, improving the separation of concerns. Enhanced and streamlined the validation logic to reduce redundancy, making the code more reusable with generalized functions. Also implemented an automated CI/CD pipeline, integrated JFrog Artifactory, and set up SonarQube for code quality scanning."
            />
            <Projects
              title="QuackQuackGo"
              skills="HTML | CSS | JS | Firebase | APIs | UI/UX"
              image={require('./images/projects/QuackQuackGo.jpeg')}
              description="Designed, developed, and documented an itinerary web application with a team of five members. Utilized HTML, CSS, and JavaScript to create a responsive, intuitive, and aesthetically pleasing user interface. Organized the Firebase database to ensure integrity, reliability, and efficient data retrieval from Firebase APIs."
              links = {[
                {text: "Figma", url: "https://www.figma.com/design/3rHTXa60UDVTXoWFrnrvG3/Prototypes?node-id=0-1&t=GOG3eI2iBbSiOwaE-1"},
                {text: "GitHub", url: "https://github.com/Matt-Hoang/QuackQuackGo"},
                {text: "Youtube", url: "https://www.youtube.com/watch?v=eTzmMGJANaE"}
              ]}
            />
            <Projects
              title="Dungeon Master"
              skills="Java - Design Patterns"
              image={require('./images/projects/Dungeon-Master.jpg')}
              description="Developed a console-based game in Java that allowed users to fight monsters on a 5x5 map, advance to the subsequent map, and shop for items. This was created by utilizing design patterns such as inheritance and polymorphism to structure methods and objects, with an interactive menu for user actions based on the situation."
              links = {[
                {text: "GitHub", url: "https://github.com/Matt-Hoang/DungeonMaster"},
                {text: "Replit", url: ""},
                {text: "Youtube", url: ""}
              ]}
            />
          </div>
        </section>
        <section id="Skills" ref={sectionRefs.Skills} className="content-section">
          <h1>SKILLS</h1>
          <TechnicalSkills
            title="Programming & Development"
            subsections={[
              { 
                title: 'Programming Languages', 
                skills: [
                  {name: 'Python', logo: require('./images/skills/python-logo.png')},
                  {name: 'Java', logo: require('./images/skills/java-logo.png')},
                  {name: 'C++', logo: require('./images/skills/cpp-logo.png')},
                  {name: 'JavaScript', logo: require('./images/skills/js-logo.png')},
                ] 
              },
              { 
                title: 'Markup & Style Languages', 
                skills: [
                  {name: 'HTML', logo: require('./images/skills/html-logo.png')},
                  {name: 'CSS', logo: require('./images/skills/css-logo.png')},
                  {name: 'React.js', logo: require('./images/skills/react-icon.png')},
                  {name: 'Angular', logo: require('./images/skills/angular-icon.png')},
                ] 
              },
              { 
                title: 'Backend', 
                skills: [
                  {name: 'Node.js', logo: require('./images/skills/node-js-icon.png')},
                ] 
              },
              { 
                title: 'Databases', 
                skills: [
                  {name: 'SQL', logo: require('./images/skills/sql-icon.png')},
                  {name: 'PostgresSQL', logo: require('./images/skills/postgresql-icon.png')},
                  {name: 'Firebase', logo: require('./images/skills/firebase-icon.png')},
                ] 
              },
            ]}
          />
          <TechnicalSkills
            title="Systems & Infrastructure"
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
            ]}
          />
          <TechnicalSkills
            title="Tools & Methodologies"
            subsections={[
              { 
                title: 'Version Control', 
                skills: [
                  {name: 'Git', logo: require('./images/skills/git-icon.png')},
                  {name: 'GitHub', logo: require('./images/skills/github-icon.png')},
                ] 
              },
              { 
                title: 'API Testing & Development', 
                skills: [
                  {name: 'Postman', logo: require('./images/skills/postman-icon.png')},
                  {name: 'Swagger', logo: require('./images/skills/swagger-icon.png')},
                  {name: 'MuleSoft Anypoint Platform', logo: require('./images/skills/mulesoft-icon.png')},
                ] 
              },
              { 
                title: 'IDE (Integrated Development Environment)', 
                skills: [
                  {name: 'Visual Studio Code', logo: require('./images/skills/visual-studio-code-icon.png')},
                  {name: 'Visual Studio', logo: require('./images/skills/visual-studio-icon.png')},
                  {name: 'MuleSoft Anypoint Studio', logo: require('./images/skills/mulesoft-icon.png')},

                ] 
              },
              { 
                title: 'Design Tools', 
                skills: [
                  {name: 'Canva', logo: require('./images/skills/canva-icon.png')},
                  {name: 'Figma', logo: require('./images/skills/figma-icon.png')},
                  {name: 'LucidChart', logo: require('./images/skills/lucidchart-icon.png')},
                ] 
              },
              { 
                title: 'Methodologies', 
                skills: [
                  {name: 'Agile', logo: ''},
                  {name: 'Scrum', logo: ''},
                  {name: 'Kanban', logo: ''},
                  {name: 'Waterfall', logo: ''},
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
          <ContactForm />
        </section>
      </div>
    </div>
  );
};

export default App;
