import React from "react";
import "./index.css";

// Icons
import { FaPython, FaDocker, FaGitAlt, FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";
import { SiDjango, SiPostgresql, SiAmazon, SiPandas, SiPlotly } from "react-icons/si";

const App: React.FC = () => {
  const year = new Date().getFullYear();
  const baseUrl = import.meta.env.BASE_URL; 

  return (
    <>
      <header>
        <div className="container">
          <h1>Hi, I'm Aliona Janusko</h1>
          <p>Backend Developer | Python | Django</p>
        </div>
      </header>

      <main>
        {/* About */}
        <section id="about" className="container">
          <h2>About Me</h2>
          <p>
             I’m a Junior Backend Developer and postgraduate student in Computer Science 
  (AI & Machine Learning). I build scalable backend systems with Django, REST APIs, 
  and PostgreSQL, while exploring cloud technologies like AWS and Docker. 
  Passionate about clean code and continuous learning, I enjoy turning ideas 
  into impactful solutions.
          </p>
        </section>

        {/* Nav buttons */}
        <section id="navigation" className="container center">
          <a className="btn" href="#projects">Projects</a>
          <a className="btn" href="#skills">Skills</a>
          <a className="btn" href={`${baseUrl}cv.pdf`} download>Download CV</a>
          <a className="btn" href="#contact">Contact</a>
        </section>

       {/* Projects */}
<section id="projects" className="container">
  <h2>Projects</h2>
  <div className="projects-grid">
    {/* Project 1 */}
    <div className="project-card">
      <h3>Task Management</h3>
      <img src={`${baseUrl}task-managment.png`} alt="Task Management app dashboard" />
      <div className="project-meta">
        <span>Personal Project</span>
      </div>
      <div className="project-buttons">
        <a href="https://github.com/Aliona83/task_manager_project" target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
        <a href="https://task-manager-project-mwar.onrender.com/login/?next=/" target="_blank" rel="noopener noreferrer">
          Live Demo
        </a>
      </div>
    </div>

    {/* Project 2 */}
    <div className="project-card">
      <h3>Recipe App</h3>
      <img src={`${baseUrl}recipe-app.png`} alt="Recipe App responsive screens" />
      <div className="project-meta">
        <img src={`${baseUrl}code-institute.png`} alt="Code Institute logo" style={{ width: 100, height: "auto" }} />
      </div>
      <div className="project-buttons">
        <a href="https://github.com/Aliona83/project4--test" target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
        <a href="https://your-recipe-demo-link.com" target="_blank" rel="noopener noreferrer">
          Live Demo
        </a>
      </div>
    </div>

    {/* Project 3 */}
    <div className="project-card">
      <h3>Elegancy Jewellery</h3>
      <img src={`${baseUrl}e-commerce.png`} alt="Elegancy Jewellery e-commerce UI" />
      <div className="project-meta">
        <img src={`${baseUrl}code-institute.png`} alt="Code Institute logo" style={{ width: 100, height: "auto" }} />
      </div>
      <div className="project-buttons">
        <a href="https://github.com/Aliona83/project_j" target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
        <a href="https://your-ecommerce-demo-link.com" target="_blank" rel="noopener noreferrer">
          Live Demo
        </a>
      </div>
    </div>

    {/* Project 4 */}
    <div className="project-card">
      <h3>Mentors Dashboard</h3>
      <img src={`${baseUrl}visualisation.png`} alt="Mentors analytics dashboard" />
      <div className="project-meta">
        <img src={`${baseUrl}unimenty.png`} alt="Unimenty logo" style={{ width: 100, height: "auto" }} />
      </div>
      <div className="project-buttons">
        <a href="https://github.com/Unicoach/unicoach-backend" target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
        <a href="https://your-dashboard-demo-link.com" target="_blank" rel="noopener noreferrer">
          Live Demo
        </a>
      </div>
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
    <div className="contact-inline">
      <a href="mailto:alionajanusko@gmail.com" target="_blank" rel="noopener noreferrer">
        <FaEnvelope /> alionajanusko@gmail.com
      </a>
      <a href="https://linkedin.com/in/aliona-janusko" target="_blank" rel="noopener noreferrer">
        <FaLinkedin /> linkedin.com/in/aliona-janusko
      </a>
      <a href="https://github.com/Aliona83" target="_blank" rel="noopener noreferrer">
        <FaGithub /> github.com/Aliona83
      </a>
    </div>
  </section>
      </main>

      <footer>
        <div className="container small">© {year} Aliona Janusko</div>
      </footer>
    </>
  );
};

export default App;
