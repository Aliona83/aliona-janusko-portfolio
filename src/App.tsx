import React from "react";
import "./index.css"; 
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaPython } from "react-icons/fa";
import { SiDjango, SiPostgresql, SiPython, SiDocker, SiAmazon } from "react-icons/si";
const App: React.FC = () => {
  const year = new Date().getFullYear();

  return (
    <>
    
      <header>
        <div className="container">
          <h1>Hi, I'm Aliona Janusko</h1>
          <p> Backend Developer | Python | Django </p>
        </div>
      </header>

      <main>
        {/* About Section */}
        <section id="about" className="container">
          <h2>About Me</h2>
          <p>
                    I’m a Junior Backend Developer and a current postgraduate student in
            Computer Science (AI & Machine Learning). I specialize in building scalable
            and efficient backend systems with Django, REST APIs, and PostgreSQL. I
            enjoy solving problems with clean code, working with cloud technologies
            like AWS, and continuously learning to grow as a developer.
          </p>
        </section>

        {/* Navigation Buttons */}
        <section id="navigation" className="container center">
          <a className="btn" href="#projects">Projects</a>
          <a className="btn" href="#skills">Skills</a>
          <a className="btn" href={`${import.meta.env.BASE_URL}cv.pdf`} download>
            Download CV
          </a>
                    <a className="btn" href="#contact">Contact</a>
        </section>

        {/* Projects */}
        <section id="projects" className="container">
          <h2>Projects</h2>
          <p>Coming soon...</p>
        </section>

        {/* Skills */}
        <section id="skills" className="container">
  <h2>Skills</h2>
  <div className="skills-grid">
    <div className="skill-card"><FaPython size={40} /> <p>Python</p></div>
    <div className="skill-card"><SiDjango size={40} /> <p>Django</p></div>
    <div className="skill-card"><SiPostgresql size={40} /> <p>PostgreSQL</p></div>
    <div className="skill-card"><SiDocker size={40} /> <p>Docker</p></div>
    <div className="skill-card"><SiAmazon size={40} /> <p>AWS</p></div>
    <div className="skill-card"><FaReact size={40} /> <p>React</p></div>
    <div className="skill-card"><FaNodeJs size={40} /> <p>Node.js</p></div>
  </div>
</section>

        {/* Contact */}
        <section id="contact" className="container">
          <h2>Contact</h2>
          <p>
            Email:{" "}
            <a href="mailto:alionajanusko@gmail.com">alionajanusko@gmail.com</a>
          </p>
          <p>
            LinkedIn:{" "}
            <a
              href="https://www.linkedin.com/in/aliona-janusko/"
              target="_blank"
              rel="noopener noreferrer"
            >
              linkedin.com/in/aliona-janusko/
            </a>
          </p>
        </section>
      </main>

      {/* Footer */}
      <footer>
        <div className="container small">© {year} Aliona Janusko</div>
      </footer>
    </>
  );
};

export default App;
