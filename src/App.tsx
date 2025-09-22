import React from "react";
import "./index.css"; 
import { SiDjango, SiPostgresql, SiAmazon, SiPandas, SiPlotly } from "react-icons/si";
import { FaPython, FaDocker, FaGitAlt } from "react-icons/fa";
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
  <div className="projects-grid">

    <div className="project-card">
      <h3>Task Managment</h3>
      <img src="task-managment.png" alt="Project 1 Screenshot" />
      <p>Personal project</p>
      <a href="https://github.com/Aliona83/project-one" target="_blank" rel="noopener noreferrer">
        View on GitHub
      </a>
    </div>

    <div className="project-card">
       <h3>Recipe App</h3>
      <img src="recipe-app.png" alt="Recipe App Screenshot" />
     <img 
      src="code-institute.png" 
      alt="Code Institute Logo" 
      style={{ width: "124px", height: "auto" }} 
    />
      <a href="https://github.com/Aliona83/project-two" target="_blank" rel="noopener noreferrer">
        View on GitHub
      </a>
    </div>

    <div className="project-card">
      <h3>Elegancy Jewellery</h3>
      <img src="e-commerce.png" alt="E-commerce Screenshot" />
       <img 
      src="code-institute.png" 
      alt="Code Institute Logo" 
      style={{ width: "124px", height: "auto" }} 
    />
      <a href="https://github.com/Aliona83/project-three" target="_blank" rel="noopener noreferrer">
        View on GitHub
      </a>
    </div>

    <div className="project-card">
      <h3>Mentors Dashboard</h3>
      <img src="visualisation.png" alt="Mentors Dashboard Screenshot" />
       <img 
      src="unimenty.png" 
      alt="Code Institute Logo" 
      style={{ width: "124px", height: "auto" }} 
    />
      <a href="https://github.com/Aliona83/project-four" target="_blank" rel="noopener noreferrer">
        View on GitHub
      </a>
    </div>

  </div>
</section>



        {/* Skills */}
        <section id="skills" className="container">
  <h2>Skills</h2>
  <h3>Languages & Databases</h3>
  <div className="skills-grid">
    <div className="skill-card"><FaPython size={40} /><p>Python</p></div>
    <div className="skill-card"><SiPostgresql size={40} /><p>PostgreSQL</p></div>
    <div className="skill-card"><p>SQL</p></div>
  </div>

  <h3>Frameworks & Tools</h3>
  <div className="skills-grid">
    <div className="skill-card"><SiDjango size={40} /><p>Django / REST API</p></div>
    <div className="skill-card"><SiPandas size={40} /><p>Pandas</p></div>
    <div className="skill-card"><SiPlotly size={40} /><p>Plotly</p></div>
    <div className="skill-card"><FaDocker size={40} /><p>Docker</p></div>
    <div className="skill-card"><FaGitAlt size={40} /><p>Git & GitHub</p></div>
  </div>

  <h3>Currently Learning</h3>
  <div className="skills-grid">
    <div className="skill-card"><SiAmazon size={40} /><p>AWS</p></div>
    <div className="skill-card"><p>AI & Machine Learning</p></div>
    <div className="skill-card"><p>CI/CD (Azure DevOps)</p></div>
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
          <p>
            GitHub:{" "}
            <a href="https://github.com/Aliona83/">https://github.com/Aliona83/</a>
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
