// src/App.js
import './App.css';
import { motion } from 'framer-motion';
import profilePic from './Assets/6B0C5008-51E3-48A1-BA54-9009B1713076_1_105_c.jpeg';
import groceryPic from './Assets/GroceryListAI.png';

// Parent animation: controls overall group and staggering
const container = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
};

// Individual button animation
const item = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: 'easeOut' } }
};

function App() {
  const openLink = (url) => window.open(url, '_blank', 'noopener,noreferrer');

  const scrollToCentered = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: 'smooth',
      block: 'center'
    });
  };

  return (
    <div className="page-wrapper">
      {/* HERO */}
      <motion.div
        className="centered hero"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: 'easeOut' }}
      >
        <h1>
          hi, i&apos;m <span className="bold-name">piolo</span>
        </h1>

        <p>I code sometimes...</p>

        <p>
          I am a <b>Computer Science student</b> at CSULB with a huge interest in full stack
          development, AI, and — most of all — <b>beautiful user experience</b>.
        </p>

        <motion.div className="button-row" variants={container} initial="hidden" animate="visible">
          <motion.button
            className="my-button"
            variants={item}
            whileHover={{ scale: 1.15 }}
            transition={{ type: 'spring', stiffness: 300 }}
            onClick={() => scrollToCentered('about')}
          >
            About
          </motion.button>

          <motion.button
            className="my-button"
            variants={item}
            whileHover={{ scale: 1.15 }}
            transition={{ type: 'spring', stiffness: 300 }}
            onClick={() => scrollToCentered('projects')}
          >
            Projects
          </motion.button>

          <motion.button
            className="my-button"
            variants={item}
            whileHover={{ scale: 1.15 }}
            transition={{ type: 'spring', stiffness: 300 }}
            onClick={() => openLink('https://github.com/spiderpilo')}
          >
            GitHub
          </motion.button>

          <motion.button
            className="my-button"
            variants={item}
            whileHover={{ scale: 1.15 }}
            transition={{ type: 'spring', stiffness: 300 }}
            onClick={() => openLink('https://www.linkedin.com/in/piolo-patag-5a0b7735b/')}
          >
            LinkedIn
          </motion.button>

          <motion.button
            className="my-button"
            variants={item}
            whileHover={{ scale: 1.15 }}
            transition={{ type: 'spring', stiffness: 300 }}
            onClick={() => scrollToCentered('contact')}
          >
            Contact
          </motion.button>
        </motion.div>
      </motion.div>

      {/* ABOUT */}
      <section id="about" className="section about-section">
        <motion.img
          src={profilePic}
          alt="Piolo"
          className="profile-photo"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          viewport={{ once: true, amount: 0.4 }}
        />

        <h2>About Me</h2>
        <p>
          Hi, I’m <b>Piolo</b> — a Computer Science student based in California who enjoys building clean,
          thoughtful, and well-designed software.
        </p>
        <p>
          I focus on full-stack applications and AI-assisted tools, with an emphasis on usability and
          human-centered design.
        </p>
        <p>
          Outside of coding, I’m usually sketching UI ideas, refining personal projects, or learning
          something new.
        </p>
      </section>

      {/* PROJECTS */}
      <section
        id="projects"
        className="section projects-section"
        style={{ width: 'min(100%, 1100px)' }} // wider than default section so the image can grow
      >
        <h2>Projects</h2>

        <motion.article
          className="project-card"
          style={{
            gridTemplateColumns: '2fr 1fr', // bigger screenshot, text same size
            alignItems: 'start',
            gap: '24px'
          }}
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, ease: 'easeOut', delay: 0.15 }}
          viewport={{ once: true, amount: 0.45 }}
        >
          <motion.div
            className="project-image-wrap"
            style={{ maxHeight: '650px' }}
            initial={{ opacity: 0, scale: 0.94 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.0, ease: 'easeOut', delay: 0.35 }}
            viewport={{ once: true, amount: 0.55 }}
          >
            <img
              src={groceryPic}
              alt="AI-Powered Grocery List Assistant"
              className="project-image"
              loading="lazy"
            />
          </motion.div>

          <motion.div
            className="project-content"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.9, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="project-title">AI-Powered Grocery List Assistant</h3>

            <p className="project-description">
              A personalized grocery list app that learns from past lists to suggest items you actually buy
              together — avoiding generic recommendations.
            </p>

            <ul className="project-highlights">
              <li>Generates suggestions from current + historical lists</li>
              <li>Designed for fast, low-friction everyday use</li>
              <li>Focused on practical, user-specific behavior</li>
            </ul>

            <div className="project-actions">
              <motion.button
                className="my-button project-button"
                whileHover={{ scale: 1.06 }}
                transition={{ type: 'spring', stiffness: 300 }}
                onClick={() => openLink('https://github.com/spiderpilo')}
              >
                View GitHub
              </motion.button>
            </div>
          </motion.div>
        </motion.article>
      </section>

      {/* CONTACT */}
      <section id="contact" className="section contact-section">
        <h2>Contact Me</h2>
        <p>
          Reach me at{' '}
          <a className="email-link" href="mailto:piolo.patag@gmail.com">
            piolo.patag@gmail.com
          </a>
        </p>
      </section>
    </div>
  );
}

export default App;
