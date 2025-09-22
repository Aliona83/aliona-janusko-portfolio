import React from "react";
import "./index.css"; 

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
            Hello! I'm passionate about creating modern, user-friendly websites
            and applications. I enjoy learning new technologies and building
            creative solutions.
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
          <ul>
            <li>HTML, CSS, JavaScript</li>
            <li>React, Node.js</li>
            <li>UI/UX Design</li>
          </ul>
        </section>

        {/* Contact */}
        <section id="contact" className="container">
          <h2>Contact</h2>
          <p>
            Email:{" "}
            <a href="mailto:you@example.com">you@example.com</a>
          </p>
          <p>
            LinkedIn:{" "}
            <a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
            >
              linkedin.com/in/yourusername
            </a>
          </p>
        </section>
      </main>

      {/* Footer */}
      <footer>
        <div className="container small">© {year} Your Name</div>
      </footer>
    </>
  );
};

export default App;
