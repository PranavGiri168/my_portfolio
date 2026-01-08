import "./index.css";
import { FaGithub, FaLinkedin, FaEnvelope, FaGlobe } from "react-icons/fa";

export default function App() {

  const sendMessage = (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const email = e.target.email.value;
    const message = e.target.message.value;

    const mailto = `mailto:your-email@example.com?subject=Portfolio Contact from ${name}&body=${encodeURIComponent(
      message + "\n\nFrom: " + email
    )}`;

    window.location.href = mailto;
  };

  return (
    <>
      {/* HERO */}
      <header>
        <h1>Pranav Giri</h1>
        <p>AI / ML Engineer | Full Stack Developer | Java & Python Enthusiast</p>
        <div className="btn-group">
          <a href="#projects" className="btn">View My Work</a>
          <a href="/resume.pdf" download className="btn">Download Resume</a>
        </div>
      </header>

      {/* ABOUT */}
      <section className="about">
        <h2>About Me</h2>
        <p>
         Accomplished Software Engineer transitioning into AI/ML domain with strong foundation in full-stack development and machine learning specialization. Oracle Professional Certified with expertise in Python, TensorFlow, and deep learning frameworks. Proven ability to design, develop, and deploy intelligent systems and ML models. I am skilled in both traditional software engineering practices (version control, testing, CI/CD) and cutting-edge AI/ML technologies. Passionate about building scalable, production-ready AI solutions that drive business impact.
        </p>
      </section>

      {/* SKILLS */}
      <section>
        <h2>Skills</h2>
        <div className="skills-grid">
          <div className="card"><h3>Programming</h3><p>Java, Python, JavaScript, Kotlin</p></div>
          <div className="card"><h3>Web</h3><p>HTML, CSS, React, Flask</p></div>
          <div className="card"><h3>Databases</h3><p>MySQL, PostgreSQL, SQLite</p></div>
          <div className="card"><h3>AI / ML</h3><p>TensorFlow, Scikit-learn, NLP, Rasa</p></div>
          <div className="card"><h3>Tools</h3><p>Git, VS Code, Android Studio, IntelliJ</p></div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects">
        <h2>Projects</h2>
        <div className="projects-grid">
          <div className="card">
            <h3>AI Code Summarizer</h3>
            <p>Python + OpenAI tool that analyzes source code.</p>
          </div>
          <div className="card">
            <h3>Resume Builder Platform</h3>
            <p>React + Flask web app for building resumes.</p>
          </div>
          <div className="card">
            <h3>Android Library App</h3>
            <p>Java + SQLite based mobile application.</p>
          </div>
          <div className="card">
            <h3>Web Games</h3>
            <p>Snake, Candy Crush, Clash of Clans inspired games.</p>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact">
        <h2>Contact Me</h2>
        <form className="card contact-form" onSubmit={sendMessage}>
          <input name="name" placeholder="Your Name" required />
          <input name="email" type="email" placeholder="Your Email" required />
          <textarea name="message" rows="5" placeholder="Your Message" required />
          <button className="btn">Send Message</button>
        </form>
      </section>

     <footer className="footer">
  <p>© 2026 Pranav Giri | Built with React & Vite</p>

  <div className="socials">
    <a href="https://github.com/yourusername" target="_blank">
      <FaGithub />
    </a>

    <a href="https://linkedin.com/in/yourprofile" target="_blank">
      <FaLinkedin />
    </a>

    <a href="mailto:your-email@example.com">
      <FaEnvelope />
    </a>

    <a href="https://yourwebsite.com" target="_blank">
      <FaGlobe />
    </a>
  </div>
</footer>

    </>
  );
}
